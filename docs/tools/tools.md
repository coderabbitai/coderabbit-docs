---
title: Supported Tools
sidebar_label: Supported Tools
description: Overview of CodeRabbit's supported linters and security analysis tools.
sidebar_position: 1
---

CodeRabbit supports various linters and security analysis tools to improve the code review process. The output of these tools is used to enhance the feedback provided by CodeRabbit, making it possible to provide 1-click fixes for common issues.

## Enabling/Disabling Tools

You can enable or disable tools by setting `reviews.tools.<tool>.enabled` in your project's `.coderabbit.yaml` file or setting the "Review → Tools → Tool → Enabled" field in CodeRabbit's settings page.

## Customizing Tools

CodeRabbit supports customizing the strictness of tools by setting `reviews.profile` in your project's `.coderabbit.yaml` file or setting the "Review → Profile" field in CodeRabbit's settings page. The following profiles are available:

- `Chill` - Yields less feedback, that may be considered lenient.
- `Assertive` - Yields more feedback, that may be considered nit-picky.

Apart from the overall profile, you can also configure each tool by providing a path to a configuration file (specific to the tool) in your project. This would allow you to further customize the tool's behavior, by enabling/disabling specific rules, setting rule severity, etc.

## Checking Tool Output

When a tool is enabled, CodeRabbit will run it on your change request and attach the output under "Review details" comment in the change request. The output will be displayed in a structured format, with information on the file, line number, and the issue detected. For example:

```text
Ruff
fib.py
21-21: f-string without any placeholders

Remove extraneous f prefix

(F541)
```

## Supported Tools

| Technology                  | Tools                                                      | Category                       |
| :-------------------------- | :--------------------------------------------------------- | :----------------------------- |
| All                         | [Gitleaks][Gitleaks]                                       | Code Security                  |
| CircleCi                    | [CircleCi][CircleCi]                                       | Configuration Validation       |
| CloudFormation              | [Checkov][Checkov]                                         | Code Security                  |
| Cppcheck                    | [Cppcheck][Cppcheck]                                       | Code Quality                   |
| CSS                         | [Biome][Biome]                                             | Code Quality                   |
| Docker                      | [Hadolint][Hadolint], [Checkov][Checkov]                   | Code Quality, Code Security    |
| GitHub Actions              | [Actionlint][Actionlint]                                   | Code Quality                   |
| Go                          | [golangci-lint][golangci-lint]                             | Code Quality                   |
| Helm                        | [Checkov][Checkov]                                         | Code Security                  |
| Javascript                  | [Biome][Biome]                                             | Code Quality                   |
| JSON, JSONC                 | [Biome][Biome]                                             | Code Quality                   |
| JSX                         | [Biome][Biome]                                             | Code Quality                   |
| Kotlin                      | [Detekt][Detekt]                                           | Code Quality                   |
| Kubernetes                  | [Checkov][Checkov]                                         | Code Security                  |
| Markdown                    | [Markdownlint][Markdownlint], [LanguageTool][LanguageTool] | Code Quality, Grammar Checking |
| PHP                         | [PHPStan][PHPStan]                                         | Code Quality                   |
| Plaintext                   | [LanguageTool][LanguageTool]                               | Grammar and Spell Checking     |
| Java                        | [PMD][PMD]                                                 | Code Quality                   |
| Protobuf                    | [Buf][Buf]                                                 | Code Quality                   |
| Python                      | [Ruff][Ruff]                                               | Code Quality                   |
| Regal                       | [Regal][Regal]                                             | Code Quality                   |
| Ruby                        | [Rubocop][Rubocop]                                         | Code Quality                   |
| Semgrep                     | [Semgrep][Semgrep]                                         | Code Security                  |
| Shell (sh, bash, ksh, dash) | [ShellCheck][ShellCheck]                                   | Code Quality                   |
| Swift                       | [SwiftLint][SwiftLint]                                     | Code Quality                   |
| Terraform                   | [Checkov][Checkov]                                         | Code Security                  |
| TSX                         | [Biome][Biome]                                             | Code Quality                   |
| Typescript                  | [Biome][Biome]                                             | Code Quality                   |
| YAML                        | [YamlLint][YamlLint]                                       | Code Quality                   |

[ShellCheck]: ./shellcheck.md
[Ruff]: ./ruff.md
[Markdownlint]: ./markdownlint.md
[LanguageTool]: ./languagetool.md
[Biome]: ./biome.md
[Hadolint]: ./hadolint.md
[SwiftLint]: ./swiftlint.md
[PHPStan]: ./phpstan.md
[golangci-lint]: ./golangci-lint.md
[YamlLint]: ./yamllint.md
[Gitleaks]: ./gitleaks.md
[Checkov]: ./checkov.md
[Detekt]: ./detekt.md
[Rubocop]: ./rubocop.md
[Buf]: ./buf.md
[Actionlint]: ./actionlint.md
[Regal]: ./regal.md
[PMD]: ./pmd.md
[Cppcheck]: ./cppcheck.md
[CircleCi]: ./circleci.md
[Semgrep]: ./semgrep.md
