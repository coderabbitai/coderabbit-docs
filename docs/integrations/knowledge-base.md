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

## On-premises

For self-hosted / on-premises deployments, you can enable the knowledge base features by setting `ON_PREM_KNOWLEDGE_BASE=true` in the environment variables for your self-hosted docker image.

By default, CodeRabbit will store its data in the `coderabbitai/data` branch unless you set `ON_PREM_KNOWLEDGE_BASE_BRANCH=<branch_name>` with a different value.
