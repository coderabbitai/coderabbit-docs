---
title: Set your repository preferences
description: Learn the basics of configuring CodeRabbit for your repository.
---

This page is about managing the settings of CodeRabbit for your
Git repository. For a general overview of configuring CodeRabbit, see [Configure CodeRabbit](/guides/configuration-overview).

## About repository settings {#about}

CodeRabbit provides two ways to manage its code-review behavior with each of your organization's repositories:

1. View or modify your per-repository settings using the CodeRabbit web interface.
1. Add a `coderabbit.yaml` file to your repostory.

Any settings that you define in the `coderabbit.yaml` file take precedence over
settings defined by the web interface. If your repository doesn't have a
`coderabbit.yaml` file, then CodeRabbit applies only the settings from the web
interface.

## Browse and modify your settings using the web interface {#modify}

To view or modify your organizational settings using the CodeRabbit web interface, follow these steps:

1. Visit [the CodeRabbit web interface](https://app.coderabbit.ai/settings/repositories).
1. In the sidebar, click **Repositories**.
1. Click the gear-shaped **Settings** icon of the repository whose settings you want to view or modify.
1. Browse and modify the settings as needed. If you do make changes, click **Apply Changes** when you are finished.

## Configure your repository with `coderabbit.yaml`

For more information about creating and updating a `coderabbit.yaml` file in
your repository, see [Add a configuration file](/getting-started/configure-coderabbit).

## What's next {#whats-next}

- [Configuration best practices](/guides/setup-best-practices#configuration)
- [Initial configuration guide](/guides/initial-configuration)
