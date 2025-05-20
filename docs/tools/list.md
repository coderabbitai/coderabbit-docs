---
title: List of supported tools
description: Overview of CodeRabbit's supported linters and security analysis tools
---

This is a list of the third-party open-source linters and security analysis tools that CodeRabbit uses to generate code reviews.

For more information about fine-tuning the CodeRabbit configuration of a tool, click that tool's name in the following list.

For an overview of how CodeRabbit uses these tools when generating code reviews, as well as general information about controlling their use, see [Configure third-party tools](/tools/).

| Technology                  | Tools                                                      | Category                                            |
| :-------------------------- | :--------------------------------------------------------- | :-------------------------------------------------- |
| All                         | [Gitleaks][Gitleaks], [Pipeline Remediation][Pipeline]     | Code Security, CI/CD                                |
| Azure DevOps Pipelines      | [Pipeline Remediation][Pipeline]                           | CI/CD Failure Remediation                           |
| CircleCI                    | [CircleCI][CircleCI], [Pipeline Remediation][Pipeline]     | Configuration Validation, CI/CD Failure Remediation |
| CloudFormation              | [Checkov][Checkov]                                         | Code Security                                       |
| Cppcheck                    | [Cppcheck][Cppcheck]                                       | Code Quality                                        |
| CSS                         | [Biome][Biome]                                             | Code Quality                                        |
| Docker                      | [Hadolint][Hadolint], [Checkov][Checkov]                   | Code Quality, Code Security                         |
| GitHub Actions              | [actionlint][actionlint], [Pipeline Remediation][Pipeline] | Code Quality, CI/CD Failure Remediation             |
| GitLab Pipelines            | [Pipeline Remediation][Pipeline]                           | CI/CD Failure Remediation                           |
| Go                          | [golangci-lint][golangci-lint]                             | Code Quality                                        |
| Helm                        | [Checkov][Checkov]                                         | Code Security                                       |
| Javascript                  | [Biome][Biome], [oxlint][oxlint]                           | Code Quality                                        |
| JSON, JSONC                 | [Biome][Biome]                                             | Code Quality                                        |
| JSX                         | [Biome][Biome], [oxlint][oxlint]                           | Code Quality                                        |
| Kotlin                      | [detekt][detekt]                                           | Code Quality                                        |
| Kubernetes                  | [Checkov][Checkov]                                         | Code Security                                       |
| Lua                         | [Luacheck][Luacheck]                                       | Code Quality                                        |
| Markdown                    | [markdownlint][markdownlint], [LanguageTool][LanguageTool] | Code Quality, Grammar Checking                      |
| PHP                         | [PHPStan][PHPStan]                                         | Code Quality                                        |
| Plaintext                   | [LanguageTool][LanguageTool]                               | Grammar and Spell Checking                          |
| Java                        | [PMD][PMD]                                                 | Code Quality                                        |
| Protobuf                    | [Buf][Buf]                                                 | Code Quality                                        |
| Python                      | [Ruff][Ruff]                                               | Code Quality                                        |
| Regal                       | [Regal][Regal]                                             | Code Quality                                        |
| Ruby                        | [RuboCop][RuboCop]                                         | Code Quality                                        |
| Semgrep                     | [Semgrep][Semgrep]                                         | Code Security                                       |
| Shell (sh, bash, ksh, dash) | [ShellCheck][ShellCheck]                                   | Code Quality                                        |
| Shopify                     | [Shopify CLI][ShopifyCLI]                                  | Code Quality                                        |
| SQL                         | [SQLFluff][SQLFluff]                                       | Code Quality                                        |
| Swift                       | [SwiftLint][SwiftLint]                                     | Code Quality                                        |
| Terraform                   | [Checkov][Checkov]                                         | Code Security                                       |
| TSX                         | [Biome][Biome], [oxlint][oxlint]                           | Code Quality                                        |
| Typescript                  | [Biome][Biome], [oxlint][oxlint]                           | Code Quality                                        |
| YAML                        | [YAMLlint][YAMLlint]                                       | Code Quality                                        |
| Prisma                      | [Prisma Lint][PrismaLint]                                  | Code Quality                                        |

[ShellCheck]: /tools/shellcheck.md
[SQLFluff]: /tools/sqlfluff.md
[Ruff]: /tools/ruff.md
[markdownlint]: /tools/markdownlint.md
[LanguageTool]: /tools/languagetool.md
[Biome]: /tools/biome.md
[Hadolint]: /tools/hadolint.md
[SwiftLint]: /tools/swiftlint.md
[PHPStan]: /tools/phpstan.md
[golangci-lint]: /tools/golangci-lint.md
[YAMLlint]: /tools/yamllint.md
[Gitleaks]: /tools/gitleaks.md
[Checkov]: /tools/checkov.md
[detekt]: /tools/detekt.md
[RuboCop]: /tools/rubocop.md
[Buf]: /tools/buf.md
[actionlint]: /tools/actionlint.md
[Regal]: /tools/regal.md
[PMD]: /tools/pmd.md
[Cppcheck]: /tools/cppcheck.md
[CircleCI]: /tools/circleci.md
[Semgrep]: /tools/semgrep.md
[Pipeline]: /tools/pipeline-remediation.md
[PrismaLint]: /tools/prisma-lint.md
[oxlint]: /tools/oxlint.md
[ShopifyCLI]: /tools/shopify-cli.md
[Luacheck]: /tools/luacheck.md
