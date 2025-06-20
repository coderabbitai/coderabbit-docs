---
title: Initial configuration guide
description: A tour through some initial configuration setup.
---

This page provides a tour through a selection of key CodeRabbit configuration options.

For a general overview of how configuration in CodeRabbit works, see [Configure CodeRabbit](/guides/configuration-overview). For an exhaustive reference of all conifguration options, see [Configuration reference](/reference/configuration).

## How to use this guide {#use}

This guide walks you through several CodeRabbit configuration options that you
can set in order to tune CodeRabbit code review behavior for your repositories.

Tthe default behavior and settings of CodeRabbit
works for most repositories, in most situations. However, becoming familiar with
the key settings described by this page can help you tune the behavior of
CodeRabbit for the specific needs of your team. You can use this guide when initially setting up your organization and repositories with CodeRabbit, or you can return to it after using CodeRabbit
for a while, when you feel ready to customize its behavior.

Each section in the guide links to specific entries in the configuration reference. These entries specify where in either the CodeRabbit web UI or your `coderabbit.yaml` file to make the change.

If you are new to CodeRabbit, then the web UI is the easiest way to explore the available settings. Once you are more comfortable with the repository-level changes you want to make, [we recommend adding `coderabbit.yaml` files to those repositories](/guides/setup-best-practices#yaml).

## General settings {#general}

These settings adjust overall CodeRabbit code review behavior.

### Adjust code-review strictness {#profile}

If you want CodeRabbit to apply a much stricter and more opinionated stance to its code reviews, then you can switch its _profile_ setting from `chill` to `assertive`.

For more information, see [Profile](/reference/configuration#profile) in the configuration reference.

### Configure pull request approval {#request-changes}

By default, CodeRabbit doesn't formally mark pull requests as approved after it informally reports approval in a code review. This leaves the job of formal pull request approval entirely up to human reviewers.

If you want to allow CodeRabbit to mark pull requests as approved, then you can enable the _request changes workflow_ setting.

For more information, see [Request Changes Workflow](/reference/configuration#request-changes-workflow) in the configuration reference.

### Configure chat-based issue creation {#chat-issues}

You can [ask CodeRabbit to create issues for you](https://docs.coderabbit.ai/guides/issue-creation) in the comments of a pull request that it's reviewing.

If you have integreated CodeRabbit with Jira or Linear, then you can tune this behavior a little more, restricting this feature to private repositories—the default setting—or disabling it entirely.

For more information, see [Integrations](/reference/configuration#integrations) in the configuration reference.

### Configure learnings {#learnings}

You can teach CodeRabbit your team's review preferences by [stating them in plain language during code reviews](/integrations/knowledge-base#learnings). CodeRabbit remembers these these prefrences, and applies them to subsequent code reveiws in the same repository.

If you don't want this feature, you can disable it. For more information, see [Learnings](/reference/configuration#learnings) in the configuration reference.

## Data retention settings {#data-retention}

These settings help you control how much data about your code that CodeRabbit retains.
CodeRabbit temporarily stores information about your repositories in order to deliver perform faster and more tailored reviews, but you can opt of these features if your organization has stricter data-retention policies.

For more information about CodeRabbit data-retention policies, see
[Data privacy and security](/#data-privacy-and-security).

### Enable or disable data retention globally {#data-retention-setting}

:::note
This setting is available only at the organization level, and not per-repository.
:::

Your CodeRabbit organization has a data-retention setting which acts as a master-switch to all CodeRabbit features that require it to store its own data about your repositries. If you disable data retention, then none of your repositories can use knowledge base or caching features, even if you configure those repositories to enable them.

We recommend leaving this on. However, if your use of CodeRabbit requires strict data retention policy, then you can turn this off.

For more information, see
[Data retention](/reference/configuration#data-retention) in the configuration reference.

### Configure cache use {#cache}

By defualt, CodeRabbit keeps a temporary cache of data about your repository in order to make subsquent code reviews faster. If this conflicts with your organization's data-retention policies, you can disable this feature.

For more information, see
[Disable cache](/reference/configuration#disable-cache) in the configuration reference.

### Configure knowledge base retention {#opt-out}

By defualt, CodeRabbit keeps a temporary cache of data about your repository in order to make subsquent code reviews faster. If this conflicts with your organization's data-retention policies, you can disable this feature.

For more information, see
[Disable cache](/reference/configuration#disable-cache) in the configuration reference.

## Tune the length of code reviews {#content}

By default, CodeRabbit writes thorough code reviews with several sub-sections. If you'd rather have CodeRabbit generated shorter reviews then you can change some of the following settings:

- [Collapse walkthrough](/reference/configuration#collapse-walkthrough): wraps the detailed summary of proposed changes in collapsed-but-expandable container. (Off by default.)
- [Changed files summary](/reference/configuration#changed-files-summary): lists of files affected by this pull request.
- [Sequence diagrams](/reference/configuration#sequence-diagrams): includes a visual diagram of object interactions.
- [Assess linked issues](/reference/configuration#assess-linked-issues): assesses how well the pull request addresses any linked issues/
- [Related issues](/reference/configuration#related-issues): lists issues found in your issue tracker that might be related to this pull request.
- [Related pull requests](/reference/configuration#realted-prs): lists pull requests that might be related to this pull request.
- [Suggested labels](/reference/configuration#suggested-labels): Suggests labels for this pull request.
- [Suggested reviewers](/reference/configuration#suggested-reveiwers): automatically suggest reviewers for PR
- [Poem](/reference/configuration#poem): generates a short poem about this pull request.

## Adjust path-specific CodeRabbit behavior {#path}

These settings direct CodeRabbit to treat various files and and locations in
your repository differently.

### Add path filters {#filters}

If your repository contains files or locations that CodeRabbit should disregard when preparing code reviews—or you want CodeRabbit to limit its consideration to only certain files—then you can define one or more _path filters_. Adding path filters to a large repository containing a lot of data, generated files, or other non-code content can let CodeRabbit work faster.

For more information, see [Path filters](/reference/configuration#path-filters) in the CodeRabbit configuration reference.

### Add general path instructions {#review-path}

By default, CodeRabbit applies the same review instructions and contexts to all of the pull requests that it generates, regardless of the files involved. If you want to apply additional review instructions to certain files or loations in your repository, then you can provide CodeRabbit with _path instructions_.

Each path instruction specifies a path specification and a set of instructions, the latter of which you express using natural language. For example, you can add a section like this to your repository's `coderabbit.yaml` file:

```yaml
path_instructions:
    - path: `src/**/*.{ts,tsx,js}`
    instructions:
    - Review the React.js, TypeScript, JavaScript code for best practices
        - Check for common security vulnerabilities such as:
        - SQL Injection
        - Insecure dependencies
        - Sensitive data exposure
```

For more information, see [Path instructions](/reference/configuration#path-instructions) in the configuration reference.

### Add documentation or unit-test path instructions {#doc-path}

Similar to the general path instructions described by the previous section, you
can define path-based instructions that

## Set Automatic review behavior {#auto}

By default, CodeRabbit automatically generates incremental code reviews for every new or updated pull request made against a repository's default branch. These settings listed in this section let you tune the behavior.

### Configure incremental reviews {#incremental}

By default, the automatic code reviews that CodeRabbit generates are _incremental_,
building on any previous reviews within the same pull request that CodeRabbit has already added.

We recommend leaving this feature enabled, for faster reviews that are easier to read. But, if you'd rather always see full code reviews by default, you can disable this feature.

For more information, see [Automatic incremental review](/reference/configuration#automatic-incremental-review) in the configuration reference.

### Restrict automatic reviews to certain labels {#labels}

If you want to be choosier about which pull requests CodeRabbit should automatically review, then you can restrict it to review only pull requests that you mark with certain labels.

For more information, see [Labels](/reference/configuration#labels) in the configuration reference.

### Automatically review more branches {#branches}

If you want CodeRabbit to extend its automatic-review attention beyond the default branch of your repository—that is, `main` or `master`, usually—then you can give CodeRabbit a list of other branches that it is allowed to review.

For more information, see [Branches](/reference/configuration#brancehs) in the configuration reference.

## Configure tools {#tools}

CodeRabbit has access to dozens of industry-standard open-source tools to help it perform its code reviews. These tools include a varity of linters, security analyzers, and other utilities. For a full list, see [List of supported tools](/tools/list). CodeRabbit chooses which tools to apply to a given code review on a case-by-case basis.

By default, CodeRabbit considers every tool available to it during code reviews. If you want CodeRabbit to disregard certain tools, then you can disable them.

Several tools that CodeRabbit uses also allow you to specify a path to a tool-specific configuration file in your repository.

For more information, see [Tools](/reference/configuration#tools) in the configuration reference.

## What's next {#whats-next}

- [Setup and configuration best practices](/guides/setup-best-practices)
