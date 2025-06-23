---
title: Code review best practices
description: Best practices for managing CodeRabbit code reviews.
sidebar_label: Code reviews
---

This page lists best practices for performing code reviews with CodeRabbit.

For more information about working with
CodeRabbit through chat, see [Control and manage code reviews](/guides/commands).

For a CodeRabbit command reference, see [Code review command reference](/reference/review-commands).

## Recommended code-review workflow

- Start with `@coderabbitai review` for checking new changes.
- Use `@coderabbitai full review` when major changes require a fresh perspective.
- Generate summaries after significant updates using `@coderabbitai summary`.

## Managing large changes

- Use `@coderabbitai pause` before making multiple commits.
- Resume reviews with `@coderabbitai resume` when ready.
- Consider `@coderabbitai full review` after substantial changes.

## Documentation flow

- Run `@coderabbitai generate docstrings` after finalizing function implementations.
- Learn more about [docstring generation](/finishing-touches/docstrings).

## Overall tips

- Commands are case-insensitive (`@coderabbitai REVIEW` works the same as `@coderabbitai review`).
- Commands can be issued by anyone with write access to the repository.
- Multiple commands can be used in sequence as needed.
- Use `@coderabbitai configuration` to export your settings before making changes.

## Command response time

- Most commands (pause, resume, ignore) take effect immediately.
- Review commands typically complete within a few minutes, depending on PR size.
- Docstring generation time varies based on the number of functions.
