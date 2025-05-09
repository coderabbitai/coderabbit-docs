---
title: Oxlint
sidebar_label: Oxlint
description: CodeRabbit's guide to Oxlint.
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

[Oxlint](https://oxc.rs/docs/guide/usage/linter) is a blazingly fast JavaScript/TypeScript linter written in Rust that is 50-100x faster than ESLint.

## Supported Files

Oxlint will run on files with the following extensions:

- `.js`
- `.mjs`
- `.cjs`
- `.jsx`
- `.ts`
- `.mts`
- `.cts`
- `.tsx`
- `.vue`
- `.astro`
- `.svelte`

## Configuration

Oxlint supports the following configuration file:

- `.oxlintrc.json`

:::note

If no Oxlint config file is found and Biome is enabled, CodeRabbit will use Biome instead as Oxlint functionality is included within Biome.

If Biome is not enabled or an Oxlint config file is found, CodeRabbit will use the `.oxlintrc.json` Oxlint config to run.

Oxlint does not require configuration to run if Biome is disabled and Oxlint is enabled.

:::

## Links

- [Oxlint GitHub Repository](https://github.com/oxc-project/oxc/releases/)
- [Oxlint Website](https://oxc.rs/docs/guide/usage/linter)
