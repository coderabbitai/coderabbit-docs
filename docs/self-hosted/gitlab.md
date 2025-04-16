---
title: Use Self-Hosted CodeRabbit With GitLab
sidebar_label: GitLab
description: Instructions to self-host CodeRabbit and integrate it with GitLab.
sidebar_position: 2
---

:::note

The self-hosted option is only available for CodeRabbit Enterprise customers with 500 user seats or more. Please contact [CodeRabbit Sales](mailto:sales@coderabbit.ai) to learn more about the CodeRabbit Enterprise plan.

:::

## Create a GitLab User

- **Username**: Set the username to "CodeRabbit" for easier identification (optional).
- **Profile Image**: Use the CodeRabbitAI logo for the user image (optional).

We recommend using the CodeRabbit [logo](/img/integrations/logo.png) as the profile picture to ensures easy recognition.

## Add User to Projects

Add the CodeRabbit user to each project where you want CodeRabbit to post reviews, with at least `Developer` access.

## Create a Personal Access Token for CodeRabbit user

Generate a personal access token for the CodeRabbit user to be added in the `.env` file as `GITLAB_BOT_TOKEN`.

**Necessary Scopes**:

- `api`

Consult official CodeRabbitAI documentation for a detailed [guide](https://docs.coderabbit.ai/integrations/self-hosted-gitlab#generating-personal-access-token) on creating personal access tokens.

## Add a webhook to each project

1. **Navigate to Add Webhook Page**: Go to the webhook configuration page in the desired GitLab project.
2. **Add Webhook URL**: Enter the URL pointing to the CodeRabbit service, followed by `/gitlab_webhooks` (e.g., `http://127.0.0.1:8080/gitlab_webhooks`).
3. **Generate and Save Secret Token**: Generate a secret token, add it to the webhook, and store it securely. This will be needed for the `.env` file as `GITLAB_WEBHOOK_SECRET` (you can use a single secret token for all projects).
4. Select triggers:

   - Push events
   - Comments
   - Issues events
   - Merge request events

## Prepare a `.env` file

Create a `.env` file with the following content:

```bash
# if using OpenAI
LLM_PROVIDER=openai
LLM_TIMEOUT=360000
OPENAI_API_KEYS=<openai-key>
OPENAI_BASE_URL=[<openai-base-url>]
OPENAI_ORG_ID=[<openai-org-id>]
OPENAI_PROJECT_ID=[<openai-project-id>]

# if using Azure OpenAI
LLM_PROVIDER=azure-openai
LLM_TIMEOUT=360000
AZURE_OPENAI_ENDPOINT=<azure-openai-endpoint>
AZURE_OPENAI_API_KEY=<key>
## it is recommended to use gpt-4o-mini, o3-mini, and o1 deployments.
AZURE_GPT4OMINI_DEPLOYMENT_NAME=<gpt-4o-mini-deployment-name>
AZURE_O3MINI_DEPLOYMENT_NAME=<o3-mini-deployment-name>
AZURE_O1_DEPLOYMENT_NAME=<o1-deployment-name>
# optionally, you can swap o3-mini with o1-mini
AZURE_O1MINI_DEPLOYMENT_NAME=[<o1-mini-deployment-name>]

# OAuth2 Configuration (optional)
# This will use client_credentials flow to get an access token,
# and use it to make requests to the LLM provider.
# Here is more information on this flow: https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-client-creds-grant-flow#first-case-access-token-request-with-a-shared-secret
# It is expected that the response from the OAuth2 server will be in the format
# {
#   "access_token": "<access-token>",
#   "token_type": "Bearer",
#   "expires_in": 3599,
# }
OAUTH2_ENDPOINT=[<endpoint>]
OAUTH2_CLIENT_ID=[<client-id>]
OAUTH2_CLIENT_SECRET=[<client-secret>]
OAUTH2_SCOPE=[<oauth2-scope>]

HTTP_PROXY=[<http-proxy-url>]
HTTPS_PROXY=[<https-proxy-url>]
NO_PROXY=[<no-proxy-url>]

# if using AWS Bedrock
LLM_PROVIDER=bedrock-anthropic
LLM_TIMEOUT=360000
AWS_ACCESS_KEY_ID=<aws-access-key>
AWS_SECRET_ACCESS_KEY=<aws-secret-access-key>
AWS_REGION=<aws-region>

# if using Anthropic
LLM_PROVIDER=anthropic
LLM_TIMEOUT=360000
ANTHROPIC_API_KEYS=<anthropic-key>
ANTHROPIC_BASE_URL=[<anthropic-base-url>]

TEMP_PATH=/cache

SELF_HOSTED=gitlab

GITLAB_BOT_TOKEN=<personal-access-token>
GITLAB_WEBHOOK_SECRET=<webhook-secret-key>

CODERABBIT_LICENSE_KEY=<license-key>

CODERABBIT_API_KEY=<coderabbitai-api-key>
ENABLE_LEARNINGS=[true]
ENABLE_METRICS=[true]

JIRA_HOST=[<jira-host-url>]
JIRA_PAT=[<jira-personal-access-token>]

LINEAR_PAT=[<linear-personal-access-token>]

ENABLE_WEB_SEARCH=[true]
PERPLEXITY_API_KEY=[<perplexity-api-key>]
```

:::note

- If you are using Azure OpenAI, verify that the model deployment names are in the .env file.
- Values marked with [] are not optional to provide.
- You can generate `CODERABBIT_API_KEY` from CodeRabbit UI -> Organizations Settings -> API Keys.

:::

## Pull the CodeRabbit Docker image

Authenticate and pull the Docker image using the provided credentials file:

```bash
cat coderabbit.json | docker login -u _json_key --password-stdin us-docker.pkg.dev
docker pull <docker-registry>/coderabbit-agent:latest
```

### Verify the image is up

You can query `/health` endpoint to verify that the coderabbit-agent service is up and running.

```bash
curl 127.0.0.1:8080/health
```

## Host the image

You can host the image on a server, serverless function, or container environment and expose port `8080`. Run the Docker image with the equivalent command on your chosen platform, ensuring you replace the `.env` file path with the path to your actual `.env` file:

```bash
docker run --env-file .env --publish 127.0.0.1:8080:8080 <docker-registry>/coderabbit-agent:latest
```
