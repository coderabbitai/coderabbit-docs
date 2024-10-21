---
title: Changelog
sidebar_label: Changelog
description: The latest updates and changes to CodeRabbit.
sidebar_position: 9
---

## Sep 9, 2024 - Related PRs and Label suggestions

- Possibly related PRs: The walkthrough comment now includes a list of potentially related PRs to help you recall the past context.
- Suggested labels: CodeRabbit can now suggest labels by learning from your past PRs in the walkthrough comment. You can also provide custom labeling instructions in the UI or configuration file.

:::note
Possibly related PRs, automatic label suggestions based on past PRs, learnings, and possibly related issues require data opt-in (enabled by default).
:::

## Aug 15, 2024 - New Dashboard

We’re excited to share our updated dashboard, designed to give you better insights into CodeRabbit review metrics.

What's new:

- Flexible Time Selector: Choose different periods to analyze your data.
- Useful Context: See how learnings, tools, and path instructions are used in reviews.
- New Visuals: Check out the bar, line, and stats charts for a better understanding.
- Custom Filters: Easily filter data by user, repository, pull request, and review profile.
- Tools Overview: See tool usage based on severity and total incidents reported.

These updates are here to help you get more from the dashboard. Take a look today!

## Jul 31, 2024 - Promote members to admin

You can now promote members in your organization to admins within CodeRabbit. Admins will be able to manage the subscription and the seats for that organization

## Jul 16, 2024 - New Features and Improvements

#### Learnings Page

We're thrilled to announce the new "Learnings" page! Users can now interact with learnings captured in PR comments, enhancing future reviews. Log into CodeRabbit to see the page, where you can filter learnings by Repository, File Path, and User. You can also edit or delete learnings that are no longer relevant to your project.

#### Reports (Beta) Page

Introducing the beta release of "Reports"! Generate recurring summaries of team performance and PR reviews with features like:

- Scheduling regular report generation
- Specifying parameters such as repository, team, user, or label
- Selecting report types (Daily Stand-Up, Sprint Report, Release Notes, Custom)
- Enabling delivery channels like Email, Slack, and Discord

#### Sequence Diagrams Configuration

You can now choose whether to auto-generate sequence diagrams in PR Walkthroughs. Configure this via the CodeRabbit settings page or by setting reviews.sequence_diagrams in the .coderabbit.yaml file.

#### Enhanced Tool Settings & New Analysis Tools

We've refined the default settings to be less noisy and more actionable. Additionally, we've added new static analysis and security tools:

- Yamllint A linter for YAML files
- Gitleaks A lightweight, open-source secret scanner to prevent security breaches
- Checkov Scans infrastructure as code for misconfigurations before they become security issues

#### GitLab Integration Update

The GitLab integration now offers more flexibility and security. Users can use Personal Access Tokens (PATs) from within their organization to post reviews. This enhancement ensures reviews are posted with appropriate organizational context and permissions, improving traceability and security.

## May 28, 2024 - New Features and Improvements

Sequence Diagrams
CodeRabbit now generates sequence diagrams of code changes, enhancing reviewers' ability to understand the flow of control.
Auto-Generate PR Titles
Users will now find a new option called auto_title_placeholder and will default to `@coderabbitai` title. This option allows users to put a placeholder title and have CodeRabbit auto-generate one for them when the review process kicks in.
New Commands
We have introduced new commands for interacting with CodeRabbit, detailed under the "Tips" section of a review walkthrough:

- `@coderabbitai full review`: Conducts a full review from scratch, covering all files again.
- `@coderabbitai summary`: Regenerates the summary of the PR.
- `@coderabbitai configuration`: Displays the current CodeRabbit configuration for the repository.
Improved Handling of Closed PRs
We have been observing that many PRs get closed quickly and CodeRabbit continues to review them. PRs get closed quickly for various reasons - changes are too small, the author is confident (perhaps, overly?), or the changes were unnecessary. With this improvement, we now stop the review process midway if we detect that the PR has been closed.

## May 23, 2024 - New Features and Improvements

Review Settings Introduced new personality profiles for code reviews
Users can now select between "Chill" and "Assertive" review tones to tailor feedback styles according to their preferences. The "Assertive" profile posts more comments and nitpicks the code more aggressively, while the "Chill" profile is more relaxed and posts fewer comments.
More Static Analysis Support
We are continually expanding our support for static analysis tools. We have added support for biome, hadolint, and ast-grep. Update the settings in your .coderabbit.yaml file or head over to the settings page to enable or disable the tools you want to use.
Tone Settings
Users can now customize CodeRabbit to review code in the style of their favorite characters or personalities. Here are some of our favorite examples:

- Mr. T: "You must talk like Mr. T in all your code reviews. I pity the fool who doesn't!"
- Pirate: "Arr, matey! Ye must talk like a pirate in all yer code reviews. Yarrr!"
- Snarky Ex-Girlfriend: "You must talk like a snarky ex-girlfriend in all your code reviews. You're welcome."
Revamped Settings Page
We have redesigned the settings page for a more intuitive layout, enabling users to find and adjust settings quickly. This change was long-time coming; it not only improves the user experience but also allows our development team to add more settings in the future with ease. Going forward, the changes to .coderabbit.yaml will be reflected in the settings page, and vice versa.

## Apr 18, 2024 - CodeRabbit now runs Static Analyzers and Linters as part of the pull request review

CodeRabbit now runs static analyzers, linters and provides one-click fixes for the issues identified. AI helps reduce the false positives and focus on the critical findings. CodeRabbit will respect the existing configuration files of these tools if they already exist in the project. For example, if your project already uses ruff and has a ruff.toml file at the root of the project, that will be used. In cases where project configurations are not found, CodeRabbit defaults will be used. Currently, CodeRabbit runs markdownlint, shellcheck, ruff, and languagetool. We will continue to add more tools. The default configuration can be changed through the .coderabbit.yaml file.
Are there any specific tools you'd like us to add? Let us know. We'd love to hear your suggestions!

## Apr 1, 2024 - CodeRabbit is GDPR compliant

Excited to announce that CodeRabbit is now GDPR compliant in accordance with EU regulations!

## Mar 12, 2024 - CodeRabbit now offers fixes for GitHub Check failures on pull requests

CodeRabbit now offers fixes for GitHub Check failures on pull requests. With this change, Check Runs on GitHub that add Annotations to Pull Requests will be used. For example, popular GitHub Actions published by reviewdog (action-golangci-lint, action-staticcheck, action-eslint) and super-linter among many others have the ability to report issues on Pull Requests as annotations. Checks that output logs will be supported shortly. CodeRabbit GitHub App requires permission to read Checks for this feature to work. To enable this, please grant the necessary permissions by visiting the CodeRabbit GitHub app settings under [installation](https://github.com/settings/installations). Support for GitLab will follow.

## Mar 11, 2024 - CodeRabbit is now SOC 2 Type II compliant

Excited to announce that CodeRabbit is now GDPR compliant in accordance with EU regulations!

## Mar 2, 2024 - Enhanced review of the markdown changes

CodeRabbit now offers a more comprehensive review of the markdown changes. In addition to the AI suggestions, we do a thorough check for spelling, grammar, word choice, language style, as well as improvements in paraphrasing and punctuation.

## Jan 17, 2024 - Integration with self-hosted GitLab is now available

CodeRabbit now offers integration for self-hosted GitLab. Refer to the [setup instructions](https://docs.coderabbit.ai/integrations/self-hosted-gitlab).

## Jan 2, 2024 - Deep Insights feature is out of beta

Working as recursive autonomous agent, CodeRabbit uses shell scripts to perform complex operations on the entire codebase, verifying changes and providing deeper insights.
Here are some uses cases :

- Want to defer implementing the CodeRabbit suggestion to a later time? Ask the bot the create an issue.
- Generate unit tests - comment `@coderabbitai generate unit tests` for the src/utils.ts
- In PR comments, ask the bot to gather insights on your repository including latest commits, frequently changed files, recent contributors etc
- When the CodeRabbit review comment is addressed, let the bot know and it can validate with the latest commit.
Really excited to see how this feature gets used, especially with access to the CLI commands. There are some suggestions in the pull request tips but we are looking forward to seeing additional use cases of how developers use this feature. Please consider sharing your experiences.

## Dec 18, 2023 - Request Changes Workflow

Enable Request Changes review workflow for CodeRabbit reviews via .coderabbit.yaml Yaml field request_changes_workflow (default: false). When enabled, review comments are posted as request changes and CodeRabbit review will be marked approved once all the review comments are resolved.

## Dec 5, 2023 - Learnings

CodeRabbit can now learn from your conversations to fine-tune your reviews. If you encounter inaccurate feedback or something not relevant to your codebase, just let the bot know, and it will remember the context for the future. We understand that coding practices and standards evolve over time. Using the chat, you can inform the bot, and it will remove any existing learnings that are no longer relevant. This feature does not work, if you have opted out of data storage.

## Dec 5, 2023 - Codebase Verification

Verifies the reference of the changes on the overall codebase and identifies missing changes.

## Dec 5, 2023 - Jira and Linear Integrations

You can now integrate Jira and Linear into CodeRabbit. This would be used for additional context while reviewing pull requests. If you use any of these systems, we recommend you integrate CodeRabbit. We will be adding more integrations over time.

## Dec 5, 2023 - Related Issues

Identifies all issues affected by the code changes. This helps understand the impact on the overall product. It also assists in identifying duplicate issues or the impact on any other existing issues. This feature does not work, if you have opted out of data.

## Nov 5, 2023 - Issue Validation

CodeRabbit review can now assess the pull request changes against the linked GitHub or GitLab issue. Integration with other workflow systems including Jira and Linear is under development.

## Nov 1, 2023 - Committable suggestions

Review comments can now post committable suggestions that can be committed within the pull request with a single click.

## Oct 28, 2023 - Resolve Command

Use `@coderabbitai resolve` to mark all the CodeRabbit review comments as resolved all at once.

## Oct 23, 2023 - CodeRabbit Commands

Introducing additional CodeRabbit commands for managing code reviews.

- Pause Reviews: Use `@coderabbitai pause` in a PR comment to halt ongoing reviews.
- Resume Reviews: Enter `@coderabbitai resume` in a PR comment to continue paused reviews.
- On-Demand Reviews: Disable automatic reviews for your repository to switch to on-demand reviews. Use `@coderabbitai review` in a PR comment. This command will override all review filters that might be set up in the repository settings and will initiate a one-time review.
- Help Command: You can at any time post `@coderabbitai help` in a PR comment to get the list of all valid commands.

## Oct 12, 2023 - Customization CodeRabbit with YML File

CodeRabbit customizations made easy! You can now customize CodeRabbit using a YML file from your repository. To learn more, refer to our comprehensive documentation on customizing CodeRabbit.

## Sep 21, 2023 - Path-Based Review Instructions in CodeRabbit

#### Path based instructions

This section explains how to add custom code review instructions for the entire project or specific file paths in your project using glob patterns. Developers can provide tailored review guidelines based on the file paths. These instructions are needed only if you want the reviewer to follow specific instructions besides the standard review.

Adding file path prompts allows developers to specify custom instructions for different parts of the codebase. For example, you may want to enforce style guide by file types or directories.

Sample Usage

```
path: **/*.js
instructions: Review the javascript code against the google javascript style guide and point out any mismatches
```

```
path: tests/**.*
instructions: Review the following unit test code written using the Mocha test library. Ensure that: The code adheres to best practices associated with Mocha. Descriptive test names are used to clearly convey the intent of each test.

```

:::note

- Paths accept glob patterns.
- Instructions generally work well for specific additional instructions. However, they are not that effective if you are instructing AI not to do something.
- Test the review feedback on pull requests and tailor as necessary.

:::

## Sep 19, 2023 - Introducing CodeRabbit for GitLab Integration

CodeRabbit is now available for GitLab! We know many of you have been waiting for this integration. Thank you for your patience. Sign up for the free trial!
