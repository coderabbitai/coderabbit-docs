---
title: Detekt
sidebar_label: Detekt
description: CodeRabbit's guide to Detekt.
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

[Detekt](https://detekt.dev/) is a static code analysis tool specifically designed for Kotlin projects

## Files

Detekt will run on files with the following extensions:

- `.kt`
- `.kts`

## Configuration

Detekt uses a YAML style configuration file.

Detekt supports the following config files:

- User-defined config file set at `reviews.tools.detekt.config_file` in your project's `.coderabbit.yaml` file or setting the "Review → Tools → Detekt → Config File" field in CodeRabbit's settings page.

## Links

- [Detekt Configuration](https://detekt.dev/docs/introduction/configurations/)
