---
title: Markdownlint
sidebar_label: Markdownlint
description: CodeRabbit's guide to Markdownlint.
sidebar_position: 3
---

[Markdownlint](https://github.com/DavidAnson/markdownlint) is a linter for Markdown files.

## Files

Markdownlint will run on files with the following extensions:

- `.md`
- `.markdown`

## Settings

Markdownlint supports the following config files:

- `.markdownlint.jsonc`
- `.markdownlint.json`
- `.markdownlint.yaml`
- `.markdownlint.yml`

CodeRabbit will use the following settings based on the profile selected if no config file is found:

### Chill

```json
{
  "default": true,
  "line-length": false,
  "no-duplicate-heading": { 
   "siblings_only": true 
  },
  "no-trailing-punctuation": { 
   "punctuation": ".,;:" 
  },
  "ol-prefix": false,
  "list-marker-space": false,
  "no-inline-html": false,
  "first-line-h1": false,
  "no-trailing-spaces": false,
  "single-h1": false,
  "blank_lines": false,
}
```

### Assertive

```json
{
  "default": true,
  "line-length": false,
  "no-duplicate-heading": { 
   "siblings_only": true 
  },
  "no-trailing-punctuation": { 
   "punctuation": ".,;:" 
  },
  "ol-prefix": true,
  "list-marker-space": false,
  "no-inline-html": true,
  "first-line-h1": true,
  "no-trailing-spaces": true,
  "single-h1": true,
  "blank_lines": true,
}

```

## Links

- [Markdownlint Configuration](https://github.com/DavidAnson/markdownlint?tab=readme-ov-file#configuration)
