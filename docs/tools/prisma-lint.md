---
title: Prisma Lint
sidebar_label: Prisma Lint
description: CodeRabbit's guide to Prisma Lint.
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

[Prisma Lint](https://github.com/loop-payments/prisma-lint) is a linter for Prisma schema files that helps enforce consistent conventions and best practices in your Prisma schemas.

## Files

Prisma Lint will run on files with the following extensions:

- `.prisma`

## Configuration

Prisma Lint supports the following config files:

- `.prismalintrc.json`
- `.prismalintrc`
- `.prismalintrc.js`
- `.prismalintrc.yaml`
- `.prismalintrc.yml`
- `prismalint.config.js`
- User-defined config file set at `reviews.tools.prismalint.config_file` in your project's `.coderabbit.yaml` file or setting the "Review → Tools → Prisma Lint → Config File" field in CodeRabbit's settings page.

:::note

By default, Prisma Lint looks for schema files at `prisma/schema.prisma`. If you have a custom schema path specified in the `prisma.schema` field within `package.json`, that will be used instead.

:::

## Rule Configuration

Rules can be configured in your `.prismalintrc.json` file. See the [Prisma Lint Rules Documentation](https://github.com/loop-payments/prisma-lint/blob/main/RULES.md) for more information on the available rules and their configuration options.

## Links

- [Prisma Lint GitHub Repository](https://github.com/loop-payments/prisma-lint)
- [Prisma Lint Rules Documentation](https://github.com/loop-payments/prisma-lint/blob/main/RULES.md)
