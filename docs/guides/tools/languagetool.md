---
title: LanguageTool
sidebar_label: LanguageTool
description: CodeRabbit's guide to LanguageTool.
---

[LanguageTool](https://github.com/languagetool-org/languagetool) is a style and grammar checker.

## Files

LanguageTool will run on files with the following extensions:

- `.md`
- `.mdx`
- `.markdown`
- `.txt`

## Configuration

LanguageTool's style and grammar check depends on the language selected in CodeRabbit's configuration. You can set the language by setting the `language` field in your project's `.coderabbit.yaml` file or setting the "Review Language" field in CodeRabbit's settings page.

CodeRabbit allows further configuring LanguageTool by setting specific rules and categories to be enabled/disabled. This can be done under the `reviews.tools.languagetool` field in your project's `.coderabbit.yaml` file or setting the various options under "Review → Tools → LanguageTool" in CodeRabbit's settings page. The following options are available:

- `enabled` - Enable or disable LanguageTool.
- `enabled_rules` - Enable specific rules.
- `disabled_rules` - Disable specific rules.
- `enabled_categories` - Enable specific categories.
- `disabled_categories` - Disable specific categories.
- `enabled_only`- Enable only the rules and categories of IDs are specified with 'enabledRules' or 'enabledCategories'.
- `level` - Set the level of feedback to be provided by LanguageTool. The following levels are available:
  - `default` - Provides feedback on common issues.
  - `picky` - Provides feedback on more issues, rules that you might only find useful when checking formal text.

## Links

- [LanguageTool Rules](https://community.languagetool.org/rule/list?lang=en)
