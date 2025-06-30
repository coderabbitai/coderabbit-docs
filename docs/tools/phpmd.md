---
title: PHPMD
sidebar_label: PHPMD
description: CodeRabbit's guide to PHPMD.
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

[PHPMD](https://phpmd.org/) (PHP Mess Detector) is a static analysis tool for PHP that detects potential problems in your code such as possible bugs, suboptimal code, overcomplicated expressions, and unused parameters, variables, methods, and classes.

## Files

PHPMD will run on files with the following extensions:

- `.php`

## Features

PHPMD can detect various code quality issues including:

- **Clean Code Rules**: Detects code smells and violations of clean code principles
- **Controversial Rules**: Identifies potentially problematic code patterns
- **Design Rules**: Finds design-related issues and architectural problems
- **Naming Rules**: Checks for naming convention violations
- **Unused Code Rules**: Detects unused variables, parameters, methods, and classes
- **Size Rules**: Identifies overly complex methods and classes

### Review Mode Behavior

CodeRabbit's review mode affects which PHPMD rules are applied:

- **Chill Mode**: Only checks for unused code (`unusedcode` rule set)
- **Nitpick Mode**: Checks all rule sets including clean code, code size, controversial rules, design issues, naming conventions, and unused code (`cleancode,codesize,controversial,design,naming,unusedcode`)

## Links

- [PHPMD Official Website](https://phpmd.org/)
- [PHPMD GitHub Repository](https://github.com/phpmd/phpmd)
- [PHPMD Documentation](https://phpmd.org/documentation/index.html)
- [Available Rules](https://phpmd.org/rules/index.html)
