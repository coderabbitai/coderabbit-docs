---
title: OXC
sidebar_label: OXC
description: CodeRabbit's guide to OXC (Oxidation Compiler).
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

[OXC](https://github.com/oxc-project/oxc) is a collection of high-performance JavaScript/TypeScript tools written in Rust, including a linter that is 50-100x faster than ESLint.

## Files

OXC will run on files with the following extensions:

- `.js`
- `.jsx`
- `.ts`
- `.tsx`

## Configuration

OXC supports the following config files:

- `oxlint.json`
- `.oxlintrc`
- `.oxlintrc.json`
- `oxlint.config.json`

:::note

OXC does not require configuration to run. If no OXC config file is found and Biome is enabled, CodeRabbit will use Biome instead as OXC functionality is included within Biome. If Biome is not enabled or an OXC config file is found, CodeRabbit will use the default OXC config.

:::

## Rule Configuration

While OXC embraces convention over configuration, you can customize rules in your config file if needed. The config file should be in JSON format. See the [OXC documentation](https://oxc-project.github.io) for more details on available rules and configuration options.

## Links

- [OXC GitHub Repository](https://github.com/oxc-project/oxc)
- [OXC Website](https://oxc.rust-server.org)
