---
title: VSCode extension overview
description: How to review your code with the VSCode extension.
---

This page is about the CodeRabbit VSCode extension. For a broader overview of CodeRabbit, see [Introduction](/overview/introduction).

## About the VSCode extension

The CodeRabbit VSCode extension lets you apply a limited subset of CodeRabbit’s code-review features to your local development environment, directly from the VSCode IDE.

The extension is intended to let you use the power of CodeRabbit to rapidly tune and tidy your code changes locally, before you publish your changes to your team's remote repository and start a more thorough code review.

## Features

The extension includes the following features:

- Automatic reviews of local Git commmits

- Manually requested reviews of local code changes, either committed or uncommited

## Price and limitations

This extension is free to install and use, and works with any tier of CodeRabbit account. Rate limits apply to the numnber of local reviews that you can request per hour.

You can use the extension on its own, or you can use it to complement your local development on a repository whose remote has CodeRabbit installed.

As such, the extension makes only the most basic CodeRabbit review features available, with default settings applied. Advanced CodeRabbit features, such as interactive chat and project learnings, aren't available through the VSCode extension. These features are available only by [integrating CodeRabbit on your remote repository](/platforms), and then allowing CodeRabbit to review pull requests.

## What's next

- [Install the VSCode extension](/guides/install-extension)

- [Use the VSCode extension](/guides/use-extension)
