---
title: Ruff
sidebar_label: Ruff
description: CodeRabbit's guide to Ruff.
sidebar_position: 1
---

Ruff is a linter and code formatter for Python.

## Settings

Ruff supports the following config files:

- `pyproject.toml`
- `ruff.toml`
- `.ruff.toml`

CodeRabbit will use the following settings if no config file is found:

### Chill

```toml
[lint]
select = [
    # pycodestyle subset rules
    "E7",
    "E9",
    # Pyflakes
    "F",
    # flake8-bugbear
    "B",
    # flake8-simplify
    "SIM",
    # isort subset rules
    "I002",
]
[lint.per-file-ignores]
"**/__init__.py" = ["E402"]
"**/conftest.py" = ["E402"]
```

### Assertive

```toml
[lint]
select = [
    # pycodestyle subset rules
    "E7",
    "E9",
    # Pyflakes
    "F",
    # flake8-bugbear
    "B",
    # flake8-simplify
    "SIM",
    # isort subset rules
    "I002",
    # pycodestyle subset rules
    "E4",
    "E101",
    # mccabe
    "C90",
    # flake8-annotations
    "ANN",
    # flake8-async
    "ASYNC",
    # flake8-trio
    "TRIO",
    # flake8-bandit
    "S",
    # flake8-blind-except
    "BLE",
    # flake8-boolean-trap
    "FBT",
    # flake8-commas
    "COM",
    # flake8-comprehensions
    "C4",
    # flake8-datetimez
    "DTZ",
    # flake8-debugger
    "T10",
    # flake8-django
    "DJ",
    # flake8-executable
    "EXE",
    # flake8-implicit-str-concat
    "ISC",
    # flake8-logging
    "LOG",
    # flake8-logging-format
    "G",
    # flake8-pie
    "PIE",
    # flake8-pytest-style
    "PT",
    # flake8-raise
    "RSE",
    # flake8-return
    "RET",
    # flake8-unused-arguments
    "ARG",
    # tryceratops
    "TRY",
    # flynt
    "FLY",
    # Ruff-specific rules
    "RUF",
    # pyupgrade
    "UP",
]
[lint.per-file-ignores]
"**/__init__.py" = ["E402"]
"**/conftest.py" = ["E402"]
"**/*_test.py" = ["S101"]
"**/test_*.py" = ["S101"]
"**/{test,tests}/**/*.py" = ["S101"]
```

Links:

- [Ruff](https://docs.astral.sh/ruff/configuration/)
