---
title: Brakeman
sidebar_label: Brakeman
description: CodeRabbit's guide to Brakeman.
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

[Brakeman](https://brakemanscanner.org/) is a static analysis tool which checks Ruby on Rails applications for security vulnerabilities. It scans your application's code for potential security issues and provides detailed reports about any vulnerabilities it finds.

## Supported Files

Brakeman will run on files with the following extensions:

- `Gemfile`
- `*.rb`
- `*.erb`

## Features

Brakeman can detect many critical vulnerabilities such as:

- SQL injection
- Cross-site scripting (XSS)
- Mass assignment
- Remote code execution
- And many more security vulnerabilities
- Out of date package versions
- Etc

## Links

- [Brakeman Official Website](https://brakemanscanner.org/)
- [Brakeman GitHub Repository](https://github.com/presidentbeef/brakeman)
- [Brakeman Documentation](https://brakemanscanner.org/docs/)
- [Warning Types](https://brakemanscanner.org/docs/warning_types/)
