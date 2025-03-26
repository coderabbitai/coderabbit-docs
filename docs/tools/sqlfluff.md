---
title: SQLFluff
sidebar_label: SQLFluff
description: CodeRabbit's guide to SQLFluff.
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

[SQLFluff](https://github.com/sqlfluff/sqlfluff) is a SQL linter and auto-formatter for standardizing SQL code.

## Files

SQLFluff will run on files with the following extensions:

- `.sql`

## Configuration

SQLFluff supports the following config files:

- User-defined config file set at `reviews.tools.sqlfluff.config_file` in your project's `.coderabbit.yaml` file or setting the "Review → Tools → SQLFluff → Config File" field in CodeRabbit's settings page.
- `setup.cfg`
- `tox.ini`
- `pep8.ini`
- `.sqlfluff`
- `pyproject.toml`

:::note

CodeRabbit will only run SQLFluff if your repository contains a SQLFluff config file. This config must use one of the default file names listed above, or you must define the path to this file in the `.coderabbit.yaml` or config UI.

:::

## Links

- [SQLFluff Configuration](https://docs.sqlfluff.com/en/stable/configuration.html)
- [SQLFluff Rules Reference](https://docs.sqlfluff.com/en/stable/rules.html)
