---
title: Set your repository preferences
description: Learn the basics of configuring CodeRabbit for your repository.
---

This page is about managing the settings of CodeRabbit for your
Git repository. For a general overview of configuring CodeRabbit, see [Configure CodeRabbit](/guides/configuration-overview).

## About repository settings {#about}

CodeRabbit provides two ways to manage its code-review behavior with each of your organization's repositories:

- Add a `.coderabbit.yaml` file to your repository.
- View or modify your per-repository settings using the CodeRabbit web interface.

If your repository contains a `.coderabbit.yaml` file at the top level of its default branch,
then CodeRabbit applies all of its settings to that repository's code reviews. CodeRabbit applies its own default values to any configuration settings not defined by your `.coderabbit.yaml` file.

If your repository doesn't have a `.coderabbit.yaml` file, then CodeRabbit applies the configuration from the CodeRabbit web interface, instead.

While the web interface provides an easier way to explore the available configuration options for your repository, we recommend using a `.coderabbit.yaml` file [as a best practice](/guides/setup-best-practices#yaml).

## Configure your repository with `.coderabbit.yaml`

To add a `.coderabbit.yaml` file to your repository, merge a copy of [our template configuration file](/reference/yaml-template)
to the top level of your default branch. From there, you can update your repository's CodeRabbit configuration by updating the `.coderabbit.yaml` file exactly as you would any other text file in your repository.

For more information about the `.coderabbit.yaml` file, see [Add a configuration file](/getting-started/configure-coderabbit).

## Browse and modify your settings using the web interface {#modify}

To view or modify your repository settings using the CodeRabbit web interface, follow these steps:

1. Visit [the CodeRabbit web interface](https://app.coderabbit.ai/settings/repositories).
1. In the sidebar, click **Repositories**.
1. Click the gear-shaped **Settings** icon of the repository whose settings you want to view or modify.
1. If the **Use Organization Settings** toggle is on, then click it to turn it off. If you leave it on, then CodeRabbit applies the settings you have set through [the organization-configuration page](/guides/organization-settings) to this repository.
1. Browse and modify the settings as needed. If you do make changes, click **Apply Changes** when you are finished.

## What's next {#whats-next}

- [Initial configuration guide](/guides/initial-configuration)
- [Configuration best practices](/guides/setup-best-practices#configuration)
