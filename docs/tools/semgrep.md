---
title: Semgrep
sidebar_label: Semgrep
description: CodeRabbit's guide to Semgrep.
---

[Semgrep](https://semgrep.dev/) is a static analysis tool designed to scan code
for security vulnerabilities and code quality issues.

## Configuration

Semgrep uses a YAML style configuration file. By default we will automatically
use the following files if any are set in the root directory of your
repostitory.

- `semgrep.yml` or `semgrep.yaml`
- `semgrep.config.yml` or `semgrep.config.yaml`

Semgrep supports the following config files:

- User-defined config file set at `reviews.tools.semgrep.config_file` in your
  project's `.coderabbit.yaml` file or setting the "Review → Tools → Semgrep →
  Config File" field in CodeRabbit's settings page.

Due to licensing, CodeRabbit does not ship with the [community-created Semgrep rules](https://github.com/returntocorp/semgrep-rules), but you're free to use these in your own `semgrep.yml` config file.

:::note
CodeRabbit will only run Semgrep if your repository contains a Semgrep config file. This config must use the default file names or you must define the path to this file in the `.coderabbit.yaml` or config UI.
:::

## Links

- [Semgrep CLI Reference](https://semgrep.dev/docs/cli-reference)
- [Writing Semgrep Rules for Config Files](https://semgrep.dev/docs/running-rules)

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
