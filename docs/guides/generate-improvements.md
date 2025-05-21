---
title: Generate improvements
description: Request coderabbit to generate its own code improvements during code reviews
---

During a code review, you can command CodeRabbit to address its own review comments
by generating its own code improvements, which it publishes on separate branches.

For a general overview of performing code reviews with CodeRabbit, see [Review pull requests](/guides/code-review-overview).

## Overview of CodeRabbit code generation {#overview}

You can command CodeRabbit to generate any code changes necessary to address its own code review suggestions,
or you can command it specifically to address inline documentation gaps.

After you give it a code-generation command, CodeRabbit delivers its suggested improvements by taking these steps:

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

For a complete CodeRabbit command reference, see [Code review command reference](/reference/review-commands).

### Generate inline documentation {#docstrings}

To have CodeRabbit generate missing documentation for function code added by
the pull request, post the following comment to the
pull request:

```
@coderabbitai generate docstrings
```

For more information about how CodeRabbit can generate inline documentation, including
the Git platforms and programming languages that this feature supports, see
[Docstrings](/finishing-touches/docstrings).

### Generate solutions to open review comments {#plan}

:::note
This feature is available only on GitHub.
:::

To have CodeRabbit generate and add a new repository branch with code improvements
that try to address its own code review comments, post the following comment to the
pull request:

```
@coderabbitai plan
```

## What's next {#whats-next}

- [Control and manage code reviews](/guides/commands)
- [Best practices](/guides/code-review-best-practices)
- [Troubleshooting](/guides/code-review-troubleshooting)
