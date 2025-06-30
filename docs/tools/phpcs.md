---
title: PHPCS
sidebar_label: PHPCS
description: CodeRabbit's guide to PHPCS.
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

[PHPCS](https://github.com/squizlabs/PHP_CodeSniffer) (PHP CodeSniffer) is a development tool that ensures your code conforms to a coding standard. It is an essential tool for any development team that wants to ensure their code is consistent and follows best practices.

## Files

PHPCS will run on files with the following extensions:

- `.php`

## Features

PHPCS can detect and fix various coding standard violations including:

- **PSR Standards**: Enforces PSR-1, PSR-2, PSR-12, and other coding standards
- **Custom Standards**: Supports custom coding standards and rules
- **Auto-fixing**: Can automatically fix many coding standard violations
- **Custom Rules**: Allows creation of custom sniff rules
- **Multiple Standards**: Can enforce multiple coding standards simultaneously

## Popular Standards

PHPCS supports many coding standards including:

- **PSR-1**: Basic Coding Standard
- **PSR-2**: Coding Style Guide
- **PSR-12**: Extended Coding Style
- **Squiz**: Squiz Labs coding standard
- **PEAR**: PEAR coding standard
- **Zend**: Zend Framework coding standard

## Configuration

PHPCS requires a configuration file to run. CodeRabbit will only run PHPCS if one of the following configuration files is found:

- `phpcs.xml` - XML configuration file
- `phpcs.xml.dist` - Distributed XML configuration file

CodeRabbit will not run PHPCS if no configuration file is found.

## Links

- [PHPCS GitHub Repository](https://github.com/squizlabs/PHP_CodeSniffer)
- [PHPCS Documentation](https://github.com/squizlabs/PHP_CodeSniffer/wiki)
- [Available Coding Standards](https://github.com/squizlabs/PHP_CodeSniffer/wiki/Coding-Standards)
- [Creating Custom Standards](https://github.com/squizlabs/PHP_CodeSniffer/wiki/Coding-Standards#creating-a-coding-standard)
