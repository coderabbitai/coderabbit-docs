---
title: Dotenv Linter
sidebar_label: Dotenv Linter
description: CodeRabbit's guide to Dotenv Linter.
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

[Dotenv Linter](https://github.com/dotenv-linter/dotenv-linter) is a lightning-fast linter for `.env` files. It helps ensure your environment files are consistent, typo-free, and follow best practices.

## Files

Dotenv Linter will run on files with the following patterns:

- `**/.env`
- `**/.env.*`

We will not run against files that do not start with `.env` (e.g., `test.env`). However `.env.dev` or `.env.local` is fine.

:::note

Dotenv Linter does not require configuration to run and automatically anlysises `.env` files. If no configuration file is found, it will use default settings.

:::

## Features

Dotenv Linter can detect:

- Key duplication
- Missing values
- Incorrect formatting
- Invalid characters
- And many more issues

## Links

- [Dotenv Linter GitHub Repository](https://github.com/dotenv-linter/dotenv-linter)
