---
title: External Knowledge Base
description: Integrate CodeRabbit with an external knowledge base for issue tracking.
sidebar_label: Knowledge Base
sidebar_position: 4
---

CodeRabbit integrates with external knowledge bases to provide a seamless experience for issue tracking. This will allow CodeRabbit to use the context from the linked issues while reviewing the code.

## Jira {#jira}

### CodeRabbit App

1. Navigate to [integrations][integrations] in the CodeRabbit app.
2. Toggle the Jira switch to enable the integration.

Upon enabling the Jira integration, CodeRabbit will redirect you to the Jira login page. Enter your Jira credentials to authenticate the integration.

### CodeRabbit Configuration

1. Add Jira's Project Keys to the `knowledge_base.jira.project_keys` field in your project's CodeRabbit configuration file at `.coderabbit.yaml`.

## Linear {#Linear}

### CodeRabbit App

1. Navigate to [integrations][integrations] in the CodeRabbit app.
2. Toggle the Linear switch to enable the integration.

Upon enabling the Linear integration, CodeRabbit will redirect you to the Linear login page. Enter your Linear credentials to authenticate the integration.

### CodeRabbit Configuration

1. Add Linear's Team Keys to the `knowledge_base.linear.team_keys` field in your project's CodeRabbit configuration file at `.coderabbit.yaml`.

[integrations]: https://app.coderabbit.ai/integrations
