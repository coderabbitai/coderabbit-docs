---
title: ESLint
sidebar_label: ESLint
description: CodeRabbit's guide to ESLint.
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

[ESLint](https://eslint.org/) is a linter for JavaScript, TypeScript, JSX, TSX, CSS, etc.

## Files

ESLint will run on files with the following extensions:

- `.js`
- `.ts`
- `.cjs`
- `.mjs`
- `.d.cts`
- `.d.mts`
- `.jsx`
- `.tsx`
- `.css`
- `.vue`
- `.svelte`
- `.astro`

## Configuration

- ESLint configuration is read from the repository and is used as is. No additional configuration is required.
- Please ensure that all ESLint dependencies are defined in your `package.json` file(s).
- Yarn and PNPM workspaces are supported.
- Private ESLint plugins or configurations are not supported at the moment. Please reach out to us on Discord if you would like us to add support for this.
- For `@typescript-eslint`, linting with type information at the moment. The [type checking rules](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/disable-type-checked.ts) are disabled.
- For `eslint-plugin-import`, the following rules are disabled:
  - `import/no-unresolved`
- For the `eslint-plugin-n`, the following rules are disabled:
  - `n/no-missing-import`
  - `n/no-missing-require`
- For the `eslint-plugin-node`, the following rules are disabled:
  - `node/no-missing-import`
  - `node/no-missing-require`
