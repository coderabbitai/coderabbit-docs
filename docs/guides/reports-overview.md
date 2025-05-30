---
title: Generate reports
description: Learn about CodeRabbit's reporting capabilities, including scheduled and on-demand reports, and how to customize them
sidebar_label: Overview
---

```mdx-code-block
import ReportSchema from "@site/src/components/ReportSchema";
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

You can track and analyze pull request activity across your organization's repositories by using the CodeRabbit reporting feature.

## Scheduled and on-demand reports {#types}

There are two ways to generate reports:

- **[Scheduled Reports](/guides/scheduled-reports)**: Set up automated, recurring reports that are delivered to your team on a set schedule. Supported delivery channels include the following:

  - Email
  - Discord
  - Slack
  - Teams

- **[On-demand Reports](/guides/ondemand-reports)**: If you require customized integration of reports with your own tools and workflows, then you can generate reports programmatically through our API.

For your first reports, we recommend exploring scheduled reports. Its web-based UI can help you get familiar with the options available to you.

## Customize reports using natural language {#customize}

For both scheduled and on-demand reports, you define the shape and content of your reports by providing a prompt that instructs CodeRabbit about report that you want, using natural language. The scheduled reports interface includes several example prompts that you can choose from, or you can write your own prompt. For more information, see [Customize reports](/guides/custom-reports).

## What's next {#whats-next}

- [Schedule reports](/guides/scheduled-reports)
- [Generate reports on demand](/guides/ondemand-reports)
