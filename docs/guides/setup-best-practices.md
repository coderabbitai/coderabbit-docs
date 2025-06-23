---
title: "Setup and configuration best practices"
description: Best practices for seting up CodeRabbit.
sidebar_label: Setup and configuration
---

This page contains our best-practice advice for setting up CodeRabbit, and then
configuring its code review behavior.

## Setup best practices {#setup}

This section lists our recommendations for setting up CodeRabbit with your
Git platform, and integrating CodeRabbit with other tools and services.

### Give CodeRabbit its own user account {#user}

CodeRabbit works best when it has a user account all to itself on your Git platform.
Your team treats this account as a bot or service account—even on platforms that don't
have a formal concept of separate service accounts, such as Bitbucket Cloud.

If you use GitHub, then CodeRabbit sets up a service account named `CodeRabbitAI` for you as soon as you connect your GitHub organization to CodeRabbit. On other platforms, such as Bitbucket Cloud or Gitlab, you must set this account up yourself.

For platform-specific instructions about setting up this user, see
[Integrate with Git platforms](/platforms/).

### Let CodeRabbit read your issue tracker {#issues}

CodeRabbit can report on whether the changes proposed by a pull request
successfully address specific, ticketed issues referenced by that pull request.

For this to work, CodeRabbit needs read access to your team's issue management system.

If you use the built-in issue management of either GitHub or GitLab, then
CodeRabbit issue integration works without any further setup.

If you use issue management systems external from your Git platform, then you need to
take additional steps to integrate CodeRabbit with your team's issues.

These are the external issue management systems that CodeRabbit supports:

- Jira
- Linear

For more information, see [Integrate issue tracking](/integrations/issue-integrations/).

### Set up basic reports for your team {#reports}

CodeRabbit has a flexible reporting feature that can help keep your whole team
up-to-date about the latest changes to your repositories. We recommend setting
up at least the following scheduled reports, using templates available
through the CodeRabbit web interface:

- A daily standup report, grouped by contributor.
- Regular release notes, grouped by repository.

For more information, see [Generate reports](/guides/reports-overview).

## Configuration best practices {#configuration}

This section lists our recommendations for configuring the way that CodeRabbit
works with your individual repositories.

### Fine-tune reviews using YAML files {#yaml}

CodeRabbit gives you two ways to configure how it works with your team's repositories:

- The **Organization Settings** and **Repositories** pages of [the
  CodeRabbit web interface](https://app.coderabbit.ai/login)
- A [`.coderabbit.yaml` file](/getting-started/configure-coderabbit/) in your repository

The web interface lets you set up your organization's code review
preferences rapidly, and can help you get familiar with CodeRabbit configuration options.

We recommend adding a `.coderabbit.yaml` file to repositories, as well. Using this file has several advantages over using only the web interface:

- It applies version control to your repository's CodeRabbit settings, letting you track changes, view configuration history, and revert to previous configurations as needed.
- During code reviews, CodeRabbit loads the file along with rest of your repository. This means that you can include setting changes as part of a pull request, and CodeRabbit both analyzes and applies these settings during its review.
- The file makes the repository's CodeRabbit settings transparent to all of the repository's contributors.

Repository-level settings defined by a `.coderabbit.yaml` take precedence over the
settings defined for that repository or for your organization using the CodeRabbit web interface.

For more information, see [Add a configuration file](/getting-started/configure-coderabbit/).

### Speed up reviews by adding path filters {#filters}

If your repository contains a lot of data or other content that CodeRabbit
doesn't need for code review context, then you can include _path filters_ in
your repository configuration. For example, a filter of `!dist/**` tells CodeRabbit
to disregard everything in your repository's top-level `dist` directory when
preparing a code review.

Reducing the number of contextual files that CodeRabbit needs to read and analyze
when preparing a code review can help make its code reviews faster.

You can define path filters using the CodeRabbit
web interface, or with [a `.coderabbit.yaml` file](/getting-started/configure-coderabbit/).

### Trust the defaults {#defaults}

CodeRabbit gives you control over a number of its core code-review features, letting you deactivate them entirely for your repositories if needed. We have chosen the default settings to meet the needs of most organizations and situations, and recommend leaving these settings at their default values if possible:

- **Cache**: Keep [the cache](/reference/caching) enabled to let CodeRabbit temporarily remember details about your repository
  between reviews, which improves review speed.
- **Tools**: By default, CodeRabbit is allowed to use all of the [open-source linters and analyzer
  tools](/tools) that are available to it during code reviews. This helps CodeRabbit keep its reviews broad and flexible.
- **Knowledge base**: CodeRabbit [knowledge base](/integrations/knowledge-base/) features, including learnings and issue tracking, can require data retention. If your organization needs to meet stricter data-retention policies, then you can opt out of using these features.

You can configure your use of the above features using the CodeRabbit web interface, or [a `.coderabbit.yaml` file](/getting-started/configure-coderabbit/).

### Write specific CI/CD error messages {#pipeline}

CodeRabbit can analyze the logs of continuous integration (CI) or continuous
deployment (CD) tools in your pipeline. CodeRabbit can provide better remediation
advice about CI/CD failures during code reviews if your tools' error messages
are as specific as possible when reporting failures.

For CodeRabbit to provide the best advice, configure your CI/CD failure output to include the following information:

- File names associated with the failure.
- Line numbers that identify where the failure occurred in those files.
- An explanation of the failure, including relevant error codes or diffs.

[This pull request](https://github.com/ff14-advanced-market-search/temp-fe/pull/47/files) shows an example of expanding the context of a CI error,
in this case including a diff to show why a code-formatter check failed.

---

## What's next {#whats-next}

- [Code review best practices](/guides/code-review-best-practices)
