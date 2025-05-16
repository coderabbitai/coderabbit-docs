---
title: Review local changes
description: How to review your code with the VSCode extension.
slug: /code-editors
sidebar_label: Overview
---

This page is about the CodeRabbit VSCode extension. For a broader overview of CodeRabbit, see [Introduction](/).

## About the VSCode extension

The CodeRabbit VSCode extension lets you apply a limited subset of CodeRabbit’s code-review features to your local development environment, directly from the VSCode IDE. It also works with other text editors that are able to install and use VSCode extensions, such as Cursor and Windsurf.

You can use the extension on its own, or you can use it to complement your local development on a repository whose remote has CodeRabbit installed.

The extension is intended to let you use the power of CodeRabbit to rapidly tune and tidy your code changes locally, before you publish your changes to your team's remote repository and start a more thorough code review.

## Features

The extension includes the following features:

- Automatic code reviews on every local Git commit.
- Manually requested reviews of local code changes.
- One-click application of simpler suggested code fixes.
- Integration with AI coding agents, including Copilot and Claude Code, to help you resolve more complex suggestions.
- Full compatibility with text editors derived from VSCode, including Cursor and Windsurf.

## Price and limitations

This extension is free to install and use, and works with any tier of CodeRabbit account. Rate limits apply to the number of local reviews that you can request per hour.

The extension makes only basic CodeRabbit review features available, with default settings applied. Advanced CodeRabbit features, such as interactive chat and project learnings, aren't available through the VSCode extension. These features are available only by [integrating CodeRabbit on your remote repository](/platforms), and then allowing CodeRabbit to review pull requests.

## What's next

- [Install the VSCode extension](/guides/install-vscode)
- [Use the VSCode extension](/guides/use-vscode)
