---
title: Integrate issue tracking
description: Learn about CodeRabbit's integrations with issue tracking systems like Jira and Linear.
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

### Example Usage

You can link an issue to your pull request, allowing CodeRabbit to assess whether your changes satisfy the issue's requirements.

To link a Jira Issue, you can add the Jira Issue into the PR description as shown below.

```text
// (Jira Project Key - Issue Number)
Closes CR-5
```

You can also create new Jira issues directly through CodeRabbit. See our [Issue Creation guide](../guides/issue-creation.md#jira) for details.

## Linear {#Linear}

```mdx-code-block
<ProPlanNotice />
```

With CodeRabbit, you can easily link your pull requests with Linear. It makes your life simpler by automatically creating Linear issues with all the code context, keeping your issues and pull requests in sync both ways. Plus, it lets you generate issues straight from pull requests, track how you're hitting your goals, and even turn code review feedback into actionable tasks in Linear.

### CodeRabbit App

1. Navigate to [integrations][integrations] in the CodeRabbit app.
2. Toggle the Linear switch to enable the integration.

Upon enabling the Linear integration, CodeRabbit will redirect you to the Linear login page. Enter your Linear credentials to authenticate the integration.

### CodeRabbit Configuration

1. Add Linear's Team Keys to the `knowledge_base.linear.team_keys` field in your project's CodeRabbit configuration file at `.coderabbit.yaml`.

[integrations]: https://app.coderabbit.ai/integrations

### Example Usage

To link a Linear Issue, you can add the Linear Issue via the team key and issue number into the PR description as shown below.

```text
// (Linear Team Key - Issue Number)
Closes ENG-123
```

You can also create new Linear issues directly through CodeRabbit. Learn more in our [Issue Creation guide](../guides/issue-creation.md#linear).

## GitHub

```mdx-code-block
<ProPlanNotice />
```

GitHub issue integration works automatically without any additional setup required.

### Example Usage

To link a GitHub Issue, you can add the issue into the PR description as shown below.

```text
// (# GitHub Issue Number)
Closes #123
```
