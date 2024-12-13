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

## Files

golangci-lint will run on files with the following extensions:

- `.go`
- `go.mod`

## Configuration

golangci-lint supports the following config files:

- User-defined config file set at `reviews.tools.golangci-lint.config_file` in your project's `.coderabbit.yaml` file or setting the "Review → Tools → golangci-lint → Config File" field in CodeRabbit's settings page.
- `.golangci.yml`
- `.golangci.yaml`
- `.golangci.toml`
- `.golangci.json`

## Links

- [golangci-lint Configuration](https://golangci-lint.run/usage/configuration/)
