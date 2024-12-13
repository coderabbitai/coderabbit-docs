---
title: Checkov
sidebar_label: Checkov
description: CodeRabbit's guide to Checkov.
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

[Checkov](https://www.checkov.io/) is a static code analysis tool for scanning Infrastructure as Code (IaC) files for misconfigurations.

## Files

Checkov will run on files with the following files and extensions:

- `.tf`
- `.yml`
- `.yaml`
- `.json`
- `.template`
- `.bicep`
- `.hcl`
- `bower.json`
- `build.gradle`
- `build.gradle.kts`
- `go.sum`
- `gradle.properties`
- `METADATA`
- `npm-shrinkwrap.json`
- `package.json`
- `package-lock.json`
- `pom.xml`
- `requirements.txt`
- `Dockerfile`
- `.dockerfile`
- `Dockerfile.*`
- `.csproj`
- `yarn.lock`
- `Gemfile`
- `Gemfile.lock`
- `go.mod`
- `paket.dependencies`
- `paket.lock`
- `packages.config`
- `composer.json`
- `composer.lock`

## Configuration

CodeRabbit will include on the following severity levels based on the profile selected:

### Chill

- `HIGH`
- `CRITICAL`

### Assertive

- `MEDIUM`
- `HIGH`
- `CRITICAL`

## Links

- [Checkov All Resource Scans](https://www.checkov.io/5.Policy%20Index/all.html)
