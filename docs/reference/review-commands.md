---
title: Code review commands
description: A list of commands that you can issue to CodeRabbit during code reviews.
---

This page lists the various commands that you can issue to CodeRabbit through
its chat interface during code reviews. For more information about working with
CodeRabbit through chat, see [Interact with CodeRabbit reviews](/guides/code-review-overview#interact).

| Command                     | Description                                          | Use Case                                                                     |
| --------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------- |
| `@coderabbitai review`      | Triggers an incremental review of new changes        | When automatic reviews are disabled or you want to manually trigger a review |
| `@coderabbitai full review` | Performs a complete review of all files from scratch | When you want to get fresh insights on the entire PR                         |
| `@coderabbitai summary`     | Regenerates the PR summary                           | When you want an updated overview after making changes                       |

## Code review flow control

| Command                | Description                              | Use Case                                            |
| ---------------------- | ---------------------------------------- | --------------------------------------------------- |
| `@coderabbitai pause`  | Temporarily stops reviews on the PR      | When you're making multiple rapid changes           |
| `@coderabbitai resume` | Restarts reviews after a pause           | When you're ready for CodeRabbit to review again    |
| `@coderabbitai ignore` | Permanently disables reviews for this PR | When you want to handle the review process manually |

## Comment management

| Command                 | Description                             | Use Case                                                |
| ----------------------- | --------------------------------------- | ------------------------------------------------------- |
| `@coderabbitai resolve` | Resolves all CodeRabbit review comments | When you've addressed all feedback and want to clean up |

## Documentation commands

| Command                                  | Description                                  | Use Case                                            |
| ---------------------------------------- | -------------------------------------------- | --------------------------------------------------- |
| `@coderabbitai generate docstrings`      | Generates docstrings for functions in the PR | When you need automatic documentation for your code |
| `@coderabbitai auto-generate unit tests` | Generates unit tests for the PR              | When you need automatic unit testing for your code  |
| `@coderabbitai configuration`            | Shows current CodeRabbit settings            | When you need to check or export your configuration |

## Agentic chat commands

| Command              | Description                                                | Use Case                                             |
| -------------------- | ---------------------------------------------------------- | ---------------------------------------------------- |
| `@coderabbitai plan` | Get the agentic chat to plan an edit for previous comments | When you want CodeRabbit to change your code for you |

## Help and support

| Command              | Description                                | Use Case                                   |
| -------------------- | ------------------------------------------ | ------------------------------------------ |
| `@coderabbitai help` | Displays available commands and usage info | When you need guidance on using CodeRabbit |
