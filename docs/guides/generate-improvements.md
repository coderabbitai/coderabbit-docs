---
title: Generate improvements
description: Request coderabbit to generate its own code improvements during code reviews
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

This page is about using CodeRabbit to generate improvements to code under review.

For a general overview of performing code reviews with CodeRabbit, see [Review pull requests](/guides/code-review-overview).

## Overview of CodeRabbit code generation {#overview}

:::note
This feature is available only on GitHub.
:::

You can request CodeRabbit to generate improvements to a branch that it is currently reviewing.

To do this, write out your request prompt in a comment addressed to `@coderabbitai`,
such as with the following examples:

- `@coderabbitai Please implement the changes you suggested in your code review.`
- `@coderabbitai Add input validation with proper error messages to these new functions.`
- `@coderabbitai Break this large function into smaller, more focused methods.`

In addition to this kind of free-form request, you can also give CodeRabbit keyword-based
commands for common code-generation requests, as described in [Code generation commands](#commands).
This includes the `plan` keyword, which acts as shorthand for the first prompt on the
previous list.

After you give it a code-generation prompt or command, CodeRabbit delivers its suggested improvements by taking these steps:

1. CodeRabbit posts a comment or two to the pull request, detailing its improvement plans.
1. CodeRabbit publishes a new branch, based on the open pull request's branch, to the remote repository.
1. CodeRabbit opens a new pull request based on this new branch, and links to it from the original pull request.

CodeRabbit doesn't make any further changes to the new branch or to the new pull request
after it creates them. From that point on, it's fully up to you what to do with the new, suggested-change branch.

The best practice is to effectively take ownership of the new branch for yourself,
deciding whether it's worth merging into the original pull request branch, and making
any further updates you'd like to make first. You can use comments in the new branch
to ask CodeRabbit to explain its changes, if needed, or to otherwise converse with
CodeRabbit about the suggested improvements.

Because it's just an ordinary Git branch, the presence of the suggested-change branch
doesn't block the ongoing code review in the original pull request branch. You are
free to merge, defer, or close the suggested-change pull request that CodeRabbit made, using any method or timing that fits
your workflow.

## Code generation commands {#commands}

This section lists short commands that you can give CodeRabbit to have it accomplish
common code-generation tasks. For more complex tasks, you can instead write out full
prompts, as described in the previous section.

For a complete CodeRabbit command reference, see [Code review command reference](/reference/review-commands).

### Generate inline documentation {#docstrings}

To have CodeRabbit generate missing documentation for function code added by
the pull request, post the following comment to the
pull request:

```text
@coderabbitai generate docstrings
```

For more information about how CodeRabbit can generate inline documentation, including
the Git platforms and programming languages that this feature supports, see
[Docstrings](/finishing-touches/docstrings).

### Generate solutions to open review comments {#plan}

To have CodeRabbit generate and add a new repository branch with code improvements
that try to address its own code review comments, post the following comment to the
pull request:

```text
@coderabbitai plan
```

Using this keyword is essentially shorthand for writing out a prompt like the following:

```text
@coderabbitai Implement the changes that you suggested and apply them to this pull request.
```

If you want to give CodeRabbit more specific implement instructions other than a general
request to implement its own suggestions, then you can write out those instructions
as a full prompt, instead of using the one-word `plan` command.

## What's next {#whats-next}

- [Control and manage code reviews](/guides/commands)
- [Best practices](/guides/code-review-best-practices)
- [Troubleshooting](/guides/code-review-troubleshooting)
