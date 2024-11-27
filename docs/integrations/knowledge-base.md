---
title: Knowledge Base
description: Learn about CodeRabbit's internal knowledge base and its integrations with external services.
sidebar_label: Knowledge Base
sidebar_position: 4
---

CodeRabbit utilizes an internal knowledge base that integrates with several external services to provide a seamless review and issue management experience.

## Issues

The issues knowledge base allows CodeRabbit to use the context from linked and related issues while reviewing the code.

### Jira {#jira}

#### CodeRabbit App

1. Navigate to [integrations][integrations] in the CodeRabbit app.
2. Toggle the Jira switch to enable the integration.

Upon enabling the Jira integration, CodeRabbit will redirect you to the Jira login page. Enter your Jira credentials to authenticate the integration.

#### CodeRabbit Configuration

1. Add Jira's Project Keys to the `knowledge_base.jira.project_keys` field in your project's CodeRabbit configuration file at `.coderabbit.yaml`.

### Linear {#Linear}

#### CodeRabbit App

1. Navigate to [integrations][integrations] in the CodeRabbit app.
2. Toggle the Linear switch to enable the integration.

Upon enabling the Linear integration, CodeRabbit will redirect you to the Linear login page. Enter your Linear credentials to authenticate the integration.

#### CodeRabbit Configuration

1. Add Linear's Team Keys to the `knowledge_base.linear.team_keys` field in your project's CodeRabbit configuration file at `.coderabbit.yaml`.

[integrations]: https://app.coderabbit.ai/integrations

## Learnings {#learnings}

You can tell the bot to remember things about either specific lines in files, or generally about the entire repository, or even across repositories.

For example you can add a comment in a PR to chat directly with CodeRabbit. `@coderabbitai always remember to enforce camelCase`.

Or you can comment directly on some lines of code in the PR. `@coderabbitai do not complain about lack of error handling here, it is handled higher up the execution stack.`

## Self-hosted knowledge base {#self-hosted}

For self-hosted / on-premises deployments, you can enable the knowledge base features by setting `ON_PREM_KNOWLEDGE_BASE=true` in the environment variables for your self-hosted docker image.

You must also be running ChromaDB. Use image `chromadb/chroma:0.5.20`. In your CodeRabbit docker image environment variables, set `CHROMADB_URL` to point to the hostname where ChromaDB can be reached. For persistance of your ChromaDB data, mount `/chroma/chroma` in the container to a volume mount. For more information on ChromaDB docker deployment, including how to set up authentication, refer to the [official documentation](https://docs.trychroma.com/deployment/docker). CodeRabbit will use `CHROMA_CLIENT_AUTH_CREDENTIALS` if it is set.

By default, CodeRabbit will store its data in the `coderabbitai/data` branch, unless you set a value for `ON_PREM_KNOWLEDGE_BASE_BRANCH=<branch_name>`.

### Walkthrough

- Set up a ChromaDB service on your cloud provider of choice. There is extensive documentation for generic Docker deploys, as well as cloud native deployments, in the [official Chroma documentation](https://docs.trychroma.com/deployment)
- Configure your environment variables for your CodeRabbit self-hosted deploy to be able to access Chroma. Documentation is available for [GitHub](/self-hosted/github#prepare-an-env-file).
- Restart your CodeRabbit service so it has access to the new environment variable settings.
- Create a new PR in your SCM platform.
- Add a comment to the PR to tell CodeRabbit to remember something.

`@coderabbitai always make sure to enforce camelCase`

- CodeRabbit should respond that it has added a learning.
- Check out the branch called `coderabbit/data` in the repository (or whatever branch name you have set for `ON_PREM_KNOWLEDGE_BASE_BRANCH`). It should contain a file called learnings.json with an entry containing what you told it to remember.
- Future PRs should utilize the contents of this learnings file. Congratulations! You have configured the CodeRabbit Self-hosted knowledge base.
