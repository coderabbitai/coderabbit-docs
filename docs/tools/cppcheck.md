---
title: Cppcheck
sidebar_label: Cppcheck
description: CodeRabbit's guide to Cppcheck.
---

[Cppcheck](https://cppcheck.sourceforge.io/)  is a static code analysis tool for the C and C++ programming languages.

## Files

Cppcheck will run on files with the following extensions:

- `.cpp`
- `.cxx`
- `.cc`
- `.c`
- `.tpp`
- `.txx`

## Configuration

CodeRabbit will use the following settings based on the profile selected:

### Chill

```shell
--disable=warning,style,information,portability,unusedFunction
```

### Assertive

```shell
--disable=warning,style,information
```

CodeRabbit will use the default settings based on the profile selected if no config file is found.

## Links

- [Cppcheck Configuration](https://sourceforge.net/p/cppcheck/wiki/ListOfChecks/)
