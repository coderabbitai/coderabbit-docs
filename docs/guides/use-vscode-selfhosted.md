---
title: Use the VSCode extension with self-hosted CodeRabbit
description: How to setup the VSCode extension with self-hosted CodeRabbit
---

This page is about setting up the VSCode extension with self-hosted CodeRabbit. If you are instead using the managed offering, see [Install the VSCode extension](/guides/install-vscode).

## Prerequisites

Your extension version should be greater than `0.12.1`

## Connect your self-hosted instance{#connect-self-hosted-instance}

To connect the VSCode extension to your self-hosted instance, follow these steps:

1. Logout from the VSCode extension, if logged in to our managed offering.
2. Click on the "Self hosting CodeRabbit?" button, below the "Use CodeRabbit for free" button.
3. Enter your self-hosted instance URL.
	3.1. Make sure the instance URL is reachable within your network and websocket connections are allowed.
4. Select your git provider which you are using with your self-hosted CodeRabbit. (GitLab, Self-Hostd Gitlab, GitHub, GitHub Enterprise)
5. If using GitHub, enter your [Github Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) when asked.
6. You should be connected to your self-hosted instance and ready to use the VSCode extension.


## What's next {#whats-next}

- [Use the VSCode extension](/guides/use-vscode)
- [Configure the VSCode extension](/guides/config-vscode)
- [Uninstall the VSCode extension](/guides/uninstall-vscode)
