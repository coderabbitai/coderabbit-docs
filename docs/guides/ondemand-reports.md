---
title: Generate reports
description: CodeRabbit offers a way to generate on-demand reports using a simple API request
---

```mdx-code-block
import ReportSchema from "@site/src/components/ReportSchema";
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

## Overview

CodeRabbit's reporting feature helps you track and analyze pull request activity across your repositories. There are two ways to generate reports:

1. **[Scheduled Reports](./scheduled-reports.md)** - Set up automated recurring reports that are delivered on a schedule to your preferred channels (email, Slack, MS Teams). This is the recommended way to keep your team informed about development progress.

2. **On-demand Reports** (this guide) - Generate reports programmatically through our API when you need them. This is useful for integration with your own tools and workflows.

If you're new to CodeRabbit's reporting features, we recommend starting with [Scheduled Reports](./scheduled-reports.md) to understand the available options and capabilities.

## API Access

CodeRabbit offers a way to generate on-demand reports using the [CodeRabbit API](https://api.coderabbit.ai/api/swagger/).
You will need an API Key to access the CodeRabbit API and generate an on-demand report.

## Create an API key

Sign in to your CodeRabbit account and navigate to the [**API Keys**](https://app.coderabbit.ai/settings/api-keys) page under 'Organization Settings' in the left sidebar.
Click on the **Create API Key** button and enter a name for the API Key.
Copy the API key, and keep it safe as it won't be visible again.

![API Keys](/img/guides/api_keys.png)

## Generate an On-demand report

Once you have the API key, pass it in the `x-coderabbitai-api-key` header when calling the API:

```sh
curl -X 'POST' \
  'https://api.coderabbit.ai/api/v1/report.generate' \
  -H 'accept: application/json' \
  -H 'x-coderabbitai-api-key: cr-xxxxxxxxxxxxx' \
  -H 'Content-Type: application/json' \
  -d '{
    "from": "2024-05-01",
    "to": "2024-05-15"
  }'
```

Sample output:

```sh
[
  {
    "group": "Developer Activity",
    "report": "*Developer Activity*:\n\n 🟢 **Update README.md** [#10](https://gitlab.com/master-group123/sub-group/project1/-/merge_requests/10)\n• Summary: The change updates the project description and modifies a section header for clearer instructions.\n• Last activity: 1 day ago, mergeable\n• Insights:\n - :magnifying_glass: @user2 Suggested updating the wording to make it clearer"
  }
]
```

:::info

If you get a 401 UNAUTHORIZED error, check if you're passing the right API key in the `x-coderabbitai-api-key` header

:::

The on-demand report generation endpoints take in inputs as per the schema shown below:

```mdx-code-block
<ReportSchema />
```

[API Reference](https://api.coderabbit.ai/api/swagger/)
