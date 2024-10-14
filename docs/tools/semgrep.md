---
title: Semgrep
sidebar_label: Semgrep
description: CodeRabbit's guide to Semgrep.
---

[Semgrep](https://semgrep.dev/) is a static analysis tool designed to scan code
for security vulnerabilities and code quality issues.

## Configuration

Semgrep uses a YAML style configuration file.

> Due to licensing it doesn't ship with the
> [community-created Semgrep rules](https://github.com/returntocorp/semgrep-rules),
> but you're free to use these in your own project.

Semgrep supports the following config files:

- User-defined config file set at `reviews.tools.semgrep.config_file` in your
  project's `.coderabbit.yaml` file or setting the "Review → Tools → Semgrep →
  Config File" field in CodeRabbit's settings page.

> **NOTE: If you do not set a config file in your `.coderabbit.yaml` or config
> UI then semgrep will not be run.**

## Links

- [Semgrep Cli Reference](https://semgrep.dev/docs/cli-reference)

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
