---
title: SwiftLint
sidebar_label: SwiftLint
description: CodeRabbit's guide to SwiftLint.
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

[SwiftLint](https://realm.github.io/SwiftLint/) is a linter for Swift.

## Files

SwiftLint will run on files with the following extensions:

- `.swift`

## Configuration

SwiftLint supports the following config files:

- User-defined config file set at `reviews.tools.swiftlint.config_file` in your project's `.coderabbit.yaml` file or setting the "Review → Tools → SwiftLint → Config File" field in CodeRabbit's settings page.
- `.swiftlint.yaml`
- `.swiftlint.yml`

CodeRabbit will use the default settings if no config file is found.

## Links

- [SwiftLint Configuration](https://github.com/realm/SwiftLint?tab=readme-ov-file#configuration)
