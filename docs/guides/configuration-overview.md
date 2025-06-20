---
title: Configure CodeRabbit
description: Learn the basics of configuring CodeRabbit for your organization.
sidebar_label: Overview
---

After you finish [integrating CodeRabbit with your Git platform](/platforms/),
you can configure CodeRabbit to best fit the needs of your organization, team,
and individual code repositories.

## About CodeRabbit configuration

CodeRabbit has [a lot of configuration options](/reference/configuration), with default settings that are designed to meet most needs. CodeRabbit is designed to work "out
of the box": if you don't change any of the
configuration settings away from the defaults, then CodeRabbit starts automatically
adding code reviews to new pull requests in your repositories.

However, understanding how to configure CodeRabbit lets you tune its behavior
to the particulars of your team's code. A few advantages of manually configuring
CodeRabbit inlcude the following:

- Let CodeRabbit deliver its reviews more quickly by giving it guidance on the level of review detail you want.
- Get more meaningful code reviews by specifying the parts of your repository that CodeRabbit should read to gain context.
- Make sure that CodeRabbit works in compliance with your organiation's data-retention policies.

## Configuration methods {#methods}

You can configure CodeRabbit in several ways, from global organization settings
down to configuration directives for specific repositories:

- Configure the default behavior of CodeRabbit
  across your whole organization, using the CodeRabbit web UI.
- Configure the behavior of CodeRabbit when reviewing pull requests in a specific repository. You can do this in two ways:
  - Use the CodeRabbitweb UI.
  - Add a `coderabbit.yaml` file to the top level of your repository.

To determine its behavior with a specific repository, CodeRabbit applies the configuration methods in the following order of precedence, from highest to lowest:

1. The [repository's `coderabbit.yaml` file](/getting-started/configure-coderabbit), if it has one.
1. The [repository's settings](/guides/repository-settings) as they appear in the CodeRabbit web UI.
1. The [organization's settings](/guides/organization-settings) as they appear in the CodeRabbit web UI.

If you are new to CodeRabbit, then we encourage you to explore the settings available through the CodeRabbit web UI
to become familiar with the options available to you, and their default values.

## Initial configuration {#initial}

The [Initial configuration guide](/guides/initial-configuration) tours you through several settings that we
recommend that you review after you set up CodeRabbit with your organization.

## What's next {#whats-next}

- [Set your organization preferences](/guides/organization-settings)
- [Set your repository preferences](/guides/repository-settings)
- [Add a configuration file](/getting-started/configure-coderabbit)
- [Initial configuration guide](/guides/initial-configuration)
