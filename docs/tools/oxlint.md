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

Oxlint does not require configuration to run. If no Oxlint config file is found and Biome is enabled, CodeRabbit will use Biome instead as Oxlint functionality is included within Biome. If Biome is not enabled or an Oxlint config file is found, CodeRabbit will use the default Oxlint config.

:::

## Integration Details

When running Oxlint, CodeRabbit:

1. Checks if Oxlint is enabled in your configuration
2. Verifies if a `.oxlintrc.json` configuration file exists
3. Processes files in parallel with a limit of 5 concurrent tasks
4. Uses the `--format=json` and `--deny-warnings` flags for consistent output
5. Maps the output to standardized findings with:
   - Start line number
   - End line number
   - Error message
   - Category (rule code)
   - Severity level

## Links

- [Oxlint GitHub Repository](https://github.com/oxc-project/oxc)
- [Oxlint Website](https://oxc.rust-server.org)
