---
title: Docstrings generation with CodeRabbit
sidebar_label: Docstrings
description: Automated docstrings pull requests with CodeRabbit
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

# Docstrings

Docstrings generation is part of the [finishing touches](/future-development#finishing-touches).

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

This feature has been rigorously tested and is now available for all Pro plan users. Additionally, you can provide feedback about this feature on [Discord](https://discord.com/channels/1134356397673414807/1317286905557287022).

## Supported software forges

These software forges are supported:

- [x] Azure DevOps
- [ ] Bitbucket Cloud
- [ ] Bitbucket Data Center
- [x] GitHub
- [x] GitLab

While Bitbucket is not officially supported, docstrings can still be generated. However, they will be posted in a comment under the pull request. Full support for Bitbucket is planned.

## Supported languages

These languages are supported:

- [x] Bash
- [x] C
- [x] C#
- [x] C++
- [x] Elixir
- [x] Go
- [ ] Haskell
- [x] Java
- [x] JavaScript
- [x] Kotlin
- [x] Lua
- [x] Php
- [x] Python
- [x] React TypeScript
- [x] Ruby
- [x] Rust
- [ ] Scala
- [x] Swift
- [x] TypeScript

CodeRabbit uses `ast-grep` to parse the code. If you want a new language to be supported, please look into [Add New Language to ast-grep](https://ast-grep.github.io/contributing/add-lang.html#add-new-language-to-ast-grep) first.
