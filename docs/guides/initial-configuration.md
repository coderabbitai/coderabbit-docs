---
title: Initial configuration guide
description: A tour through some initial configuration setup.
---

This page provides a tour through a selection of key CodeRabbit configuration options.

For a general overview of how configuration in CodeRabbit works, see [Configure CodeRabbit](/guides/configuration-overview). For an exhaustive reference of all configuration options, see [Configuration reference](/reference/configuration).

## How to use this guide {#use}

This guide walks you through several CodeRabbit configuration options that you
can set in order to tune CodeRabbit code review behavior for your repositories.

The default behavior and settings of CodeRabbit
works for most repositories, in most situations. However, becoming familiar with
the key settings described by this page can help you tune the behavior of
CodeRabbit for the specific needs of your team. You can use this guide when initially setting up your organization and repositories with CodeRabbit, or you can return to it after using CodeRabbit
for a while, when you feel ready to customize its behavior.

Each section in the guide links to specific entries in the configuration reference. Each entry in the linked reference specifies the location of its configuration setting, in either the CodeRabbit web UI or your `.coderabbit.yaml` file.

## Data retention and knowledge base settings {#data-retention}

These settings help you control how much data about your code that CodeRabbit retains.
CodeRabbit temporarily stores information about your repositories in order to tailored reviews more quickly and better tailored to your team's needs. You can opt of these features if your organization has stricter data-retention policies.

For more information about CodeRabbit data-retention policies, see
[Data privacy and security](/#data-privacy-and-security).

### Enable or disable data retention globally {#data-retention-setting}

:::note
This setting is available only at the organization level, and not per-repository.
:::

Your CodeRabbit organization has a data-retention setting which acts as a master-switch to all CodeRabbit features that require it to store its own data about your repositories. If you disable data retention, then none of your repositories can use knowledge base or caching features, even if you configure those repositories to enable them.

We recommend leaving this on. However, if your use of CodeRabbit requires strict data retention policy, then you can turn this off.

For more information, see
[Data retention](/reference/configuration#data-retention) in the configuration reference.

### Configure cache use {#cache}

By default, CodeRabbit keeps a temporary cache of data about your repository in order to make subsequent code reviews faster. If this conflicts with your organization's data-retention policies, then you can disable this feature.

For more information, see
[Disable cache](/reference/configuration#disable-cache) in the configuration reference.

### Configure knowledge base retention {#opt-out}

By default, CodeRabbit keeps its own [_knowledge base_](/integrations/knowledge-base): a store of metadata about your repositories, your team's history of pull requests, linked issues, and learnings about how CodeRabbit should tailor its own review behavior to best serve your team. If this long-term knowledge base storage conflicts with your organization's data-retention policies, then you can disable this feature.

For more information, see
[Opt out](/reference/configuration#opt-out) in the configuration reference.

### Configure learnings {#learnings}

CodeRabbit learns your team's review preferences by letting you [teach it your preferences in plain language during code reviews](/integrations/knowledge-base#learnings). CodeRabbit remembers these preferences, and applies them to subsequent code reviews in the same repository.

This setting lets you set the scope of which stored learnings that CodeRabbit should apply to its code reviews. For more information, see [Learnings](/reference/configuration#learnings) in the configuration reference.

## Tune the length of code reviews {#content}

By default, CodeRabbit writes thorough code reviews with several sub-sections. If you'd rather have CodeRabbit generated shorter reviews then you can change some of the following settings:

- [Collapse walkthrough](/reference/configuration#collapse-walkthrough): wraps the detailed summary of proposed changes in collapsed-but-expandable container. (Off by default.)
- [Changed files summary](/reference/configuration#changed-files-summary): lists of files affected by this pull request.
- [Sequence diagrams](/reference/configuration#sequence-diagrams): includes a visual diagram of object interactions.
- [Assess linked issues](/reference/configuration#assess-linked-issues): assesses how well the pull request addresses any linked issues.
- [Related issues](/reference/configuration#related-issues): lists issues found in your issue tracker that might be related to this pull request.
- [Related pull requests](/reference/configuration#realted-prs): lists pull requests that might be related to this pull request.
- [Suggested labels](/reference/configuration#suggested-labels): Suggests labels for this pull request.
- [Suggested reviewers](/reference/configuration#suggested-reveiwers): automatically suggest reviewers for PR
- [Poem](/reference/configuration#poem): generates a short poem about this pull request.

## Adjust path-specific CodeRabbit behavior {#path}

You can give CodeRabbit additional instructions for reviewing specific files or
locations in your repository, or configure CodeRabbit to disregard certain file paths
during code reviews.

For an overview about using path-based instructions in CodeRabbit, see [Path-based instructions](/guides/review-instructions#path-based).

### Add path filters {#filters}

If your repository contains files or locations that CodeRabbit should disregard when preparing code reviews—or you want CodeRabbit to limit its consideration to only certain files—then you can define one or more _path filters_. Adding path filters to a large repository containing a lot of data, generated files, or other non-code content can let CodeRabbit work faster.

For example, the following `.coderabbit.yaml` excerpt instructs CodeRabbit to take review context only the contents of directories named `src/` in your repository, while disregarding any individual files with `.bin` or `.csv` extensions.

```yaml
path_filters:
  - "!**/*.bin"
  - "!**/*.csv"
  - "**/src/**"
```

For more information, see [Path filters](/reference/configuration#path-filters) in the CodeRabbit configuration reference.

### Add general path instructions {#review-path}

You can set _path instructions_ that provide CodeRabbit with additional review instructions for various files or locations in your repository. Each path instruction specifies a path specification and a set of instructions, the latter of which you express using natural language.

For example, to give CodeRabbit review instructions specific to JavaScript and TypeScript files, you can add a section like this to your repository's `.coderabbit.yaml` file:

```yaml
path_instructions:
  - path: `src/**/*.{ts,tsx,js}`
    instructions: "Review the React.js, TypeScript, JavaScript code for best practices. Check for common security vulnerabilities, such as SQL injection, insecure dependencies, and sensitive data exposure."
```

For more information, see [Path instructions](/reference/configuration#path-instructions) in the configuration reference.

### Add documentation or unit-test path instructions {#doc-path}

Similar to the general path instructions described by the previous section, you
can define path-based instructions that direct CodeRabbit to generate inline
documentation or unit tests, with specific instructions associated with different
locations or filenames.

For more information, see [Docstrings](/reference/configuration#docstrings) and [Unit tests](/reference/configuration#unit-tests) in the configuration reference.

## Set Automatic review behavior {#auto}

By default, CodeRabbit automatically generates incremental code reviews for every new or updated pull request made against a repository's default branch. These settings listed in this section let you tune the behavior.

### Configure incremental reviews {#incremental}

By default, CodeRabbit generates a new automated review comment every time the branch of an existing pull request gets an additional commit pushed to it.

If you want to limit CodeRabbit to posting only an initial automated review for a new pull request, with no automated response to further updates, then you can turn off this incremental-review behavior. If you do turn it off, then you can still [manually request reviews](/guides/commands#request).

For more information, see [Automatic incremental review](/reference/configuration#automatic-incremental-review) in the configuration reference.

### Restrict automatic reviews to certain labels {#labels}

If you want to be choosier about which pull requests CodeRabbit should automatically review, then you can restrict it to review only pull requests that you mark with certain labels.

For more information, see [Labels](/reference/configuration#labels) in the configuration reference.

### Automatically review more branches {#branches}

If you want CodeRabbit to extend its automatic-review attention beyond the default branch of your repository—that is, `main` or `master`, usually—then you can give CodeRabbit a list of other branches that it is allowed to review.

For more information, see [Base branches](/reference/configuration#base-branches) in the configuration reference.

## Configure tools {#tools}

CodeRabbit has access to dozens of industry-standard open-source tools to help it perform its code reviews. These tools include a variety of linters, security analyzers, and other utilities. For a full list, see [List of supported tools](/tools/list). CodeRabbit chooses which tools to apply to a given code review on a case-by-case basis.

By default, CodeRabbit considers every tool available to it during code reviews. If you want CodeRabbit to disregard certain tools, then you can disable them.

Several tools that CodeRabbit uses also allow you to specify a path to a tool-specific configuration file in your repository. For example, the following `.coderabbit.yaml` excerpt directs CodeRabbit to use configuration files in the repository's `/pmd-config` directory when using the `pmd` tool:

```yaml
reviews:
  tools:
    pmd:
      enabled: true
      config_file: /pmd-config/*.yml
```

For more information, see [Tools](/reference/configuration#tools) in the configuration reference.

## Other code review settings {#other}

### Adjust code-review strictness {#profile}

If you want CodeRabbit to apply a much stricter and more nitpicky stance to its code reviews, then you can switch its _profile_ setting from `chill` to `assertive`.

CodeRabbit is aware of nitpickier output from the linters and other tools that it applies to code reviews, but includes less of it in its own review comments when the profile is set to `chill`. To have CodeRabbit include more nitpicky tool output in reviews, use the `assertive` profile.

For more information, see [Profile](/reference/configuration#profile) in the configuration reference.

### Configure pull request approval {#request-changes}

By default, CodeRabbit doesn't mark pull requests as approved after any code review, even if CodeRabbit doesn't have any further significant changes to suggest. This leaves the job of formal pull request approval entirely up to human reviewers.

If you want to allow CodeRabbit to mark pull requests as approved, then you can enable the _request changes workflow_ setting. If you do, then CodeRabbit can approve pull requests after it reviewed a pull request and had all of its comments resolved.

This can be useful if you have a workflow that requires several reviewers to approve a pull request before anyone can merge it. For example, if you have configured your repository on your Git platform to require two approvals for any pull request, then activating this CodeRabbit setting lets you merge a pull request after approval from CodeRabbit plus one human reviewer. This can help reduce your team's code-review load.

:::note
We recommend a policy of always requiring the approval of at least one human reviewer, even if you allow CodeRabbit to approve pull requests. As with an generative AI technology, CodeRabbit works best as a helpful partner to your team, and not as a replacement for human expertise or judgment.
:::

For more information, see [Request Changes Workflow](/reference/configuration#request-changes-workflow) in the configuration reference.

### Configure chat-based issue creation {#chat-issues}

You can [ask CodeRabbit to create issues for you](https://docs.coderabbit.ai/guides/issue-creation) in the comments of a pull request that it's reviewing.

If you have integrated CodeRabbit with Jira or Linear, then you can tune this behavior a little more, restricting this feature to private repositories—the default setting—or disabling it entirely.

For more information, see [Integrations](/reference/configuration#integrations) in the configuration reference.

## What's next {#whats-next}

- [Setup and configuration best practices](/guides/setup-best-practices)
