---
title: golangci-lint
sidebar_label: golangci-lint
description: CodeRabbit's guide to golangci-lint.
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

[golangci-lint](https://golangci-lint.run/) is a fast Go linters runner.

## Supported Version

At this time, CodeRabbit uses v1.x of the `golangci-lint` tool.

If you have a `golangci-lint v2` configuration file in your project, you will see a warning in CodeRabbit reviews and CodeRabbit will not be able to use `golangci-lint` to inform review comments.

There are two ways to avoid this warning.

### 1. Parallel Support for v1 (code review) and v2 (CI/CD) Linting

This will allow v2 linting in CI/CD pipelines while also enabling CodeRabbit to use v1.x linting for review comments.

- Provide a golangci-lint `version: "1"` configuration file that will not be used by golangci-lint itself, e.g. `.coderabbit-golangci.yml`

- Set `reviews.tools.golangci-lint.config_file` to reference that file in a `.coderabbit.yaml` file

### 2. Disable golangci-lint in CodeRabbit

- Set `reviews.tools.golangci-lint.enabled` to false in a `.coderabbit.yaml` file in your project.

## Files

golangci-lint will run on files with the following extensions:

- `.go`
- `go.mod`

## Configuration

golangci-lint supports v1 configuration files as follows:

- User-defined config file set at `reviews.tools.golangci-lint.config_file` in your project's `.coderabbit.yaml` file or setting the "Review → Tools → golangci-lint → Config File" field in CodeRabbit's settings page.
- `.golangci.yml`
- `.golangci.yaml`
- `.golangci.toml`
- `.golangci.json`

## Links

- [golangci-lint v1 Configuration](https://golangci.github.io/legacy-v1-doc/usage/configuration/)
- [golangci-lint v2 Configuration](https://golangci-lint.run/usage/configuration)
