---
title: Configure the VSCode extension
description: How to configure the CodeRabbit VSCode extension
---

This page is about configuring the CodeRabbit VSCode extension. For more information about the extension, see
[Review local changes](/code-editors).

:::note
The instructions on this page are specific to using the extension with VSCode. If you are instead using a VSCode-compatible editor such as Cursor or Windsurf, then the steps that you need to follow are similar, but might require some adaptation.
:::

## Find the settings screen {#find}

To navigate to the settings screen for the CodeRabbit VSCode extension, follow these steps:

1. Open the CodeRabbit activity bar/sidebar.

1. In the sidebar, click on gear shaped icon on top right(beside logout icon).

1. You can also search for CodeRabbit: Settings in the command palette to open the settings.

The settings screen contains the following configuration controls.

## Configure AI agent integration {#agent}

The **Agent Type** setting lets you choose the extension's response to using the **Fix with AI** feature during code reviews. Your options are the following:

- **Native**: The extension prompts the AI agent associated with your IDE to apply the suggested fix.

  This works only with VSCode(using Copilot) and Cursor(you have to start the task). If you have this option selected when using a different IDE, then the extension instead copies the prompt to your clipboard.

- **Claude Code**: The extension opens the Terminal pane of your IDE and tries to use the `claude` command-line program to apply the suggested fix to your code. You need to have [Claude Code](https://www.anthropic.com/claude-code) installed for this option to be effective.

- **Codex CLI**: The extension opens the Terminal pane of your IDE and tries to use the `codex` command-line program to apply the suggested fix to your code. You need to have [Codex CLI](https://github.com/openai/codex) installed for this option to be effective.

- **OpenCode**: The extension opens the Terminal pane of your IDE and tries to use the `opencode` command-line program to apply the suggested fix to your code. You need to have [OpenCode](https://opencode.ai) installed for this option to be effective.

- **Cline**: The extension opens the `Cline` sidebar and runs a task to apply the suggested fix to your code. You need to have the [Cline](https://cline.bot/) extension installed for this option to be effective.

- **Roo**: The extension opens the `Roo` sidebar and runs a task to apply the suggested fix to your code. You need to have the [Roo](https://github.com/RooCodeInc/Roo-Code) extension installed for this option to be effective.

- **Kilo Code**: The extension opens the `Kilo Code` sidebar and runs a task to apply the suggested fix to your code. You need to have the [Kilo Code](https://kilocode.ai/) extension installed for this option to be effective.

- **Augment Code**: The extension opens the `Augment Code` sidebar with the prompt to apply the suggested fix to your code, and you can start the task. You need to have the [Augment Code](https://www.augmentcode.com/) extension installed for this option to be effective.

- **Clipboard**: The extension copies prompt text describing the suggested fix to your clipboard. From there, you can manually paste the prompt into the coding AI agent that you use with your IDE.

For more information about the **Fix with AI** feature, see [Request help from your AI coding agent](/guides/use-vscode#agent).

## Configure automatic review behavior {#auto-reviews}

The **Auto Review Mode** setting lets you control the behavior of the automatic code reviews that the extension can perform after you make commits to your local Git repository. Your options are the following:

- **Disabled**: The extension doesn't perform automatic code reviews.

- **Prompt**: After every commit, the extension displays a dialog asking if you'd like it to perform a code review.

- **Auto**: The extension always performs a review after every commit.

For more information about this feature, see [Automatically review local commits](/guides/use-vscode#auto-reviews).

## Use with self-hosted CodeRabbit {#self-hosted-coderabbit}

This setting is only used when you're using a self-hosted instance of CodeRabbit. If you're using the CodeRabbit Cloud service, you don't need to configure this setting. You will need to login and logout of the extension after adding this value.

## What's next {#whats-next}

- [Use the VSCode extension](/guides/use-vscode)

- [Uninstall the VSCode extension](/guides/uninstall-vscode)
