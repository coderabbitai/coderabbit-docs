---
title: Luacheck
sidebar_label: Luacheck
description: CodeRabbit's guide to Luacheck.
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

[Luacheck](https://github.com/mpeterv/luacheck) is a static analyzer and linter for Lua code that detects various issues such as undefined global variables, unused variables and values, accessing uninitialized variables, unreachable code, and more.

## Supported Files

Luacheck will run on files with the following extensions:

- `.lua`

## Configuration

Luacheck supports the following configuration files:

- `.luacheckrc`
- `luacheckrc`
- `.luacheckrc.lua`
- `luacheckrc.lua`

:::note

Luacheck does not require configuration to run. If no configuration file is found, it will use default settings.

:::

## Features

Luacheck can detect:

- Usage of undefined global variables
- Unused variables and values
- Accessing uninitialized variables
- Unreachable code
- And many more issues

## Links

- [Luacheck GitHub Repository](https://github.com/mpeterv/luacheck)
- [Luacheck Documentation](https://luacheck.readthedocs.io/)
