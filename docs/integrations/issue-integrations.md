---
title: Issue Integrations
description: Learn about CodeRabbit's integrations with issue tracking systems like Jira and Linear.
sidebar_label: Issue Integrations
sidebar_position: 5
---

CodeRabbit integrates with popular issue tracking systems to provide context from linked and related issues while reviewing code.

## Jira {#jira}

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

### CodeRabbit App

1. Navigate to [integrations][integrations] in the CodeRabbit app.
2. Toggle the Jira switch to enable the integration.

Upon enabling the Jira integration, CodeRabbit will redirect you to the Jira login page. Enter your Jira credentials to authenticate the integration.

### CodeRabbit Configuration

1. Add Jira's Project Keys to the `knowledge_base.jira.project_keys` field in your project's CodeRabbit configuration file at `.coderabbit.yaml`.

## Linear {#Linear}

```mdx-code-block
<ProPlanNotice />
```

### CodeRabbit App

1. Navigate to [integrations][integrations] in the CodeRabbit app.
2. Toggle the Linear switch to enable the integration.

Upon enabling the Linear integration, CodeRabbit will redirect you to the Linear login page. Enter your Linear credentials to authenticate the integration.

### CodeRabbit Configuration

1. Add Linear's Team Keys to the `knowledge_base.linear.team_keys` field in your project's CodeRabbit configuration file at `.coderabbit.yaml`.

[integrations]: https://app.coderabbit.ai/integrations
