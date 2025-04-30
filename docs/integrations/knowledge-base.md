---
title: Apply your code review preferences
description: Learn about CodeRabbit's internal knowledge base and its integrations with external services.
---

CodeRabbit utilizes an internal knowledge base that integrates with several external services to provide a seamless review and issue management experience.

## Issue Tracking Integration

CodeRabbit can integrate with your issue tracking systems to provide better context during code reviews. For details on setting up issue tracking integrations, see our [Issue Integrations](./issue-integrations.md) guide.

## Learnings {#learnings}

You can tell the bot to remember things about either specific lines in files, or generally about the entire repository, or even across repositories.

For example, you can add a comment in a PR to chat directly with CodeRabbit. `@coderabbitai always remember to enforce camelCase`.

Or you can comment directly on some lines of code in the PR. `@coderabbitai do not complain about lack of error handling here, it is handled higher up the execution stack.`

:::tip Video Tutorial

Watch our [video walkthrough on learnings](https://www.youtube.com/watch?v=Yu0cmmOYA-U) for more information.

:::
