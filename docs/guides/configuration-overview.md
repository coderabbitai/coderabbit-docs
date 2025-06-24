---
title: Configure CodeRabbit
description: Learn the basics of configuring CodeRabbit for your organization.
sidebar_label: Overview
---

After you finish [integrating CodeRabbit with your Git platform](/platforms/),
you can configure CodeRabbit to best fit the needs of your Git platform's organization and repositories.

## About CodeRabbit configuration

CodeRabbit has [a lot of configuration options](/reference/configuration), with default settings that are designed to meet most needs. CodeRabbit is designed to work "out
of the box": if you don't change any of the
configuration settings away from the defaults, then CodeRabbit starts automatically
adding code reviews to new pull requests in your repositories.

However, understanding how to configure CodeRabbit lets you tune its behavior
to the particulars of your team's code. A few advantages of manually configuring
CodeRabbit include the following:

- Adjust the level of detail in CodeRabbit code reviews.
- Customize review instructions to meet your specific coding standards.
- Take advantage of agentic workflows that can speed up your review cycles.

## Configuration methods {#methods}

You can configure CodeRabbit in several ways, from global organization settings
down to configuration directives for specific repositories.

### Organization settings {#org}

If you want to apply the same CodeRabbit configuration to all of your organization's repositories, then
you can manage organizational settings using the CodeRabbit web UI.

For more information, see [Set your organization preferences](/guides/organization-settings).

### Repository settings {#repo}

If you want to apply separate CodeRabbit configuration to your organization's different repositories, then you can
manage repository-specific CodeRabbit settings in two ways:

- Add a `.coderabbit.yaml` file to the top level of your repository.
- Use the CodeRabbit web interface.

For more information, see [Set your repository preferences](/guides/repository-settings).

While the web interface provides and easier way to explore the available configuration options for your repository, we recommend using a `.coderabbit.yaml` file [as a best practice](/guides/setup-best-practices#yaml).

## Initial configuration {#initial}

The [Initial configuration guide](/guides/initial-configuration) tours you through several settings that we
recommend that you review after you set up CodeRabbit with your organization.
