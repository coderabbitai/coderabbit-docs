---
title: Linters
sidebar_label: Linters
description: Overview of CodeRabbit's supported linters and security analysis tools.
sidebar_position: 1
---

CodeRabbit supports various linters and security analysis tools to help you maintain code quality.

## Enabling/Disabling Linters

You can enable or disable linters by setting `reviews.tools.<linter>.enabled` in your project's `.coderabbit.yaml` file or setting the "Review → Tools → Linter" field in CodeRabbit's settings page.

## Customizing Linters

CodeRabbit supports customizing the strictness of linters by setting `reviews.profile` in your project's `.coderabbit.yaml` file or setting the "Review → Profile" field in CodeRabbit's settings page. The following profiles are available:

- `Chill` - Yields less feedback, that may be considered lenient.
- `Assertive` - Yields more feedback, that may be considered nit-picky.

## Linters

- [Ruff](./ruff.md)
