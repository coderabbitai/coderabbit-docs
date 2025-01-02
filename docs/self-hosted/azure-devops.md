---
title: Use Self-Hosted CodeRabbit With Azure DevOps
sidebar_label: Azure DevOps
description: Instructions to self-host CodeRabbit and integrate it with Azure DevOps.
sidebar_position: 3
---

:::note

The self-hosted option is only available for CodeRabbit Enterprise customers with 500 user seats or more. Please contact [CodeRabbit Sales](mailto:sales@coderabbit.ai) to learn more about the CodeRabbit Enterprise plan.

:::

## Create a Azure DevOps User

- **Username**: Set the username to "CodeRabbit" for easier identification (optional).
- **Profile Image**: Use the CodeRabbitAI logo for the user image (optional).

## Add User to Projects

Add the CodeRabbit user to each project where you want CodeRabbit to post reviews, with rights to post reviews & open PRs.

## Create a Personal Access Token for CodeRabbit user

Generate a personal access token for the CodeRabbit user to be added in the `.env` file as `AZURE_DEVOPS_BOT_TOKEN`.

**Necessary Scopes**:

- `Code` - Full
- `Work Items` - Read, write, and manage

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
## it is recommended to use gpt-4o-mini, o1-mini, and o1-preview deployments
AZURE_GPT4OMINI_DEPLOYMENT_NAME=<gpt-4o-mini-deployment-name>
AZURE_O1MINI_DEPLOYMENT_NAME=[<o1-mini-deployment-name>]
AZURE_O1_DEPLOYMENT_NAME=[<o1-preview-deployment-name>]
## gpt-4o is optional
AZURE_GPT4O_DEPLOYMENT_NAME=<gpt-4o-deployment-name, modelVersion: 2024-08-06>
## gpt-4-turbo is optional: it’s expensive but provides better reviews than gpt-4o
AZURE_GPT4TURBO_DEPLOYMENT_NAME=[<gpt-4-turbo-deployment-name, modelVersion: turbo-2024-04-09>]

# if using AWS Bedrock
AWS_ACCESS_KEY_ID=<aws-access-key>
AWS_SECRET_ACCESS_KEY=<aws-secret-access-key>
AWS_REGION=<aws-region>

TEMP_PATH=/cache

AST_GREP_RULES_PATH=/home/jailuser/ast-grep-rules
AST_GREP_ESSENTIALS=ast-grep-essentials

SELF_HOSTED=azure-devops

AZURE_DEVOPS_BOT_TOKEN=<personal-access-token>
AZURE_DEVOPS_BOT_USERNAME=<bot-user-username>
CODERABBIT_LICENSE_KEY=<license-key>

CODERABBIT_API_KEY=[<coderabbitai-api-key>]
ENABLE_LEARNINGS=[true]
ENABLE_METRICS=[true]

JIRA_HOST=[<jira-host-url>]
JIRA_PAT=[<jira-personal-access-token>]

LINEAR_PAT=[<linear-personal-access-token>]
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
