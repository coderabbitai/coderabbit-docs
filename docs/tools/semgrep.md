---
title: Semgrep
sidebar_label: Semgrep
description: CodeRabbit's guide to Semgrep.
---

[Semgrep](https://semgrep.dev/) is a static analysis tool designed to scan code for security vulnerabilities and code quality issues..

## Files

Semgrep will run on the following files and extensions:

- `Apex`
- `Bash` 
- `.c`
- `.cpp`
- `.cs`
- `.clj`
- `.dart`
- `Dockerfile`
- `.ex` 
- `.html`
- `.go`
- `.java`
- `.js`
- `.jsx`
- `.json`
- `.jl`
- `.jsonnet`
- `.kt`
- `.kts`
- `Lisp`
- `.lua`
- `.ml`
- `.php`
- `.py`
- `.r`
- `.rb`
- `.rs` 
- `.scala`
- `Scheme`
- `.sol`
- `.swift`
- `.tf`
- `.ts`
- `.tsx`
- `.yaml`
- `.xml`
- `ERB`
- `Jinja`

## Configuration

Semgrep uses a YAML style configuration file.

Semgrep supports the following config files:

- User-defined config file set at `reviews.tools.semgrep.config_file` in your project's `.coderabbit.yaml` file or setting the "Review → Tools → Semgrep → Config File" field in CodeRabbit's settings page.

## Links

- [Semgrep Cli Reference](https://semgrep.dev/docs/cli-reference)
