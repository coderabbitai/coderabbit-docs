---
title: Review pull requests
description: An overview of CodeRabbit's core code review features.
sidebar_label: Overview
---

The central feature of CodeRabbit is its ability to proactively review
new pull requests on your code repository.

CodeRabbit reviews take the form of pull request comments that
include summaries, analyses, and initial critiques of the proposed changes.
This information, usually added to pull requests within minutes, can help your team perform more rapid, better-informed code reviews.

The following sections present an overview of this feature. For a hands-on example that lets you experience a CodeRabbit code review using
a real repository, see [Quickstart](/getting-started/quickstart).

## Automatically review pull requests {#review}

After you [integrate CodeRabbit with your repository](/platforms), CodeRabbit proceeds
to automatically review every subsequent pull request, as soon as each one is created.

CodeRabbit performs code reviews by attaching comments to the pull request.
These comments contain detailed summaries and analyses of the changes,
as well as listing out problems or areas for potential improvement that it found.

CodeRabbit uses [a variety of open-source linters and security tools](/tools) and a custom
code verification agent to provide this analysis. CodeRabbit
also consults several models to further analyze and critique the proposed changes,
using all of the content of your repository as context. The code-review comment that CodeRabbit attaches
to your pull request synthesizes and summarizes all of the information collected from these different sources.

For more information about the graph analysis that CodeRabbit includes with its reviews
when available, see [CodeRabbit Code Graph Analysis](/integrations/code-graph-analysis).

### Events that trigger automated reviews {#events}

By default, the following activity in your repository triggers CodeRabbit to
perform a code review:

- If CodeRabbit sees a new pull request, then it immediately performs a full review
  of the proposed code changes.
- If an open pull request that CodeRabbit has already reviewed gets modified with another
  commit, then CodeRabbit performs an incremental review that focuses on the new commit.

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
as an LLM-powered chatbot that has your entire code repository available for context. For more information, see [CodeRabbit Chat](/guides/agent_chat).

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
and creating a new pull request for your own review.

Available code-generation commands let you request the following from CodeRabbit:

- Implement the suggestions for improvements that CodeRabbit has made in its earlier code review comments.
- Generate inline documentation for any undocumented functions that this pull request proposes to add.

For more information, see [Generate improvements](/guides/generate-improvements).

## What's next {#whats-next}

- [Control and manage code reviews](/guides/commands)
- [Generate code improvements](/guides/generate-improvements)
