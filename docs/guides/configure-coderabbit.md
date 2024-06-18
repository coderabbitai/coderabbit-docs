---
title: Configure CodeRabbit
sidebar_label: Configure CodeRabbit
description:
  CodeRabbit offers various configuration options to tailor the reviews to your
  specific requirements. Configuration can be made using one of the below
  options.
sidebar_position: 1
---

```mdx-code-block
import SchemaViewer from "@site/src/components/SchemaViewer";
```

CodeRabbit offers various configuration options to tailor the reviews to your
requirements. Configuration can be made using one of the below options, in order
of precedence:

1. Configure using CodeRabbit YAML file
2. Configure using CodeRabbit UI for each repository
3. Configure using CodeRabbit UI for the organization

In this guide, we will cover the configuration using a YAML file.

## Configure CodeRabbit using a YAML File

You can add a `.coderabbit.yaml` configuration file to the root of your
repositories. Below is a sample YAML file that can be used as a starting point
and changed as needed:

```yaml
# yaml-language-server: $schema=https://coderabbit.ai/integrations/schema.v2.json
language: "en-US"
early_access: false
reviews:
  profile: "chill"
  request_changes_workflow: false
  high_level_summary: true
  poem: true
  review_status: true
  collapse_walkthrough: false
  auto_review:
    enabled: true
    drafts: false
chat:
  auto_reply: true
```

The configuration file can be used to set the following options:

```mdx-code-block
<SchemaViewer />
```

Refer:
[CodeRabbit Configuration Schema](https://coderabbit.ai/integrations/schema.v2.json).

Please note that code reviews commence with new pull requests or incremental
commits to existing pull requests once the CodeRabbit app is installed. Should
you have any questions or require assistance, our support team is here to help.
