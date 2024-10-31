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

| Technology                  | Tools                                                      |
| :-------------------------- | :--------------------------------------------------------- |
| All                         | [Gitleaks][Gitleaks]                                       |
| CircleCi                    | [CircleCi][CircleCi]                                       |
| CloudFormation              | [Checkov][Checkov]                                         |
| Cppcheck                    | [Cppcheck][Cppcheck]                                       |
| CSS                         | [Biome][Biome]                                             |
| Docker                      | [Hadolint][Hadolint], [Checkov][Checkov]                   |
| GitHub Actions              | [Actionlint][Actionlint]                                   |
| Go                          | [golangci-lint][golangci-lint]                             |
| Helm                        | [Checkov][Checkov]                                         |
| Javascript                  | [Biome][Biome]                                             |
| JSON, JSONC                 | [Biome][Biome]                                             |
| JSX                         | [Biome][Biome]                                             |
| Kotlin                      | [Detekt][Detekt]                                           |
| Kubernetes                  | [Checkov][Checkov]                                         |
| Markdown                    | [Markdownlint][Markdownlint], [LanguageTool][LanguageTool] |
| PHP                         | [PHPStan][PHPStan]                                         |
| Plaintext                   | [LanguageTool][LanguageTool]                               |
| Java                        | [PMD][PMD]                                                 |
| Protobuf                    | [Buf][Buf]                                                 |
| Python                      | [Ruff][Ruff]                                               |
| Regal                       | [Regal][Regal]                                             |
| Ruby                        | [Rubocop][Rubocop]                                         |
| Semgrep                     | [Semgrep][Semgrep]                                         |
| Shell (sh, bash, ksh, dash) | [ShellCheck][ShellCheck]                                   |
| Swift                       | [SwiftLint][SwiftLint]                                     |
| Terraform                   | [Checkov][Checkov]                                         |
| TSX                         | [Biome][Biome]                                             |
| Typescript                  | [Biome][Biome]                                             |
| YAML                        | [YamlLint][YamlLint]                                       |

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
