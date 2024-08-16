---
title: Buf
sidebar_label: Buf
description: CodeRabbit's guide to Buf.
---

[Buf](https://buf.build/) offers linting for Protobuf files.

## Files

Buf will run on files with the following extensions:

- `.proto`

## Configuration

Buf uses a YAML style configuration file. We look for the following file anywhere in the repository:

- `buf.yaml`

If no config file is found, CodeRabbit will consider the following categories of strictness based on the profile selected:

### Chill

- `MINIMAL`

### Assertive

- `BASIC`

## Links

- [Buf Configuration](https://buf.build/docs/configuration/v2/buf-yaml#lint)
