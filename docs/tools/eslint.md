---
title: ESLint
sidebar_label: ESLint
description: CodeRabbit's guide to ESLint.
---

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

CodeRabbit reads your ESLint configuration and uses it as is. Please ensure that all ESLint dependencies are defined in your `package.json` file(s). CodeRabbit supports Yarn and PNPM workspaces in your monorepo. CodeRabbit doesn't support private ESLint plugins or configurations at the moment.
