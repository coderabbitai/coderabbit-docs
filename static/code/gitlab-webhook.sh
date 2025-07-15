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
     [-t <access-token>] [-A <auth-header>] [-p <project> | -g <group>]

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
EOF
  exit 1
}

HOST="" HOOK_URL="" HOOK_SECRET=""
TOKEN="${GITLAB_TOKEN:-}" AUTH_HEADER=""
PROJECT="" GROUP=""

while getopts "h:u:s:t:A:p:g:" opt; do
  case "$opt" in
    h) HOST=$OPTARG ;;
    u) HOOK_URL=$OPTARG ;;
    s) HOOK_SECRET=$OPTARG ;;
    t) TOKEN=$OPTARG ;;
    A) AUTH_HEADER=$OPTARG ;;
    p) PROJECT=$OPTARG ;;
    g) GROUP=$OPTARG ;;
    *) usage ;;
  esac
done

# Mandatory checks
[[ -z $HOST || -z $HOOK_URL || -z $HOOK_SECRET ]] && usage
[[ -n $PROJECT && -n $GROUP ]] && usage
[[ -z $PROJECT && -z $GROUP ]] && usage

# Token handling
if [[ -z $TOKEN ]]; then
  echo "❌  No access token provided. Use -t or set \$GITLAB_TOKEN" >&2
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

##############################################################################
# Helpers
##############################################################################
url_encode() {
  local string="$1"
  # URL encode the string using printf and sed
  printf '%s' "$string" | sed 's/\//%2F/g; s/ /%20/g; s/@/%40/g; s/:/%3A/g; s/#/%23/g; s/?/%3F/g; s/&/%26/g; s/=/%3D/g; s/+/%2B/g'
}

create_hook() {
  local pid=$1

  # Skip if already processed
  if [[ -n "${PROCESSED_PROJECTS[$pid]:-}" ]]; then
    return 0
  fi

  # Mark as processed
  PROCESSED_PROJECTS[$pid]=1

  local encoded_pid
  # URL encode if pid is not purely numeric
  if [[ $pid =~ ^[0-9]+$ ]]; then
    encoded_pid=$pid
  else
    encoded_pid=$(url_encode "$pid")
  fi

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
  # projects (includes nested sub-groups)
  while IFS= read -r pid; do
    [[ -n "$pid" ]] && create_hook "$pid"
  done < <(
    "${CURL_BASE[@]}" \
      "${API}/groups/${encoded_gid}/projects?include_subgroups=true&per_page=100" |
      jq -r '.[].id'
  )
  # recurse explicit subgroups (older GitLab)
  while IFS= read -r sg; do
    [[ -n "$sg" ]] && traverse_group "$sg"
  done < <(
    "${CURL_BASE[@]}" "${API}/groups/${encoded_gid}/subgroups?per_page=100" |
      jq -r '.[].id'
  )
}

##############################################################################
# Main
##############################################################################
if [[ -n $PROJECT ]]; then
  create_hook "$PROJECT"
else
  traverse_group "$GROUP"
fi

# Print final summary
if [[ ${#WEBHOOK_PROJECTS[@]} -eq 0 ]]; then
  echo "❌  No webhooks were installed."
else
  echo "✅  Webhooks installed successfully on ${#WEBHOOK_PROJECTS[@]} project(s):"
  for pid in "${WEBHOOK_PROJECTS[@]}"; do
    echo "  - Project ID: $pid"
  done
fi
