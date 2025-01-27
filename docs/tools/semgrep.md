---
title: Semgrep
sidebar_label: Semgrep
description: CodeRabbit's guide to Semgrep.
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

[Semgrep](https://github.com/semgrep/semgrep) is an open-source static analysis tool designed to scan code for security vulnerabilities and code quality issues.

## Configuration

Semgrep uses a YAML style configuration file. By default, we will automatically
use the following files if any are set in the root directory of your
repository.

- `semgrep.yml` or `semgrep.yaml`
- `semgrep.config.yml` or `semgrep.config.yaml`

Semgrep supports the following config files:

- User-defined config file set at `reviews.tools.semgrep.config_file` in your
  project's `.coderabbit.yaml` file or setting the "Review → Tools → Semgrep →
  Config File" field in CodeRabbit's settings page.

Due to licensing, CodeRabbit does not ship with the [community-created Semgrep rules](https://github.com/returntocorp/semgrep-rules).

:::note

CodeRabbit will only run Semgrep if your repository contains a Semgrep config file. This config must use the default file names, or you must define the path to this file in the `.coderabbit.yaml` or config UI.

:::

## Links

- [Semgrep CLI Reference](https://semgrep.dev/docs/cli-reference)
- [Writing Semgrep Rules for Config Files](https://semgrep.dev/docs/running-rules)

## Files

Semgrep will run on the following files types:

- C/C++
- C#
- Go
- Java
- JavaScript
- Kotlin
- Python
- TypeScript
- Ruby
- Rust
- JSX
- PHP
- Scala
- Swift
- Terraform
- JSON
