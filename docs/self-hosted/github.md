---
title: Use Self-Hosted CodeRabbit With GitHub
sidebar_label: GitHub
description: Instructions to self-host CodeRabbit and integrate it with GitHub.
sidebar_position: 1
---

:::note

The self-hosted option is only available for CodeRabbit Enterprise customers with 500 user seats or more. Please contact [CodeRabbit Sales](mailto:sales@coderabbit.ai) to learn more about the CodeRabbit Enterprise plan.

:::

## Create a GitHub App

Set the following Repository permissions:

- Checks: Read-only
- Contents: Read and write
- Commit statuses: Read and write
- Discussions: Read-only
- Issues: Read & write
- Metadata: Read-only
- Pull requests: Read & write
- Actions: Read-only

Set the following Organization permissions:

- Members: Read-only

Set the following events:

- Meta
- Issue comment
- Issues
- Label
- Public
- Pull request
- Pull request review
- Pull request review comment
- Pull request review thread
- Push
- Release

We recommend using the CodeRabbit [logo](/img/integrations/logo.png) as the profile picture to ensures easy recognition.

## Gather information from the GitHub App

- App ID
- Client ID
- Client Secret
- Webhook Secret

## Prepare an `.env` file

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
## it is recommended to deploy gpt-4.1-mini, o4-mini, o3 deployments, gpt-4.1 (optionally).
AZURE_GPT41MINI_DEPLOYMENT_NAME=<gpt-4.1-mini-deployment-name>
AZURE_O4MINI_DEPLOYMENT_NAME=<o4-mini-deployment-name>
AZURE_O3_DEPLOYMENT_NAME=<o3-deployment-name>
AZURE_GPT41_DEPLOYMENT_NAME=[<gpt-4.1-deployment-name>]
# optionally, deploy gpt-4o-mini instead of gpt-4.1-mini
AZURE_GPT4OMINI_DEPLOYMENT_NAME=[<gpt-4o-mini-deployment-name>]
# optionally, deploy o3-mini instead of o4-mini
AZURE_O3MINI_DEPLOYMENT_NAME=[<o3-mini-deployment-name>]
# optionally, deploy o1 instead of o3
AZURE_O1_DEPLOYMENT_NAME=[<o1-deployment-name>]

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

SELF_HOSTED=github

GH_WEBHOOK_SECRET=<webhook-secret>
GITHUB_HOSTNAME=[<github-hostname>]
GITHUB_APP_CLIENT_ID=<github-app-client-id>
GITHUB_APP_CLIENT_SECRET=<github-app-client-secret>
GITHUB_APP_ID=<github-app-id>
GITHUB_APP_PEM_FILE=<flattened-pem-file>

CODERABBIT_LICENSE_KEY=<license-key>

CODERABBIT_API_KEY=<coderabbitai-api-key>
ENABLE_METRICS=[true]
ENABLE_LEARNINGS=[true]
# if using CodeRabbit's learnings, also provide the following
# For example, s3://bucket/path/to/database, gs://bucket/path/to/database, etc.
OBJECT_STORE_URI=[<object-store-uri>]

JIRA_HOST=[<jira-host-url>]
JIRA_PAT=[<jira-personal-access-token>]

LINEAR_PAT=[<linear-personal-access-token>]

ENABLE_WEB_SEARCH=[true]
PERPLEXITY_API_KEY=[<perplexity-api-key>]
```

:::note

- If you are using Azure OpenAI, verify that the model deployment names are in the .env file.
- Values marked with [] are optional to provide.
- For `GITHUB_APP_PEM_FILE`, flatten the PEM file by replacing newlines with `\n`.
- For `GITHUB_HOSTNAME`, use GitHub Enterprise server's hostname, for example, “github.acme-inc.com”
- You can generate `CODERABBIT_API_KEY` from CodeRabbit UI -> Organizations Settings -> API Keys.
- When `ENABLE_LEARNINGS` is set to `true`, CodeRabbit will use `CODERABBIT_API_KEY` to store learnings on our servers.

:::

## Pull the CodeRabbit Docker image

Using the credentials file shared with you, first authenticate and then pull the image.

```bash
cat coderabbit.json | docker login -u _json_key --password-stdin us-docker.pkg.dev
docker pull <docker-registry>/coderabbit-agent:latest
```

## Host the image

You can choose to host it on a server, serverless function, or a container environment and expose the port “8080”. Run the Docker image with the equivalent of the following command on the platform of your choice, replacing the “.env” file with the path to your “.env” file:

```bash
docker run --env-file .env --publish 127.0.0.1:8080:8080 <docker-registry>/coderabbit-agent:latest
```

### Verify the image is up

You can query `/health` endpoint to verify that the `coderabbit-agent` service is up and running.

```bash
curl 127.0.0.1:8080/health
```

## Install the GitHub App

You can install the GitHub App on your GitHub organization or user account and point the Webhook URL to the hosted CodeRabbit instance, for example, `http://127.0.0.1:8080/github_webhooks`. GitHub will send events to the CodeRabbit instance.
