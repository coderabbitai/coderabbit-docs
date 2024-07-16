---
title: ShellCheck
sidebar_label: ShellCheck
description: CodeRabbit's guide to ShellCheck.
---

[ShellCheck](https://www.shellcheck.net/) is a linter for shell scripts.

## Files

ShellCheck will run on files with the following extensions:

- `.sh`
- `.bash`
- `.ksh`
- `.dash`

## Configuration

CodeRabbit will use the following settings based on the profile selected:

### Chill

```shell
--severity=warning
```

### Assertive

```shell
--severity=style
```

## Links

- [ShellCheck Wiki](https://www.shellcheck.net/wiki/)
