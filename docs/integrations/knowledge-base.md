---
title: Knowledge base overview
description: Learn about CodeRabbit's internal knowledge base and its integrations with external services.
---

CodeRabbit utilizes an internal knowledge base that integrates with several external services to provide a seamless review and issue management experience.

## Issue Tracking Integration

CodeRabbit can integrate with your issue tracking systems to provide better context during code reviews. For details on setting up issue tracking integrations, see our [Issue Integrations](./issue-integrations.md) guide.

## Learnings {#learnings}

You can tell the bot to remember things about either specific lines in files, or generally about the entire repository, or even across repositories.

For example, you can add a comment in a PR to chat directly with CodeRabbit. `@coderabbitai always remember to enforce camelCase`.

Or you can comment directly on some lines of code in the PR. `@coderabbitai do not complain about lack of error handling here, it is handled higher up the execution stack.`

For more information, see [Teach CodeRabbit your review preferences](/guides/learnings).

## Code Guidelines {#code-guidelines}

CodeRabbit can read _code guideline_ files that set standards and expectations about
your team's coding practices, described in natural language. CodeRabbit applies any instructions it reads from a repository's code guideline files to all subsequent code reviews.

By default, CodeRabbit looks for and loads guideline files used by other AI coding assistants, including the following:

- Claude Code
- Cursor
- Gemini
- GitHub Copilot
- Windsurf

You can also mark any other file
or set of files in your repository as code guidelines by providing CodeRabbit with a list
of paths to those files.

This feature is enabled by default; you can disable it if needed.

For more information about configuring the code guidelines feature, see [Code guidelines](/reference/configuration#code-guidelines) in the configuration reference page.
