---
title: oxlint
sidebar_label: oxlint
description: CodeRabbit's guide to oxlint.
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

[oxlint](https://github.com/oxc-project/oxc) is a blazingly fast JavaScript/TypeScript linter written in Rust that is 50-100x faster than ESLint.

## Files

oxlint will run on files with the following extensions:

- `.js`
- `.jsx`
- `.ts`
- `.tsx`

## Configuration

oxlint supports the following config files:

- `oxlint.json`
- `.oxlintrc`
- `.oxlintrc.json`
- `oxlint.config.json`

:::note

oxlint does not require configuration to run. If no oxlint config file is found and Biome is enabled, CodeRabbit will use Biome instead as oxlint functionality is included within Biome. If Biome is not enabled or an oxlint config file is found, CodeRabbit will use the default oxlint config.

:::

## Rule Configuration

While oxlint embraces convention over configuration, you can customize rules in your config file if needed. The config file should be in JSON format. See the [oxlint documentation](https://oxc-project.github.io) for more details on available rules and configuration options.

## Links

- [oxlint GitHub Repository](https://github.com/oxc-project/oxc)
- [oxlint Website](https://oxc.rust-server.org)
