---
title: Oxlint
sidebar_label: Oxlint
description: CodeRabbit's guide to Oxlint.
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

[Oxlint](https://github.com/oxc-project/oxc) is a blazingly fast JavaScript/TypeScript linter written in Rust that is 50-100x faster than ESLint.

## Files

Oxlint will run on files with the following extensions:

- `.js`
- `.jsx`
- `.ts`
- `.tsx`

## Configuration

Oxlint supports the following config files:

- `Oxlint.json`
- `.Oxlintrc`
- `.Oxlintrc.json`
- `Oxlint.config.json`

:::note

Oxlint does not require configuration to run. If no Oxlint config file is found and Biome is enabled, CodeRabbit will use Biome instead as Oxlint functionality is included within Biome. If Biome is not enabled or an Oxlint config file is found, CodeRabbit will use the default Oxlint config.

:::

## Rule Configuration

While Oxlint embraces convention over configuration, you can customize rules in your config file if needed. The config file should be in JSON format. See the [Oxlint documentation](https://oxc-project.github.io) for more details on available rules and configuration options.

## Links

- [Oxlint GitHub Repository](https://github.com/oxc-project/oxc)
- [Oxlint Website](https://oxc.rust-server.org)
