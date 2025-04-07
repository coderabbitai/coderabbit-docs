---
title: Configure CodeRabbit
sidebar_label: Configure
description:
  CodeRabbit offers various configuration options to tailor the reviews to your
  specific requirements. Configuration can be made using one of the below
  options.
sidebar_position: 2
---

```mdx-code-block
import SchemaViewer from "@site/src/components/SchemaViewer";
import YamlEditor from "/src/components/YamlEditor/YamlEditor";
```

CodeRabbit offers various configuration options to tailor the reviews to your
requirements. Configuration can be made using one of the below options, in order
of precedence:

1. Configure using CodeRabbit YAML file
2. Configure using CodeRabbit UI for each repository
3. Configure using CodeRabbit UI for the organization

In this guide, we will cover the configuration using a YAML file. For reference, you can find curated examples of YAML configurations in our [`awesome-coderabbit`](https://github.com/coderabbitai/awesome-coderabbit) repository.

## Configure CodeRabbit using a YAML File

:::tip

Move existing UI configuration to a YAML file?

Use the `@coderabbitai configuration` command on any PR to get the current
configuration in a YAML format. You can then copy the configuration to a
`.coderabbit.yaml` file in the root of your repository.

:::

You can add a `.coderabbit.yaml` configuration file to the root of your
repositories. Below is a sample YAML file that can be used as a starting point
and changed as needed:

Write your configuration file in the below editor to validate:

```mdx-code-block
<YamlEditor />
```

:::note

`.coderabbit.yaml` configuration file should exist in the feature branch for CodeRabbit review.

:::

The configuration file can be used to set the following options:

```mdx-code-block
<SchemaViewer />
```

Refer:
[CodeRabbit Configuration Schema](https://storage.googleapis.com/coderabbit_public_assets/schema.v2.json).

```mdx-code-block
<details>

<summary>Tips for collapsed sections</summary>

## 1. language

- **Description**: Set the language for reviews using the corresponding ISO language code.
- **Type**: `string`
- **Default**: `en-US`
- **Possible Values**:
 `de`, `de-DE`, `de-AT`, `de-CH`, `en`, `en-US`, `en-AU`, `en-GB`, `en-CA`, `en-NZ`, `en-ZA`,
 `es`, `es-AR`, `fr`, `fr-CA`, `fr-CH`, `fr-BE`, `nl`, `nl-BE`, `pt-AO`, `pt`, `pt-BR`, `pt-MZ`, `pt-PT`, `ar`,
 `ast-ES`, `ast`, `be-BY`, `be`, `br-FR`, `br`, `ca-ES`, `ca`, `ca-ES-valencia`, `ca-ES-balear`, `da-DK`, `da`,
 `de-DE-x-simple-language`, `el-GR`, `el`, `eo`, `fa`, `ga-IE`, `ga`, `gl-ES`, `gl`, `it`, `ja-JP`, `ja`, `km-KH`,
 `km`, `ko-KR`, `ko`, `pl-PL`, `pl`, `ro-RO`, `ro`, `ru-RU`, `ru`, `sk-SK`, `sk`, `sl-SI`, `sl`, `sv`, `ta-IN`, `ta`,
 `tl-PH`, `tl`, `tr`, `uk-UA`, `uk`, `zh-CN`, `zh`, `crh-UA`, `crh`, `nb`, `no`, `nl-NL`,
 `de-DE-x-simple-language-DE`, `es-ES`, `it-IT`, `fa-IR`, `sv-SE`, `de-LU`, `fr-FR`

---

## 2. tone_instructions

- **Description**: Set the tone of reviews and chat.
 Example: `"You must talk like Mr. T. I pity the fool who doesn't!"`
- **Type**: `string`
- **Default**: `""`
- **Constraints**: Max length `250` characters

---

## 3. early_access

- **Description**: Enable early-access features.
- **Type**: `boolean`
- **Default**: `false`
- **Possible Values**: `true`, `false`

---

## 4. enable_free_tier

- **Description**: Enable free tier features for users not on a paid plan.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

---

## 5. auto_resolve_threads

- **Description**: Automatically resolve threads when code changes address the feedback.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

---

## 6. reviews

**Description**: Settings related to reviews.
**Type**: `object`
**Default**: `{}`

### 6.1. [reviews.profile](#reviewsprofile)

- **Description**: Set the profile for reviews. `assertive` yields more feedback, possibly nitpicky.
- **Type**: `string`
- **Default**: `chill`
- **Possible Values**: `chill`, `assertive`

### 6.2. [reviews.request_changes_workflow](#reviewsrequest_changes_workflow)

- **Description**: Approve the review once CodeRabbit's comments are resolved.
 *Note:* In GitLab, all discussions must be resolved.
- **Type**: `boolean`
- **Default**: `false`
- **Possible Values**: `true`, `false`

### 6.3. [reviews.high_level_summary](#reviewshigh_level_summary)

- **Description**: Generate a high-level summary of changes in the PR/MR description.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

### 6.4. [reviews.high_level_summary_placeholder](#reviewshigh_level_summary_placeholder)

- **Description**: Placeholder in the PR/MR description that gets replaced with the high-level summary.
- **Type**: `string`
- **Default**: `@coderabbitai summary`

### 6.5. [reviews.high_level_summary_in_walkthrough](#reviewshigh_level_summary_in_walkthrough)

- **Description**: Include the high-level summary in the walkthrough comment.
- **Type**: `boolean`
- **Default**: `false`
- **Possible Values**: `true`, `false`

### 6.6. [reviews.auto_title_placeholder](#reviewsauto_title_placeholder)

- **Description**: Keyword in the PR/MR title to trigger auto-generation of the title.
- **Type**: `string`
- **Default**: `@coderabbitai`

### 6.7. [reviews.auto_title_instructions](#reviewsauto_title_instructions)

- **Description**: Custom instructions for auto-generating the PR/MR title.
- **Type**: `string`
- **Default**: `""`

### 6.8. [reviews.review_status](#reviewsreview_status)

- **Description**: Post review details on each review and a status when review is skipped.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

### 6.9. [reviews.commit_status](#reviewscommit_status)

- **Description**: Set the commit status to `pending` when the review is in progress, `success` when complete.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

### 6.10. [reviews.fail_commit_status](#reviewsfail_commit_status)

- **Description**: Set commit status to `failure` if CodeRabbit cannot review the PR.
- **Type**: `boolean`
- **Default**: `false`
- **Possible Values**: `true`, `false`

### 6.11. [reviews.collapse_walkthrough](#reviewscollapse_walkthrough)

- **Description**: Generate the walkthrough in a markdown collapsible section.
- **Type**: `boolean`
- **Default**: `false`
- **Possible Values**: `true`, `false`

### 6.12. [reviews.changed_files_summary](#reviewschanged_files_summary)

- **Description**: Include a summary of changed files in the walkthrough.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

### 6.13. [reviews.sequence_diagrams](#reviewssequence_diagrams)

- **Description**: Generate sequence diagrams in the walkthrough.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

### 6.14. [reviews.assess_linked_issues](#reviewsassess_linked_issues)

- **Description**: Assess how well changes address linked issues in the walkthrough.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

### 6.15. [reviews.related_issues](#reviewsrelated_issues)

- **Description**: Include possibly related issues in the walkthrough.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

### 6.16. [reviews.related_prs](#reviewsrelated_prs)

- **Description**: Include possibly related pull requests in the walkthrough.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

### 6.17. [reviews.suggested_labels](#reviewssuggested_labels)

- **Description**: Suggest labels based on changes in the pull request.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

### 6.18. [reviews.auto_apply_labels](#reviewsauto_apply_labels)

- **Description**: Automatically apply the suggested labels to the PR/MR.
- **Type**: `boolean`
- **Default**: `false`
- **Possible Values**: `true`, `false`

### 6.19. [reviews.suggested_reviewers](#reviewssuggested_reviewers)

- **Description**: Suggest reviewers based on changes in the pull request.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

### 6.20. [reviews.poem](#reviewspoem)

- **Description**: Generate a poem in the walkthrough comment.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

### 6.21. [reviews.labeling_instructions](#reviewslabeling_instructions)

- **Description**: Provide guidelines for suggesting labels for the PR/MR.
 When labels or instructions are provided, only those are considered.
- **Type**: `array of objects`
 Each item must have:
  - `label` (string)
  - `instructions` (string, max length 3000)
- **Default**: `[]`

### 6.22. [reviews.path_filters](#reviewspath_filters)

- **Description**: File patterns to include or exclude in reviews (e.g. `!dist/**`, `src/**`).
 Also applied in Git sparse-checkout.
- **Type**: `array of strings`
- **Default**: `[]`

### 6.23. [reviews.path_instructions](#reviewspath_instructions)

- **Description**: Additional review guidelines based on file paths.
- **Type**: `array of objects`
 Each item must have:
  - `path` (string)
  - `instructions` (string, max length 3000)
- **Default**: `[]`

### 6.24. [reviews.abort_on_close](#reviewsabort_on_close)

- **Description**: Abort any in-progress review if the PR is closed or merged.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

### 6.25. [reviews.auto_review](#reviewsauto_review)

- **Description**: Automatic review settings.
- **Type**: `object`
- **Default**: `{}`

#### 6.25.1. [reviews.auto_review.enabled](#reviewsauto_reviewenabled)

- **Description**: Automatic code review.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

#### 6.25.2. [reviews.auto_review.auto_incremental_review](#reviewsauto_reviewauto_incremental_review)

- **Description**: Automatic incremental code review on each push.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

#### 6.25.3. [reviews.auto_review.ignore_title_keywords](#reviewsauto_reviewignore_title_keywords)

- **Description**: Ignore reviewing if the PR title contains any of these keywords (case-insensitive).
- **Type**: `array of strings`
- **Default**: `[]`

#### 6.25.4. [reviews.auto_review.labels](#reviewsauto_reviewlabels)

- **Description**: Restrict automatic reviews to PRs that match one of these labels.
- **Type**: `array of strings`
- **Default**: `[]`

#### 6.25.5. [reviews.auto_review.drafts](#reviewsauto_reviewdrafts)

- **Description**: Review draft PRs/MRs.
- **Type**: `boolean`
- **Default**: `false`
- **Possible Values**: `true`, `false`

#### 6.25.6. [reviews.auto_review.base_branches](#reviewsauto_reviewbase_branches)

- **Description**: Base branches (other than default) to review; accepts regex patterns.
- **Type**: `array of strings`
- **Default**: `[]`

### 6.26. [reviews.finishing_touches](#reviewsfinishing_touches)

- **Type**: `object`
- **Default**: `{}`
- **Description**: Options for finishing touches on reviews.

#### 6.26.1. [reviews.finishing_touches.docstrings](#reviewsfinishing_touchesdocstrings)

- **Type**: `object`
- **Default**: `{}`
- **Description**: Configure docstring generation for PRs/MRs.

##### 6.26.1.1. [reviews.finishing_touches.docstrings.enabled](#reviewsfinishing_touchesdocstringsenabled)

- **Description**: Allow CodeRabbit to generate docstrings in PRs/MRs.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

### 6.27. [reviews.tools](#reviewstools)

- **Type**: `object`
- **Default**: `{}`
- **Description**: Tools that provide additional context to code reviews.

#### 6.27.1. [reviews.tools.ast-grep](#reviewstoolsast-grep)

- **Description**: A code analysis tool using AST-based patterns (version `v0.31.1`).
- **Type**: `object`

##### 6.27.1.1. [reviews.tools.ast-grep.rule_dirs](#reviewstoolsast-greprule_dirs)

- **Description**: List of rules directories.
- **Type**: `array of strings`

##### 6.27.1.2. [reviews.tools.ast-grep.util_dirs](#reviewstoolsast-greputil_dirs)

- **Description**: List of utils directories.
- **Type**: `array of strings`

##### 6.27.1.3. [reviews.tools.ast-grep.essential_rules](#reviewstoolsast-grepotential_rules)

- **Description**: Enable the ast-grep essentials package.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

##### 6.27.1.4. [reviews.tools.ast-grep.packages](#reviewstoolsast-greppackages)

- **Description**: Predefined ast-grep rule packages to be used.
- **Type**: `array of strings`
- **Default**: `[]`

#### 6.27.2. [reviews.tools.shellcheck](#reviewstoolsshellcheck)

- **Description**: ShellCheck, a static analysis tool for shell scripts (version `v0.10.0`).
- **Type**: `object`
- **Default**: `{}`

##### 6.27.2.1. [reviews.tools.shellcheck.enabled](#reviewstoolsshellcheckenabled)

- **Description**: Enable ShellCheck integration.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

#### 6.27.3. [reviews.tools.ruff](#reviewstoolsruff)

- **Description**: Ruff, a Python linter and code formatter (version `v0.8.2`).
- **Type**: `object`
- **Default**: `{}`

##### 6.27.3.1. [reviews.tools.ruff.enabled](#reviewstoolsruffenabled)

- **Description**: Enable Ruff integration.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

#### 6.27.4. [reviews.tools.markdownlint](#reviewstoolsmarkdownlint)

- **Description**: markdownlint-cli2, a static analysis tool for Markdown (version `v0.17.2`).
- **Type**: `object`
- **Default**: `{}`

##### 6.27.4.1. [reviews.tools.markdownlint.enabled](#reviewstoolsmarkdownlintenabled)

- **Description**: Enable markdownlint integration.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

#### 6.27.5. [reviews.tools.github-checks](#reviewstoolsgithub-checks)

- **Description**: GitHub Checks integration configuration.
- **Type**: `object`
- **Default**: `{}`

##### 6.27.5.1. [reviews.tools.github-checks.enabled](#reviewstoolsgithub-checksenabled)

- **Description**: Enable GitHub Checks.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

##### 6.27.5.2. [reviews.tools.github-checks.timeout_ms](#reviewstoolsgithub-checkstimeout_ms)

- **Description**: Time (in milliseconds) to wait for all GitHub Checks to complete.
- **Type**: `number`
- **Default**: `90000`
- **Constraints**: `0 <= timeout_ms <= 300000`

#### 6.27.6. [reviews.tools.languagetool](#reviewstoolslanguagetool)

- **Description**: LanguageTool is a style/grammar checker for 30+ languages.
- **Type**: `object`
- **Default**: `{}`

##### 6.27.6.1. [reviews.tools.languagetool.enabled](#reviewstoolslanguagetoolenabled)

- **Description**: Enable LanguageTool integration.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

##### 6.27.6.2. [reviews.tools.languagetool.enabled_rules](#reviewstoolslanguagetoolenabled_rules)

- **Description**: IDs of rules to be enabled.
- **Type**: `array of strings`

##### 6.27.6.3. [reviews.tools.languagetool.disabled_rules](#reviewstoolslanguagetooldisabled_rules)

- **Description**: IDs of rules to be disabled.
 *Note:* `EN_UNPAIRED_BRACKETS` and `EN_UNPAIRED_QUOTES` are always disabled.
- **Type**: `array of strings`

##### 6.27.6.4. [reviews.tools.languagetool.enabled_categories](#reviewstoolslanguagetoolenabled_categories)

- **Description**: IDs of categories to be enabled.
- **Type**: `array of strings`

##### 6.27.6.5. [reviews.tools.languagetool.disabled_categories](#reviewstoolslanguagetooldisabled_categories)

- **Description**: IDs of categories to be disabled.
 *Note:* `TYPOS`, `TYPOGRAPHY`, and `CASING` are always disabled.
- **Type**: `array of strings`

##### 6.27.6.6. [reviews.tools.languagetool.enabled_only](#reviewstoolslanguagetoolenabled_only)

- **Description**: Only use the rules/categories explicitly enabled by `enabled_rules` or `enabled_categories`.
- **Type**: `boolean`
- **Default**: `false`
- **Possible Values**: `true`, `false`

##### 6.27.6.7. [reviews.tools.languagetool.level](#reviewstoolslanguagetoollevel)

- **Description**: If `picky`, activates additional, stricter rules.
- **Type**: `string`
- **Default**: `default`
- **Possible Values**: `default`, `picky`

#### 6.27.7. [reviews.tools.biome](#reviewstoolsbiome)

- **Description**: Biome is a fast formatter/linter for web projects (version `v1.9.4`).
- **Type**: `object`
- **Default**: `{}`

##### 6.27.7.1. [reviews.tools.biome.enabled](#reviewstoolsbiomeenabled)

- **Description**: Enable Biome.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

#### 6.27.8. [reviews.tools.hadolint](#reviewstoolshadolint)

- **Description**: Hadolint is a Dockerfile linter (version `v2.12.0`).
- **Type**: `object`
- **Default**: `{}`

##### 6.27.8.1. [reviews.tools.hadolint.enabled](#reviewstoolshadolintenabled)

- **Description**: Enable Hadolint.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

#### 6.27.9. [reviews.tools.swiftlint](#reviewstoolsswiftlint)

- **Description**: SwiftLint is a Swift linter (version `v0.57.0`).
- **Type**: `object`
- **Default**: `{}`

##### 6.27.9.1. [reviews.tools.swiftlint.enabled](#reviewstoolsswiftlintenabled)

- **Description**: Enable SwiftLint integration.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

##### 6.27.9.2. [reviews.tools.swiftlint.config_file](#reviewstoolsswiftlintconfig_file)

- **Description**: Optional path to the SwiftLint config file in the repo.
- **Type**: `string`

#### 6.27.10. [reviews.tools.phpstan](#reviewstoolsphpstan)

- **Description**: PHPStan is a tool to analyze PHP code (version `v2.0.3`).
- **Type**: `object`
- **Default**: `{}`

##### 6.27.10.1. [reviews.tools.phpstan.enabled](#reviewstoolsphpstanenabled)

- **Description**: Enable PHPStan.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

##### 6.27.10.2. [reviews.tools.phpstan.level](#reviewstoolsphpstanlevel)

- **Description**: Rule level to use (`0` to `max`). Ignored if config file has `level`.
- **Type**: `string`
- **Default**: `default`
- **Possible Values**: `default`, `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `max`

#### 6.27.11. [reviews.tools.golangci-lint](#reviewstoolsgolangci-lint)

- **Description**: A fast linters runner for Go (version `v1.62.2`).
- **Type**: `object`
- **Default**: `{}`

##### 6.27.11.1. [reviews.tools.golangci-lint.enabled](#reviewstoolsgolangci-lintenabled)

- **Description**: Enable golangci-lint.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

##### 6.27.11.2. [reviews.tools.golangci-lint.config_file](#reviewstoolsgolangci-lintconfig_file)

- **Description**: Optional path to the golangci-lint config file.
- **Type**: `string`

#### 6.27.12. [reviews.tools.yamllint](#reviewstoolsyamllint)

- **Description**: YAMLlint is a linter for YAML files (version `v1.35.1`).
- **Type**: `object`
- **Default**: `{}`

##### 6.27.12.1. [reviews.tools.yamllint.enabled](#reviewstoolsyamllintenabled)

- **Description**: Enable YAMLlint.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

#### 6.27.13. [reviews.tools.gitleaks](#reviewstoolsgitleaks)

- **Description**: Gitleaks is a secret scanner (version `v8.21.2`).
- **Type**: `object`
- **Default**: `{}`

##### 6.27.13.1. [reviews.tools.gitleaks.enabled](#reviewstoolsgitleaksenabled)

- **Description**: Enable Gitleaks.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

#### 6.27.14. [reviews.tools.checkov](#reviewstoolscheckov)

- **Description**: Checkov is a static code analysis tool for IaC (version `v3.2.334`).
- **Type**: `object`
- **Default**: `{}`

##### 6.27.14.1. [reviews.tools.checkov.enabled](#reviewstoolscheckovenabled)

- **Description**: Enable Checkov.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

#### 6.27.15. [reviews.tools.detekt](#reviewstoolsdetekt)

- **Description**: Detekt is a static analysis tool for Kotlin (version `v1.23.7`).
- **Type**: `object`
- **Default**: `{}`

##### 6.27.15.1. [reviews.tools.detekt.enabled](#reviewstoolsdetektenabled)

- **Description**: Enable detekt.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

##### 6.27.15.2. [reviews.tools.detekt.config_file](#reviewstoolsdetektconfig_file)

- **Description**: Optional path to the detekt config file.
- **Type**: `string`

#### 6.27.16. [reviews.tools.eslint](#reviewstoolseslint)

- **Description**: ESLint is a static code analysis tool for JavaScript files.
- **Type**: `object`
- **Default**: `{}`

##### 6.27.16.1. [reviews.tools.eslint.enabled](#reviewstoolseslintenabled)

- **Description**: Enable ESLint.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

#### 6.27.17. [reviews.tools.rubocop](#reviewstoolsrubocop)

- **Description**: RuboCop is a Ruby static code analyzer and formatter (version `v1.73`).
- **Type**: `object`
- **Default**: `{}`

##### 6.27.17.1. [reviews.tools.rubocop.enabled](#reviewstoolsrubocopenabled)

- **Description**: Enable RuboCop.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

#### 6.27.18. [reviews.tools.buf](#reviewstoolsbuf)

- **Description**: Buf offers linting for Protobuf files (version `v1.47.2`).
- **Type**: `object`
- **Default**: `{}`

##### 6.27.18.1. [reviews.tools.buf.enabled](#reviewstoolsbufenabled)

- **Description**: Enable Buf.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

#### 6.27.19. [reviews.tools.regal](#reviewstoolsregal)

- **Description**: Regal is a linter and language server for Rego (version `v0.29.2`).
- **Type**: `object`
- **Default**: `{}`

##### 6.27.19.1. [reviews.tools.regal.enabled](#reviewstoolsregalenabled)

- **Description**: Enable Regal.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

#### 6.27.20. [reviews.tools.actionlint](#reviewstoolsactionlint)

- **Description**: actionlint is a static checker for GitHub Actions workflows (version `v1.7.4`).
- **Type**: `object`
- **Default**: `{}`

##### 6.27.20.1. [reviews.tools.actionlint.enabled](#reviewstoolsactionlintenabled)

- **Description**: Enable actionlint.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

#### 6.27.21. [reviews.tools.pmd](#reviewstoolspmd)

- **Description**: PMD is an extensible multi-language static code analyzer, primarily for Java (version `v7.8.0`).
- **Type**: `object`
- **Default**: `{}`

##### 6.27.21.1. [reviews.tools.pmd.enabled](#reviewstoolspmdenabled)

- **Description**: Enable PMD.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

##### 6.27.21.2. [reviews.tools.pmd.config_file](#reviewstoolspmdconfig_file)

- **Description**: Optional path to PMD config file.
- **Type**: `string`

#### 6.27.22. [reviews.tools.cppcheck](#reviewstoolscppcheck)

- **Description**: Cppcheck is a static code analysis tool for C/C++ (version `v2.10-2`).
- **Type**: `object`
- **Default**: `{}`

##### 6.27.22.1. [reviews.tools.cppcheck.enabled](#reviewstoolscppcheckenabled)

- **Description**: Enable Cppcheck.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

#### 6.27.23. [reviews.tools.semgrep](#reviewstoolssemgrep)

- **Description**: Semgrep scans code for security vulnerabilities/code quality issues (version `v1.99.0`).
- **Type**: `object`
- **Default**: `{}`

##### 6.27.23.1. [reviews.tools.semgrep.enabled](#reviewstoolssemgrepenabled)

- **Description**: Enable Semgrep integration.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

##### 6.27.23.2. [reviews.tools.semgrep.config_file](#reviewstoolssemgrepconfig_file)

- **Description**: Optional path to the Semgrep config file.
- **Type**: `string`

#### 6.27.24. [reviews.tools.circleci](#reviewstoolscircleci)

- **Description**: A static checker for CircleCI config files (version `v0.1.31151`).
- **Type**: `object`
- **Default**: `{}`

##### 6.27.24.1. [reviews.tools.circleci.enabled](#reviewstoolscirclecienabled)

- **Description**: Enable CircleCI integration.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

---

## 7. chat

**Description**: Settings related to CodeRabbit's chat.
**Type**: `object`
**Default**: `{}`

### 7.1. [chat.auto_reply](#chatauto_reply)

- **Description**: Enable automatic replies without needing to tag CodeRabbit.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

### 7.2. [chat.create_issues](#chatcreate_issues)

- **Description**: Allow CodeRabbit to open issues from PR comments.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

### 7.3. [chat.integrations](#chatintegrations)

- **Type**: `object`
- **Default**: `{}`

#### 7.3.1. [chat.integrations.jira](#chatintegrationsjira)

- **Type**: `object`
- **Default**: `{}`

##### 7.3.1.1. [chat.integrations.jira.usage](#chatintegrationsjirausage)

- **Description**: Enable Jira integration for issues, etc. `'auto'` disables integration for public repos.
- **Type**: `string`
- **Default**: `auto`
- **Possible Values**: `auto`, `enabled`, `disabled`

#### 7.3.2. [chat.integrations.linear](#chatintegrationslinear)

- **Type**: `object`
- **Default**: `{}`

##### 7.3.2.1. [chat.integrations.linear.usage](#chatintegrationslinearusage)

- **Description**: Enable Linear integration for issues, etc. `'auto'` disables integration for public repos.
- **Type**: `string`
- **Default**: `auto`
- **Possible Values**: `auto`, `enabled`, `disabled`

---

## 8. knowledge_base

**Description**: Settings for CodeRabbit’s knowledge base.
**Type**: `object`
**Default**: `{}`

### 8.1. [knowledge_base.opt_out](#knowledge_baseopt_out)

- **Description**: Opt out of knowledge base features that require data retention.
- **Type**: `boolean`
- **Default**: `false`
- **Possible Values**: `true`, `false`

### 8.2. [knowledge_base.web_search](#knowledge_baseweb_search)

- **Type**: `object`
- **Default**: `{}`

#### 8.2.1. [knowledge_base.web_search.enabled](#knowledge_baseweb_searchenabled)

- **Description**: Enable the web search integration.
- **Type**: `boolean`
- **Default**: `true`
- **Possible Values**: `true`, `false`

### 8.3. [knowledge_base.learnings](#knowledge_baselearnings)

- **Type**: `object`
- **Default**: `{}`

#### 8.3.1. [knowledge_base.learnings.scope](#knowledge_baselearningsscope)

- **Description**: Use local, global, or auto scope for knowledge base learnings.
  - `local`: Use repository's learnings.
  - `global`: Use organization’s learnings.
  - `auto`: Public repos → repository’s learnings; private repos → organization’s.
- **Type**: `string`
- **Default**: `auto`
- **Possible Values**: `local`, `global`, `auto`

### 8.4. [knowledge_base.issues](#knowledge_baseissues)

- **Type**: `object`
- **Default**: `{}`

#### 8.4.1. [knowledge_base.issues.scope](#knowledge_baseissuesscope)

- **Description**: Use local, global, or auto scope for git platform issues.
- **Type**: `string`
- **Default**: `auto`
- **Possible Values**: `local`, `global`, `auto`

### 8.5. [knowledge_base.jira](#knowledge_basejira)

- **Type**: `object`
- **Default**: `{}`

#### 8.5.1. [knowledge_base.jira.usage](#knowledge_basejirausage)

- **Description**: Enable Jira as a knowledge base. `'auto'` disables integration for public repos.
- **Type**: `string`
- **Default**: `auto`
- **Possible Values**: `auto`, `enabled`, `disabled`

#### 8.5.2. [knowledge_base.jira.project_keys](#knowledge_basejiraproject_keys)

- **Description**: Jira project keys to use for the knowledge base.
- **Type**: `array of strings`
- **Default**: `[]`

### 8.6. [knowledge_base.linear](#knowledge_baselinear)

- **Type**: `object`
- **Default**: `{}`

#### 8.6.1. [knowledge_base.linear.usage](#knowledge_baselinearusage)

- **Description**: Enable Linear as a knowledge base. `'auto'` disables integration for public repos.
- **Type**: `string`
- **Default**: `auto`
- **Possible Values**: `auto`, `enabled`, `disabled`

#### 8.6.2. [knowledge_base.linear.team_keys](#knowledge_baselinearteam_keys)

- **Description**: Linear team identifiers (e.g., `"ENG"`) to use for the knowledge base.
- **Type**: `array of strings`
- **Default**: `[]`

### 8.7. [knowledge_base.pull_requests](#knowledge_basepull_requests)

- **Type**: `object`
- **Default**: `{}`

#### 8.7.1. [knowledge_base.pull_requests.scope](#knowledge_basepull_requestsscope)

- **Description**: Scope of pull requests (local, global, or auto) for the knowledge base.
- **Type**: `string`
- **Default**: `auto`
- **Possible Values**: `local`, `global`, `auto`

---

## 9. code_generation

**Description**: Settings related to code generation.
**Type**: `object`
**Default**: `{}`

### 9.1. [code_generation.docstrings](#code_generationdocstrings)

- **Type**: `object`
- **Default**: `{}`
- **Description**: Configure the generation of docstrings.

#### 9.1.1. [code_generation.docstrings.language](#code_generationdocstringslanguage)

- **Description**: Language of generated docstrings (ISO code).
- **Type**: `string`
- **Default**: `en-US`
- **Possible Values**: same as [language](#language) field above (ISO language codes).

---

</details>
```

Please note that code reviews commence with new pull requests or incremental
commits to existing pull requests once the CodeRabbit app is installed. Should
you have any questions or require assistance, our support team is here to help.

## Shared configuration

If you are self-hosting CodeRabbit in an air-gapped environment, you can use the
shared configuration feature to share the configuration across multiple repositories.

To use shared configuration, you need to:

1. Create a `.coderabbit.yaml` file and host it in a location that is accessible
   to from the CodeRabbit instance.
2. Create a `.coderabbit.yaml` file in the root of your repository with the
   following content:

```yaml
remote_config:
  url: "https://your-config-location/.coderabbit.yaml"
```
