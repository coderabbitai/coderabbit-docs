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


# golangci-lint

## Files

`golangci-lint` is a fast Go linters runner. It is a code quality tool that aggregates many Go linters into a single tool.

## Supported Versions

CodeRabbit currently supports `golangci-lint` v1.x.

Users attempting to use `golangci-lint` v2.x may encounter warnings or unexpected behavior, as full compatibility with v2.x is not yet guaranteed. We recommend configuring your project to use `golangci-lint` v1.x if you experience issues.

## Configuration

`golangci-lint` supports the following configuration files:

- `.golangci.yml`
- `.golangci.yaml`
- `.golangci.toml`
- `.golangci.json`

CodeRabbit will automatically detect and use these configuration files if present in your repository.

## Integrating v1 alongside v2 (Workaround)

If your project requires `golangci-lint` v2 for local development or CI, but you wish to use CodeRabbit for v1-compatible linting, you can manage this by:

1.  **Ensuring a v1-compatible configuration file exists:** Create or maintain a `.golangci.yml` (or other supported format) that is compatible with `golangci-lint` v1.x.
2.  **Using a separate script for v2:** For your local development or CI, you might use a wrapper script or a different command to invoke `golangci-lint` v2, ensuring it uses a v2-specific configuration if needed. CodeRabbit will primarily look for the standard configuration files.

Alternatively, you can disable `golangci-lint` in CodeRabbit if v2 is strictly required and you cannot maintain a v1-compatible configuration.

## Features

`golangci-lint` can detect many issues such as:

## Configuration

golangci-lint supports the following config files:

- User-defined config file set at `reviews.tools.golangci-lint.config_file` in your project's `.coderabbit.yaml` file or setting the "Review → Tools → golangci-lint → Config File" field in CodeRabbit's settings page.
- `.golangci.yml`
- `.golangci.yaml`
- `.golangci.toml`
- `.golangci.json`

## Links

- [golangci-lint Configuration](https://golangci-lint.run/usage/configuration/)
