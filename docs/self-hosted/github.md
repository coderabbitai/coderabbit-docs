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

# if using Anthropic
LLM_PROVIDER=anthropic
LLM_TIMEOUT=360000
ANTHROPIC_API_KEYS=<anthropic-key>
ANTHROPIC_BASE_URL=[<anthropic-base-url>]

TEMP_PATH=/cache

AST_GREP_RULES_PATH=/home/jailuser/ast-grep-rules
AST_GREP_ESSENTIALS=ast-grep-essentials

SELF_HOSTED=github

GH_WEBHOOK_SECRET=<webhook-secret>
GITHUB_HOSTNAME=[<github-hostname>]
GITHUB_APP_CLIENT_ID=<github-app-client-id>
GITHUB_APP_CLIENT_SECRET=<github-app-client-secret>
GITHUB_APP_ID=<github-app-id>
GITHUB_APP_PEM_FILE=<flattened-pem-file>

CODERABBIT_LICENSE_KEY=<license-key>

CODERABBIT_API_KEY=<coderabbitai-api-key>
# This will use your CodeRabbit API key to store learnings on our servers.
ENABLE_LEARNINGS=[true]
ENABLE_METRICS=[true]

JIRA_HOST=[<jira-host-url>]
JIRA_PAT=[<jira-personal-access-token>]

LINEAR_PAT=[<linear-personal-access-token>]

OAUTH2_ENDPOINT=[<endpoint>]
OAUTH2_CLIENT_ID=[<client-id>]
OAUTH2_CLIENT_SECRET=[<client-secret>]
```

:::note

- If you are using Azure OpenAI, verify that the model deployment names are in the .env file.
- Values marked with [] are optional to provide.
- For `GITHUB_APP_PEM_FILE`, flatten the PEM file by replacing newlines with `\n`.
- For `GITHUB_HOSTNAME`, use GitHub Enterprise server's hostname, for example, “github.acme-inc.com”
- You can generate `CODERABBIT_API_KEY` from CodeRabbit UI -> Organizations Settings -> API Keys.
- Refer to the [Self-hosted knowledge base](/integrations/knowledge-base#self-hosted) section for details on the `ON_PREM_KNOWLEDGE_BASE`.

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

You can query `/health` endpoint to verify that the coderabbit-agent service is up and running.

```bash
curl 127.0.0.1:8080/health
```

## Install the GitHub App

You can install the GitHub App on your GitHub organization or user account and point the Webhook URL to the hosted CodeRabbit instance, for example, `http://127.0.0.1:8080/github_webhooks`. GitHub will send events to the CodeRabbit instance.
