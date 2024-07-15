---
title: Yamllint
sidebar_label: Yamllint
description: CodeRabbit's guide to Yamllint.
sidebar_position: 8
---

[Yamllint](https://yamllint.readthedocs.io/en/stable/) is a linter for YAML.

## Files

Yamllint will run on files with the following extensions:

- `.yaml`
- `.yml`

## Configuration

Yamllint supports the following config files:

- `.yamllint`
- `.yamllint.yaml`
- `.yamllint.yml`

CodeRabbit will use the following settings based on the profile selected if no config file is found:

### Chill

```yaml
extends: relaxed
rules:
  line-length: disable
```

### Assertive

```yaml
extends: default
rules:
  line-length: disable
  document-start: disable
```

## Links

- [Yamllint Configuration](https://yamllint.readthedocs.io/en/stable/configuration.html)
