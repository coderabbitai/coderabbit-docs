---
title: Review pull requests
description: An overview of CodeRabbit's core code review features.
sidebar_label: Overview
---

One of the core features of CodeRabbit is its ability to proactively review
new pull requests on your code repository.

CodeRabbit reviews take the form of pull request comments that
include summaries, analyses, and initial critiques of the proposed changes.
This information, usually added to pull requests within minutes, can help your team perform more rapid, better-informed code reviews.

The following sections present an overview of this feature. For a hands-on example that lets you experience a CodeRabbit code review using
a real repository, see [Quickstart](/getting-started/quickstart).

## Automatically review pull requests {#review}

After you [integrate CodeRabbit with your repository](/platforms), CodeRabbit proceeds
to automatically review every subsequent pull request, as soon as each one is created.

A CodeRabbit code review consists of a single, multi-part comment attached to the pull request.
The comment contains a detailed summary and analysis of the changes,
as well as a listing of problems or areas for potential improvement that it found.

CodeRabbit
uses a variety of open-source linters and security tools to provide this analysis. CodeRabbit
also consults a number of large language models (LLMs) to further analyze and critique the proposed changes,
using all of the content of your repository as context. The code-review comment that CodeRabbit attaches
to your pull request synthesizes and summarizes all of the information collected from these different sources.

For more information
on the open-source tools that CodeRabbit applies and how you can configure its use of them,
see [Configure third-party tool use](/tools).

For more information about the graph analysis that CodeRabbit includes with its reviews
when available, see [CodeRabbit Code Graph Analysis](/integrations/code-graph-analysis).

### Events that trigger automated reviews {#events}

By default, the following activity in your repository triggers CodeRabbit to
perform a code review:

- If CodeRabbit sees a new pull request, then it immediately performs a full review
  of the proposed code changes.
- If an open pull request that CodeRabbit has already reviewed gets modified with another
  commit, then CodeRabbit performs an incremental review that focuses on the new commit.

### Example code reviews {#examples}

The following real pull requests, hosted on GitHub, demonstrate some example CodeRabbit
review comments.

- [A modest refactoring of Markdown-based documentation source](https://github.com/coderabbitai/coderabbit-docs/pull/325), demonstrating a CodeRabbit graph analysis.
- [A large change that added many files](https://github.com/tyaga001/devtoolsacademy/pull/44), demonstrating incremental automated reviews of subsequent commits.

## Interact with CodeRabbit reviews {#interact}

After CodeRabbit attaches its initial code-review comment to a pull request, you can
directly interact with CodeRabbit by mentioning its username, `@coderabbitai`, in comments
that you post to the pull request.

These interactions can serve several purposes:

- Free-form discussion about the pull request and the ongoing code review.
- Commands to have CodeRabbit perform specific actions regarding the code review.
- Prompts to have CodeRabbit generate its own improvements to the branch under review.

### Chat with CodeRabbit {#chat}

You can have open-ended, natural-language discussion with CodeRabbit during a code review, treating it
as an LLM-powered chat bot that has your entire code repository available for context. For more information, see [CodeRabbit Chat](/guides/agent_chat).

### Manage CodeRabbit review behavior {#manage}

CodeRabbit recognizes a variety of keyword-based commands that let you control its
behavior during a code review, including the following:

- Pause or resume automated reviews of the pull request.
- Manually request a review, when automated reviews are paused.
- Resolve all open comments authored by CodeRabbit.

For more information, see [Control and manage code reviews](/guides/commands).

### Generate improvements {#generate}

You can command CodeRabbit to generate improvements to the branch under review.
CodeRabbit accomplishes this by publishing a new branch based on the branch under review,
and cerating a new pull request for your own review.

Available code-generation commands let you request the following from CodeRabbit:

- Implement the suggestions for improvements that CodeRabbit has made in its earlier code review comments.
- Generate inline documentation for any undocumented functions that this pull request proposes to add.

For more information, see [Generate improvements](/guides/generate-improvements).

## What's next {#whats-next}

- [Control and manage code reviews](/guides/commands)
- [Generate code improvements](/guides/generate-improvements)
