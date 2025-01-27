---
title: detekt
sidebar_label: detekt
description: CodeRabbit's guide to detekt.
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

[`detekt`](https://detekt.dev/) is a static code analysis tool specifically designed for Kotlin projects

## Files

`detekt` will run on files with the following extensions:

- `.kt`
- `.kts`

## Configuration

`detekt` uses a YAML style configuration file.

`detekt` supports the following config files:

- User-defined config file set at `reviews.tools.detekt.config_file` in your project's `.coderabbit.yaml` file or setting the "Review → Tools → `detekt` → Config File" field in CodeRabbit's settings page.

## Links

- [`detekt` Configuration](https://detekt.dev/docs/introduction/configurations/)
