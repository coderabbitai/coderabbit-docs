---
title: Configure third-party tool use
description: Overview of CodeRabbit's supported linters and security analysis tools.
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

CodeRabbit supports various linters and security analysis tools to improve the code review process. The output of these tools is used to enhance the feedback provided by CodeRabbit, making it possible to provide 1-click fixes for common issues.

All tool runs are done in a secure sandboxed execution environment.

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

[ShellCheck]: ./shellcheck.md
[SQLFluff]: ./sqlfluff.md
[Ruff]: ./ruff.md
[markdownlint]: ./markdownlint.md
[LanguageTool]: ./languagetool.md
[Biome]: ./biome.md
[Hadolint]: ./hadolint.md
[SwiftLint]: ./swiftlint.md
[PHPStan]: ./phpstan.md
[golangci-lint]: ./golangci-lint.md
[YAMLlint]: ./yamllint.md
[Gitleaks]: ./gitleaks.md
[Checkov]: ./checkov.md
[detekt]: ./detekt.md
[RuboCop]: ./rubocop.md
[Buf]: ./buf.md
[actionlint]: ./actionlint.md
[Regal]: ./regal.md
[PMD]: ./pmd.md
[Cppcheck]: ./cppcheck.md
[CircleCI]: ./circleci.md
[Semgrep]: ./semgrep.md
[Pipeline]: ./pipeline-remediation.md
[PrismaLint]: ./prisma-lint.md
[oxlint]: ./oxlint.md
[ShopifyCLI]: ./shopify-cli.md
