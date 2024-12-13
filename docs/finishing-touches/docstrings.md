---
title: Docstrings generation with CodeRabbit
sidebar_label: Docstrings (Beta)
description: Automated docstrings pull requests with CodeRabbit
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

# Docstrings

Docstrings generation is part of the [finishing touches](/future-developments#finishing-touches) initiative.

:::info

This feature is in [beta](/early-access#beta).

:::

## Usage

Once you are done with your pull request and its reviews, you may want to perform finishing touches to your code, such as adding in-code documentation. You can request CodeRabbit to generate docstrings by typing `@coderabbitai generate docstrings` in a comment under that pull request.

Once sent, CodeRabbit will perform the following actions:

- All functions that are in the pull request's changes will be fetched using `ast-grep`
- Docstrings will be generated for the functions where they are missing or incomplete
- These docstrings will be committed in a new branch in the same repository
- CodeRabbit will open a pull request from this new branch to the existing pull request

Here's an example of what a pull request may look like:

![Docstrings PR](/img/finishing-touches/docstrings-pull-request.png)

CodeRabbit cannot perform further modifications to opened pull requests. From there, it's your turn to checkout the branch and improve it to satisfaction. We believe that this workflow provides a significant headstart to documenting code.

We are testing this workflow internally to adjust the prompts, add more supported software forges, add more supported languages and craft an excellent user experience. However, you can use this preview and enjoy a sneak peek at the future of CodeRabbit.

## Supported software forges

The checked software forges are supported:

- [ ] Azure DevOps
- [ ] Bitbucket
- [x] GitHub
- [ ] GitLab

The presence of an unsupported software forge in this list does not constitute a commitment to support it in the future. Remember that the docstrings feature is in [beta](/early-access#beta).

## Supported languages

The checked languages are supported:

- [ ] Bash
- [ ] C
- [x] C++
- [ ] C#
- [x] Elixir
- [x] Go
- [ ] Haskell
- [ ] Java
- [x] JavaScript
- [ ] Kotlin
- [ ] Lua
- [ ] Php
- [x] Python
- [ ] React TypeScript
- [ ] Ruby
- [ ] Rust
- [ ] Scala
- [ ] Swift
- [x] TypeScript

The presence of an unsupported language in this list does not constitute a commitment to support it in the future. Remember that the docstrings feature is in [beta](/early-access#beta).

:::note
In the case of JavaScript and TypeScript, there are tons of ways to declare functions. At the moment, we only support the keyword `function` at the top level.
:::
