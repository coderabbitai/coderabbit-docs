---
title: Use Self-Hosted CodeRabbit With Azure DevOps
sidebar_label: Azure DevOps
description: Instructions to self-host CodeRabbit and integrate it with Azure DevOps.
sidebar_position: 3
---

:::note

The self-hosted option is only available for CodeRabbit Enterprise customers with 500 user seats or more. Please contact [CodeRabbit Sales](mailto:sales@coderabbit.ai) to learn more about the CodeRabbit Enterprise plan.

:::

## Create an Azure DevOps User

- **Username**: Set the username to "CodeRabbit" for easier identification (optional).
- **Profile Image**: Use the CodeRabbitAI logo for the user image (optional).

We recommend using the CodeRabbit [logo](/img/integrations/logo.png) as the profile picture to ensures easy recognition.

## Add User to Projects

Add the CodeRabbit user to each project where you want CodeRabbit to post reviews, with rights to post reviews & open PRs.

## Create a Personal Access Token for CodeRabbit user

Generate a personal access token for the CodeRabbit user to be added in the `.env` file as `AZURE_DEVOPS_BOT_TOKEN`.

**Necessary Scopes**:

- `Code` - Full
- `Work Items` - Read, write, and manage
- `Build` - Read

Consult official CodeRabbitAI documentation for a detailed [guide](https://docs.coderabbit.ai/platforms/azure-devops#generating-a-personal-access-token) on creating personal access tokens.

## Add the necessary webhooks to each project

1. **Navigate to project's Service Hooks Page**: Go to the service hooks configuration page in the desired Azure DevOps project.

2. **Add the following webhooks:**

   1. Pull request created
   2. Pull request updated
   3. Pull request commented on

3. **Add Webhook URL**: Enter the URL pointing to the CodeRabbit service, followed by `/azure_webhooks` (e.g., `http://127.0.0.1:8080/azure_webhooks`) for each webhook.

## Prepare an `.env` file

Create an `.env` file with the following content:

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

TEMP_PATH=/cache

SELF_HOSTED=azure-devops

AZURE_DEVOPS_BOT_TOKEN=<personal-access-token>
AZURE_DEVOPS_BOT_USERNAME=<bot-user-username>

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

You can query `/health` endpoint to verify that the `coderabbit-agent` service is up and running.

```bash
curl 127.0.0.1:8080/health
```

## Host the image

You can host the image on a server, serverless function, or container environment and expose port `8080`. Run the Docker image with the equivalent command on your chosen platform, ensuring you replace the `.env` file path with the path to your actual `.env` file:

```bash
docker run --env-file .env --publish 127.0.0.1:8080:8080 <docker-registry>/coderabbit-agent:latest
```
