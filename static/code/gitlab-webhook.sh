#!/usr/bin/env bash

## gitlab-webhook.sh
# Add a webhook to one project, or every project in a subgroup tree.

## Example usage:
# Make sure the script is executable:
# chmod +x gitlab-webhook.sh

# PAT auto-detected header
# export GITLAB_TOKEN="glpat-xxxxx"
# ./gitlab-add-webhook.sh \
#   -h "gitlab.example.com" -u "https://ci.example.com/gitlab-hook" \
#   -s "mySecret" -p 42

# PAT with explicit header
# ./gitlab-add-webhook.sh \
#   -h "gitlab.example.com" -u "https://ci.example.com/gitlab-hook" \
#   -s "mySecret" -g "mygroup/mysubgroup/myproject" \
#   -t "glpat-qj5s..." \
#   -A "PRIVATE-TOKEN"

# OAuth token with explicit header
# ./gitlab-add-webhook.sh \
#   -h "gitlab.example.com" -u "https://ci.example.com/gitlab-hook" \
#   -s "mySecret" -g "company/backend" \
#   -t "eyJhbGciOi..." \
#   -A "Authorization: Bearer"


set -euo pipefail

usage() {
  cat <<EOF
Usage:
  $0 -h <gitlab-host> -u <webhook-url> -s <webhook-secret> \\
     [-t <access-token>] [-A <auth-header>] [-p <project> | -g <group>] [-v]

Required:
  -h  GitLab host (e.g. gitlab.example.com)
  -u  Webhook endpoint URL to receive POSTs
  -s  Webhook secret token (used for signature verification)

Authentication (one of):
  -t  Access token (PAT, project, group or OAuth). If omitted, \$GITLAB_TOKEN is used
  -A  Auth header to use. Default detects:
        PAT → "PRIVATE-TOKEN"
        anything else → "Authorization: Bearer"

Scope (choose one):
  -p  Project ID or full path (e.g. 42 or group/app)
  -g  Group ID or full path, recurse through all subgroups & projects

Options:
  -v  Verbose output (show individual project IDs in final summary)
EOF
  exit 1
}

HOST="" HOOK_URL="" HOOK_SECRET=""
TOKEN="${GITLAB_TOKEN:-}" AUTH_HEADER=""
PROJECT="" GROUP="" VERBOSE=false

while getopts "h:u:s:t:A:p:g:v" opt; do
  case "$opt" in
    h) HOST=$OPTARG ;;
    u) HOOK_URL=$OPTARG ;;
    s) HOOK_SECRET=$OPTARG ;;
    t) TOKEN=$OPTARG ;;
    A) AUTH_HEADER=$OPTARG ;;
    p) PROJECT=$OPTARG ;;
    g) GROUP=$OPTARG ;;
    v) VERBOSE=true ;;
    *) usage ;;
  esac
done

# Mandatory checks
[[ -z $HOST || -z $HOOK_URL || -z $HOOK_SECRET ]] && usage
[[ -n $PROJECT && -n $GROUP ]] && usage
[[ -z $PROJECT && -z $GROUP ]] && usage

# Token handling
if [[ -z $TOKEN ]]; then
  echo "[ERROR] No access token provided. Use -t or set \$GITLAB_TOKEN" >&2
  exit 1
fi

# Choose header if not forced
if [[ -z $AUTH_HEADER ]]; then
  if [[ $TOKEN == glpat-* || $TOKEN == "PAT-"* ]]; then
    AUTH_HEADER="PRIVATE-TOKEN"
  else
    AUTH_HEADER="Authorization: Bearer"
  fi
fi

API="https://${HOST}/api/v4"
CURL_BASE=(curl -sSf --header "${AUTH_HEADER}: ${TOKEN}")

# Track processed projects to avoid duplicates
declare -A PROCESSED_PROJECTS
# Track projects where webhooks were successfully added
WEBHOOK_PROJECTS=()
# Track projects where webhooks already existed
EXISTING_WEBHOOK_PROJECTS=()
# Progress counters
TOTAL_PROJECTS_FOUND=0
PROJECTS_PROCESSED=0

##############################################################################
# Helpers
##############################################################################
url_encode() {
  local string="$1"
  # URL encode the string using printf and sed
  printf '%s' "$string" | sed 's/\//%2F/g; s/ /%20/g; s/@/%40/g; s/:/%3A/g; s/#/%23/g; s/?/%3F/g; s/&/%26/g; s/=/%3D/g; s/+/%2B/g'
}

# Function to handle paginated API calls
fetch_paginated() {
  local url=$1
  local page=1
  local per_page=100

  while true; do
    local paginated_url="${url}?per_page=${per_page}&page=${page}"

    # Add existing query params if they exist
    if [[ "$url" == *"?"* ]]; then
      paginated_url="${url}&per_page=${per_page}&page=${page}"
    fi

    local response
    response=$("${CURL_BASE[@]}" "$paginated_url" 2>/dev/null) || {
      echo "[ERROR] Failed to fetch page $page from $url" >&2
      return 1
    }

    # Check if response is empty array or null
    if [[ "$response" == "[]" || "$response" == "null" ]]; then
      break
    fi

    # Extract results from current page
    local page_results
    page_results=$(echo "$response" | jq -r '.[].id' 2>/dev/null) || {
      echo "[ERROR] Failed to parse JSON response from page $page" >&2
      return 1
    }

    # If no results on this page, we're done
    if [[ -z "$page_results" ]]; then
      break
    fi

    # Count projects found and show progress
    local page_count
    page_count=$(echo "$page_results" | wc -l)
    TOTAL_PROJECTS_FOUND=$((TOTAL_PROJECTS_FOUND + page_count))
    echo "[PROGRESS] Found $page_count projects on page $page (total: $TOTAL_PROJECTS_FOUND)" >&2

    # Output page results
    echo "$page_results"

    # If we got less than per_page results, we're on the last page
    local item_count
    item_count=$(echo "$response" | jq '. | length' 2>/dev/null) || 0
    if [[ "$item_count" -lt "$per_page" ]]; then
      break
    fi

    ((page++))
  done
}

create_hook() {
  local pid=$1

  # Skip if already processed
  if [[ -n "${PROCESSED_PROJECTS[$pid]:-}" ]]; then
    return 0
  fi

  # Mark as processed
  PROCESSED_PROJECTS[$pid]=1
  PROJECTS_PROCESSED=$((PROJECTS_PROCESSED + 1))

  local encoded_pid
  # URL encode if pid is not purely numeric
  if [[ $pid =~ ^[0-9]+$ ]]; then
    encoded_pid=$pid
  else
    encoded_pid=$(url_encode "$pid")
  fi

  # Check if webhook already exists
  local existing_webhooks
  existing_webhooks=$("${CURL_BASE[@]}" "${API}/projects/${encoded_pid}/hooks" 2>/dev/null) || {
    echo "[ERROR] Failed to fetch existing webhooks for project $pid" >&2
    return 1
  }

  # Check if our webhook URL already exists
  if echo "$existing_webhooks" | jq -e --arg url "$HOOK_URL" '.[] | select(.url == $url)' >/dev/null 2>&1; then
    [[ "$VERBOSE" == "true" ]] && echo "[INFO] Webhook already exists for project: $pid" >&2
    EXISTING_WEBHOOK_PROJECTS+=("$pid")
    return 0
  fi

  [[ "$VERBOSE" == "true" ]] && echo "[INFO] Adding webhook to project: $pid" >&2

  "${CURL_BASE[@]}" --request POST \
    --data-urlencode "url=${HOOK_URL}" \
    --data "token=${HOOK_SECRET}" \
    --data "push_events=true" \
    --data "note_events=true" \
    --data "issues_events=true" \
    --data "merge_requests_events=true" \
    --data "enable_ssl_verification=true" \
    "${API}/projects/${encoded_pid}/hooks" \
    >/dev/null

  # Track successful webhook creation
  WEBHOOK_PROJECTS+=("$pid")
}

traverse_group() {
  local gid=$1
  local encoded_gid
  # URL encode if gid is not purely numeric
  if [[ $gid =~ ^[0-9]+$ ]]; then
    encoded_gid=$gid
  else
    encoded_gid=$(url_encode "$gid")
  fi

  # projects (includes nested sub-groups) - with pagination
  while IFS= read -r pid; do
    [[ -n "$pid" ]] && create_hook "$pid"
  done < <(
    fetch_paginated "${API}/groups/${encoded_gid}/projects?include_subgroups=true"
  )

  # recurse explicit subgroups (older GitLab) - with pagination
  while IFS= read -r sg; do
    [[ -n "$sg" ]] && traverse_group "$sg"
  done < <(
    fetch_paginated "${API}/groups/${encoded_gid}/subgroups"
  )
}

##############################################################################
# Main
##############################################################################
echo "[INFO] Starting webhook processing..." >&2

if [[ -n $PROJECT ]]; then
  echo "[INFO] Processing single project: $PROJECT" >&2
  create_hook "$PROJECT"
else
  echo "[INFO] Processing group and subgroups: $GROUP" >&2
  traverse_group "$GROUP"
fi

echo "[INFO] Finished processing all projects" >&2

# Print final summary
total_projects=$((${#WEBHOOK_PROJECTS[@]} + ${#EXISTING_WEBHOOK_PROJECTS[@]}))

if [[ $total_projects -eq 0 ]]; then
  echo "[INFO] No projects were processed"
else
  if [[ ${#WEBHOOK_PROJECTS[@]} -gt 0 ]]; then
    if [[ "$VERBOSE" == "true" ]]; then
      echo "[INFO] Webhooks installed successfully on ${#WEBHOOK_PROJECTS[@]} project(s):"
      for pid in "${WEBHOOK_PROJECTS[@]}"; do
        echo "  - Project ID: $pid"
      done
    else
      echo "[INFO] Webhooks installed successfully on ${#WEBHOOK_PROJECTS[@]} project(s)"
    fi
  fi

  if [[ ${#EXISTING_WEBHOOK_PROJECTS[@]} -gt 0 ]]; then
    if [[ "$VERBOSE" == "true" ]]; then
      echo "[INFO] Webhooks already existed on ${#EXISTING_WEBHOOK_PROJECTS[@]} project(s):"
      for pid in "${EXISTING_WEBHOOK_PROJECTS[@]}"; do
        echo "  - Project ID: $pid"
      done
    else
      echo "[INFO] Webhooks already existed on ${#EXISTING_WEBHOOK_PROJECTS[@]} project(s)"
    fi
  fi

  echo "[INFO] Total projects processed: $total_projects"
fi
