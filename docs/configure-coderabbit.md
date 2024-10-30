---
title: Configure CodeRabbit
sidebar_label: Configure CodeRabbit
description:
  CodeRabbit offers various configuration options to tailor the reviews to your
  specific requirements. Configuration can be made using one of the below
  options.
sidebar_position: 4
---

```mdx-code-block
import SchemaViewer from "@site/src/components/SchemaViewer";
import YamlEditor from "/src/components/YamlEditor/YamlEditor";
```

CodeRabbit offers various configuration options to tailor the reviews to your
requirements. Configuration can be made using one of the below options, in order
of precedence:

1. Configure using CodeRabbit YAML file
2. Configure using CodeRabbit UI for each repository
3. Configure using CodeRabbit UI for the organization

In this guide, we will cover the configuration using a YAML file.

## Configure CodeRabbit using a YAML File

:::tip

Move existing UI configuration to a YAML file?

Use the `@coderabbitai configuration` command on any PR to get the current
configuration in a YAML format. You can then copy the configuration to a
`.coderabbit.yaml` file in the root of your repository.

:::

You can add a `.coderabbit.yaml` configuration file to the root of your
repositories. Below is a sample YAML file that can be used as a starting point
and changed as needed:

Write your configuration file in the below editor to validate:

```mdx-code-block
<YamlEditor />
```

:::note

`.coderabbit.yaml` configuration file should exist in the feature branch for CodeRabbit review.

:::

The configuration file can be used to set the following options:

```mdx-code-block
<SchemaViewer />
```

Refer:
[CodeRabbit Configuration Schema](https://storage.googleapis.com/coderabbit_public_assets/schema.v2.json).

Please note that code reviews commence with new pull requests or incremental
commits to existing pull requests once the CodeRabbit app is installed. Should
you have any questions or require assistance, our support team is here to help.
