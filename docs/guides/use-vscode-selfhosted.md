---
title: Use with self-hosted CodeRabbit
description: How to setup the VSCode extension with self-hosted CodeRabbit
---

This page is about setting up the VSCode extension with self-hosted CodeRabbit. If you are instead using the managed offering, see [Install the VSCode extension](/guides/install-vscode).

## Prerequisites

1. Your extension version should be greater than `0.12.1`.
2. Logout of the extension if previously logged in.

## Connect your self-hosted instance{#connect-self-hosted-instance}

To connect the VSCode extension to your self-hosted instance, follow these steps:

1. Click on the "Self hosting CodeRabbit?" button, below the "Use CodeRabbit for free" button.
2. Enter your self-hosted instance URL when prompted.
   - Make sure the instance URL is reachable within your network and websocket connections are allowed.
3. Select your git provider which you are using with your self-hosted CodeRabbit. (GitLab, Self-Hosted Gitlab, GitHub, GitHub Enterprise)
   - If using GitHub or GitHub Enterprise, enter your [Github Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) when prompted.

You should be connected to your self-hosted instance and ready to use the VSCode extension.

## What's next {#whats-next}

- [Use the VSCode extension](/guides/use-vscode)
- [Configure the VSCode extension](/guides/config-vscode)
- [Uninstall the VSCode extension](/guides/uninstall-vscode)
