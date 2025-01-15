---
title: Knowledge Base
description: Learn about CodeRabbit's internal knowledge base and its integrations with external services.
sidebar_label: Knowledge Base
sidebar_position: 4
---

CodeRabbit utilizes an internal knowledge base that integrates with several external services to provide a seamless review and issue management experience.

## Issue Tracking Integration

CodeRabbit can integrate with your issue tracking systems to provide better context during code reviews. For details on setting up issue tracking integrations, see our [Issue Integrations](./issue-integrations.md) guide.

## Learnings {#learnings}

You can tell the bot to remember things about either specific lines in files, or generally about the entire repository, or even across repositories.

For example you can add a comment in a PR to chat directly with CodeRabbit. `@coderabbitai always remember to enforce camelCase`.

Or you can comment directly on some lines of code in the PR. `@coderabbitai do not complain about lack of error handling here, it is handled higher up the execution stack.`

:::tip Video Tutorial
Watch our [video walkthrough on learnings](https://www.youtube.com/watch?v=Yu0cmmOYA-U) for more information.
:::

## Self-hosted knowledge base {#self-hosted}

For self-hosted / on-premises deployments, you can enable the knowledge base features by setting `SELF_HOSTED_KNOWLEDGE_BASE=true` in the environment variables for your self-hosted docker image.

You must also be running ChromaDB. Use image `chromadb/chroma:0.5.20`. In your CodeRabbit docker image environment variables, set `CHROMADB_URL` to point to the hostname where ChromaDB can be reached. For persistance of your ChromaDB data, mount `/chroma/chroma` in the container to a volume mount. For more information on ChromaDB docker deployment, including how to set up authentication, refer to the [official documentation](https://docs.trychroma.com/deployment/docker). CodeRabbit will use `CHROMA_CLIENT_AUTH_CREDENTIALS` if it is set.

By default, CodeRabbit will store its data in the `coderabbitai/data` branch, unless you set a value for `SELF_HOSTED_KNOWLEDGE_BASE_BRANCH=<branch_name>`.

### Walkthrough

- Set up a ChromaDB service on your cloud provider of choice. There is extensive documentation for generic Docker deploys, as well as cloud native deployments, in the [official Chroma documentation](https://docs.trychroma.com/deployment)
- Configure your environment variables for your CodeRabbit self-hosted deploy to be able to access Chroma. Documentation is available for [GitHub](/self-hosted/github#prepare-an-env-file).
- Restart your CodeRabbit service so it has access to the new environment variable settings.
- Create a new PR in your SCM platform.
- Add a comment to the PR to tell CodeRabbit to remember something.

`@coderabbitai always make sure to enforce camelCase`

- CodeRabbit should respond that it has added a learning.
- Check out the branch called `coderabbit/data` in the repository (or whatever branch name you have set for `SELF_HOSTED_KNOWLEDGE_BASE_BRANCH`). It should contain a file called learnings.json with an entry containing what you told it to remember.
- Future PRs should utilize the contents of this learnings file. Congratulations! You have configured the CodeRabbit Self-hosted knowledge base.
