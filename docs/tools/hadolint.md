---
title: Hadolint
sidebar_label: Hadolint
description: CodeRabbit's guide to Hadolint.
---

[Hadolint](https://github.com/hadolint/hadolint) is a Dockerfile linter.

## Files

Hadolint will run on files with the following file names:

- `Dockerfile`
- `*.dockerfile`
- `Dockerfile.*`

## Configuration

Hadolint supports the following config files:

- `.hadolint.yaml`

CodeRabbit will ignore the following severity levels if no config file is found:

### Chill

- `none`
- `ignore`
- `style`
- `info`
- `warning`

### Assertive

- `none`
- `ignore`
- `style`

## Links

- [Hadolint Configuration](https://github.com/hadolint/hadolint?tab=readme-ov-file#configure)
