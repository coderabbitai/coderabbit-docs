---
title: Flake8
sidebar_label: Flake8
description: CodeRabbit's guide to Flake8.
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

[Flake8](https://flake8.pycqa.org/en/latest/) is a static code analysis tool for Python that wraps PyFlakes (error detection), pycodestyle (PEP 8 style rules) and McCabe (cyclomatic-complexity measurement) to catch a wide range of issues in a single pass.

## Supported Files

Flake8 runs on files with the following extension:

- `*.py`

## Features
Flake8 can detect many issues, including:

- PEP 8 style-guide violations
- Unused or re-defined variables and imports
- Undefined names / variables
- Cyclomatic-complexity over threshold (default 10)
- Error-prone constructs (e.g., comparison to literal True / False)
- Select / ignore rule filtering (--select, --extend-ignore)
- Extensible plugin ecosystem and custom rule support

## Links

- [Flake8 Official Website](https://flake8.pycqa.org/en/latest/)
- [Flake8 PyPI Page](https://pypi.org/project/flake8/)
- [Flake8 GitHub Repository](https://github.com/PyCQA/flake8)
- [User Guide](https://flake8.pycqa.org/en/latest/)