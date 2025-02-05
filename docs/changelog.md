---
title: Changelog
sidebar_label: Changelog
description: The latest updates and changes to CodeRabbit.
sidebar_position: 13
---

## February 4, 2025

### Bitbucket Cloud Support & CircleCI Pipeline Failure Detection

We're excited to announce two major updates:

#### Bitbucket Cloud Integration

CodeRabbit is now available for Bitbucket Cloud users! This integration includes:

- Automated code reviews for pull requests
- Inline review comments and suggestions
- Real-time bot interaction for feedback and assistance

Check out our [Bitbucket Cloud integration guide](https://docs.coderabbit.ai/platforms/bitbucket-cloud) to get started.

#### [CircleCI](https://circleci.com/) Pipeline Failure Detection and Remediation

We've expanded our pipeline error detection to [CircleCI](https://circleci.com/)! Just like with GitHub Actions and GitLab CI/CD, you can now automatically detect and fix pipeline failures from your CircleCI workflows.

---

## January 13, 2025

### GitLab Pipeline Failure Detection and Remediation

We've expanded our pipeline error detection capabilities to GitLab Users! Just like with GitHub Actions, you can now automatically detect and fix pipeline failures in your GitLab CI/CD workflows.

---

## January 2, 2025

### GitHub Action Failure Detection and Remediation

We're excited to announce our new pipeline error detection tool. Never let a failing pipeline block your progress again!

Automatically fix build failures for GitHub Actions! This feature automatically identifies common pipeline and build failures, providing instant fixes across multiple technologies such Python, Node.js, Java, Terraform, Docker, Kubernetes and more!

Key capabilities:

- Automatic detection and analysis of pipeline build failures
- One-click fix build failure suggestions for common issues
- Comprehensive support for popular frameworks and tools
- Integration with existing GitHub Checks

Future support planned for:

- Azure DevOps CI/CD
- GitLab CI/CD
- CircleCI

---

## December 23, 2024

### Streamlined Multi-Repository Installation for GitLab and Azure DevOps

We're thrilled to announce a significant enhancement to CodeRabbit that simplifies your workflow! You can now install CodeRabbit on multiple repositories simultaneously for GitLab and Azure DevOps, eliminating the need to activate each repository individually.

With this update, you can:

- ✅ Select Multiple Repositories: Check the boxes next to the repositories you wish to activate.
- 🖱️ One-Click Installation: Select the **Install Repositories** button on the top right to integrate CodeRabbit across all selected projects instantly.

---

## December 12, 2024

### Docstrings(Beta)

We have launched a new functionality as part of our finishing touches initiative to allow developers to generate docstrings on a pull request. This feature lets you generate docstrings by commenting `@coderabbitai generate docstrings` on any pull request. This works for both new and existing documentation. See [our documentation](https://docs.coderabbit.ai/finishing-touches/docstrings) for details.

---

## November 25, 2024

### Code Review Performance Enhancements with Improved Comment Resolution Logic

We have implemented several performance improvements that will enhance the speed of code review and are committed to making code review as efficient as possible across all your web development needs. We have also further refined the logic to reduce duplicate comments once a comment is resolved.

---

## November 20, 2024

### Support for On-premises Learning and GitLab Follow-up Issue Creation

Learnings enable developers to fine-tune the AI for their specific files, repositories, and codebase, enhancing future reviews. We're excited to extend this feature to our on-premises customers. Additionally, we've improved our automated workflow to create follow-up issues directly from Merge Request reviews in GitLab.

---

## November 8, 2024

### ESLint Support

We're excited to announce support for **ESLint**, now extending to .vue, .svelte, and .astro files, in addition to the traditional .js, .ts, and .jsx extensions. We've enhanced compatibility for monorepos, offering improved integration with Yarn and Pnpm workspaces for seamless project management.

Our solution respects your existing ESLint configurations, requiring only that all dependencies are properly defined in your package.json. Please note that private plugins are not yet supported. We're dedicated to streamlining code quality maintenance and making it as efficient as possible across your web development projects.

---

## October 31, 2024

### Learnings and Metrics Iteration for CodeRabbit Self-Hosted Customers

We've enhanced the accessibility of Learnings and Metrics for self-hosted CodeRabbit customers, delivering a more seamless experience. Easily track learning patterns and insights, with the added convenience of generating API keys directly within the interface.

**Setup:**

- Generate an API key in the CodeRabbit UI
- Enable Learnings and Metrics by either:
  - Configuring your .env file
  - Contacting CodeRabbit support for assistance

---

## October 30, 2024

### Microsoft Teams Integration & Bitbucket Support

Our integration capabilities just got a major upgrade with **Microsoft Teams** and **Bitbucket** support.

- Microsoft Teams integration is now available as part of the Reporting feature, providing a direct notification pipeline to keep your team informed and up-to-date.

- We've also launched Bitbucket Data Center support including Pull Request integration with essential review functionalities, detailed summaries, and inline comments to seamlessly apply review suggestions.

---

## October 22, 2024

### Security and SAST Remediation Improvements

- Enabling comprehensive security analysis directly from context within GitHub Checks.
- CodeRabbit now seamlessly integrates with top SAST tools that create github check annotation comments such as: Codacy, SonarCloud, Code Climate, GitHub Advanced Security, Palo Alto Prisma Cloud, and more!
- We have added a [YouTube Tutorial](https://www.youtube.com/watch?v=tfy3FdsoUtU) for a step-by-step guide on using CodeRabbit with Codacy and SonarCloud during pull requests.
- Improved the [Semgrep Documentation](https://docs.coderabbit.ai/tools/semgrep).
- CodeRabbit now automatically detects Semgrep rulesets from default `semgrep.yml` or `semgrep.config.yml` files, eliminating the need for manual configuration.

---

## September 9, 2024

### Related PRs and Label suggestions

- **Possibly Related PRs**: The walkthrough comment now provides a list of potentially related PRs, helping you quickly recall relevant context from past work.
- **Suggested labels**: CodeRabbit can now suggest labels by learning from your past PRs in the walkthrough comment. You can also provide custom labeling instructions in the UI or via configuration file.

> Note: Possibly related PRs, automatic label suggestions based on past PRs, learnings, and possibly related issues require data opt-in (enabled by default).

---

## August 15, 2024

### New Dashboard

We're excited to share our updated dashboard, designed to give you better insights into CodeRabbit review metrics.

What's new:

- Flexible Time Selector: Choose different periods to analyze your data
- Useful Context: See how learnings, tools, and path instructions are used in reviews
- New Visuals: Check out the bar, line, and stats charts for a better understanding
- Custom Filters: Easily filter data by user, repository, pull request, and review profile
- Tools Overview: See tool usage based on severity and total incidents reported

These updates are here to help you get more from the dashboard. Take a look today!

---

## July 31, 2024

### Grant Admin Privileges to Members

You can now grant admin privileges to members of your organization in CodeRabbit. Admins will have the ability to manage subscriptions and seat allocations for the organization.

---

## July 16, 2024

### New Features and Improvements

#### Learnings Page

We're thrilled to announce the new **Learnings** page! Users can now interact with learnings captured in PR comments, enhancing future reviews. Log into CodeRabbit and navigate to the Learnings tab, where you can filter learnings by Repository, File Path, and User. You can also edit or delete learnings that are no longer relevant to your project.

#### Reports (Beta) Page

Introducing the beta release of **Reports**!

Generate recurring summaries of team performance and latest PR reviews with features like:

- Scheduling regular report generation
- Specifying parameters such as repository, team, user, or label
- Selecting report styles (Daily Stand-Up, Sprint Report, Release Notes, Custom)
- Enabling your choice of delivery channel (Email, Slack, or Discord)

#### Sequence Diagrams Configuration

You can now choose whether to auto-generate sequence diagrams in the PR Walkthrough comment. Enable this via the CodeRabbit settings page or by setting reviews.sequence_diagrams in the .coderabbit.yaml file.

#### Enhanced Tool Settings & New Analysis Tools

We've refined the default settings to be less noisy and more actionable. Additionally, we've added new static analysis and security tools:

- **YAMLlint**: A linter for YAML files
- **Gitleaks**: A lightweight, open-source secret scanner to prevent security breaches
- **Checkov**: Scans infrastructure as code for misconfigurations before they become security issues

#### GitLab Integration Update

The GitLab integration now offers more flexibility and security. Users can use Personal Access Tokens (PATs) from within their organization to post reviews. This enhancement ensures reviews are posted with appropriate organizational context and permissions, improving traceability and security.

---

## May 28, 2024

### New Features and Improvements

#### Sequence Diagrams

CodeRabbit now generates sequence diagrams for code changes, providing reviewers with a clear visualization of the control flow for improved understanding.

#### Auto-Generate PR Titles

A new option, `auto_title_placeholder`, is now available and defaults to `@coderabbitai` title. This feature allows users to set a placeholder title, enabling CodeRabbit to automatically generate an appropriate title when the review process begins.

#### New Commands

We have introduced new commands for interacting with CodeRabbit, detailed under the "Tips" section of a review walkthrough:

- `@coderabbitai full review`: Conducts a full review from scratch, covering all files again
- `@coderabbitai summary`: Regenerates the summary of the PR
- `@coderabbitai configuration`: Displays the current CodeRabbit configuration for the repository

#### Improved Handling of Closed PRs

We have been observing that many PRs get closed quickly and CodeRabbit continues to review them. PRs get closed quickly for various reasons - changes are too small, the author is confident (perhaps, overly?), or the changes were unnecessary. With this improvement, we now stop the review process midway if we detect that the PR has been closed.

---

## May 23, 2024

### New Features and Improvements

#### Review Settings

Users can now select between **Chill** and **Assertive** review tones to tailor feedback styles according to their preferences. The **Assertive** profile posts more comments and nitpicks the code more aggressively, while the **Chill** profile is more relaxed and posts fewer comments.

#### More Static Analysis Support

We are continually expanding our support for static analysis tools. We've recently added support for

- Biome
- Hadolint
- ast-grep.

Update your .coderabbit.yaml file or visit the settings page to enable or disable the tools you wish to use.

#### Tone Settings

Users can now personalize CodeRabbit to review code in the style of their favorite characters or personalities. Here are a few of our top examples:

- Mr. T: "You must talk like Mr. T in all your code reviews. I pity the fool who doesn't!"
- Pirate: "Arr, matey! Ye must talk like a pirate in all yer code reviews. Yarrr!"
- Snarky Ex-Girlfriend: "You must talk like a snarky ex-girlfriend in all your code reviews. You're welcome."

#### Revamped Settings Page

We have redesigned the settings page for a more intuitive layout, enabling users to find and adjust settings quickly. This change was long-time coming; it not only improves the user experience but also allows our development team to add more settings in the future with ease. Going forward, the changes to .coderabbit.yaml will be reflected in the settings page, and vice versa.

---

## April 18, 2024

### Static Analyzers and Linters Integration

CodeRabbit now runs static analyzers, linters and provides one-click fixes for the issues identified. AI helps reduce the false positives and focus on the critical findings. CodeRabbit will respect the existing configuration files of these tools if they already exist in the project. For example, if your project already uses ruff and has a ruff.toml file at the root of the project, that will be used. In cases where project configurations are not found, CodeRabbit defaults will be used. Currently, CodeRabbit runs markdownlint, shellcheck, ruff, and languagetool. We will continue to add more tools. The default configuration can be changed through the .coderabbit.yaml file.

Are there any specific tools you'd like us to add? Let us know. We'd love to hear your suggestions!

---

## April 1, 2024

### GDPR Compliance

Excited to announce that CodeRabbit is now GDPR-compliant in accordance with EU regulations!

---

## March 12, 2024

### GitHub Check Fixes

CodeRabbit now offers fixes for GitHub Check failures on pull requests. With this change, Check Runs on GitHub that add Annotations to Pull Requests will be used. For example, popular GitHub Actions published by reviewdog (action-golangci-lint, action-staticcheck, action-eslint) and super-linter among many others can report issues on Pull Requests as annotations. Checks that output logs will be supported shortly. The CodeRabbit GitHub App requires permission to read Checks for this feature to work. To enable this, please grant the necessary permissions by visiting the CodeRabbit GitHub app settings under [installation](https://github.com/settings/installations). Support for GitLab will follow.

---

## March 11, 2024

### SOC 2 Type II Compliance

CodeRabbit is now SOC 2 Type II compliant to ensure top-tier security, availability, integrity, and privacy for our users.

---

## March 2, 2024

### Enhanced Markdown Review

CodeRabbit now offers a more comprehensive review of the markdown changes. In addition to the AI suggestions, we do a thorough check for spelling, grammar, word choice, language style, as well as improvements in paraphrasing and punctuation.

---

## January 17, 2024

### Self-hosted GitLab Integration

CodeRabbit now supports integration with Self-Hosted GitLab instances. Check out our [setup instructions](https://docs.coderabbit.ai/integrations/self-hosted-gitlab) for detailed instructions.

---

## January 2, 2024

### Deep Insights Feature Release

Working as recursive autonomous agent, CodeRabbit uses shell scripts to perform complex operations on the entire codebase, verifying changes and providing deeper insights.

Here are some uses cases:

- Want to defer implementing the CodeRabbit suggestion to a later time? Ask the bot the create an issue
- Generate unit tests - comment `@coderabbitai generate unit tests` for the src/utils.ts
- In PR comments, ask the bot to gather insights on your repository including latest commits, frequently changed files, recent contributors etc
- When the CodeRabbit review comment is addressed, let the bot know and it can validate with the latest commit

Really excited to see how this feature gets used, especially with access to the CLI commands. There are some suggestions in the pull request tips but we are looking forward to seeing additional use cases of how developers use this feature. Please consider sharing your experiences.

---

## December 18, 2023

### Request Changes Workflow

Enable Request Changes review workflow for CodeRabbit reviews via .coderabbit.yaml under the field `request_changes_workflow` (default: false). When enabled, review comments are posted as request changes and CodeRabbit review will be marked approved once all the review comments are resolved.

---

## December 5, 2023

### Multiple Features Release

#### Learnings

CodeRabbit can now learn from your conversations to fine-tune your reviews. If you encounter inaccurate feedback or something not relevant to your codebase, just let the bot know, and it will remember the context for the future. We understand that coding practices and standards evolve. Using the chat, you can inform the bot, and it will remove any existing learnings that are no longer relevant. This feature does not work if you have opted out of data storage.

#### Codebase Verification

Verifies the reference of the changes on the overall codebase and identifies missing changes.

#### Jira and Linear Integrations

You can now integrate Jira and Linear with CodeRabbit to provide additional context when reviewing pull requests. If you use either of these systems, we highly recommend enabling this integration for a more seamless experience. Stay tuned—more integrations are coming soon!

#### Related Issues

Identifies all issues affected by the code changes. This helps understand the impact on the overall product. It also assists in identifying duplicate issues or the impact on any other existing issues. This feature is unavailable for users who have opted out of data collection.

---

## November 5, 2023

### Issue Validation

CodeRabbit review can now assess the pull request changes against the linked GitHub or GitLab issue. Integration with other workflow systems including Jira and Linear is under development.

---

## November 1, 2023

### Committable Suggestions

Review comments can now post committable suggestions that can be committed within the pull request with a single click.

---

## October 28, 2023

### Resolve Command

Use `@coderabbitai resolve` to mark all the CodeRabbit review comments as resolved all at once.

---

## October 23, 2023

### CodeRabbit Commands

Introducing additional CodeRabbit commands for managing code reviews:

- Pause Reviews: Use `@coderabbitai pause` in a PR comment to halt ongoing reviews
- Resume Reviews: Enter `@coderabbitai resume` in a PR comment to continue paused reviews
- On-Demand Reviews: Disable automatic reviews for your repository to switch to on-demand reviews. Use `@coderabbitai review` in a PR comment. This command will override all review filters that might be set up in the repository settings and will initiate a one-time review
- Help Command: You can at any time post `@coderabbitai help` in a PR comment to get the list of all valid commands

---

## October 12, 2023

### YML File Customization

CodeRabbit customizations made easy! You can now customize CodeRabbit using a YML file from your repository. To learn more, refer to our comprehensive documentation on customizing CodeRabbit.

---

## September 21, 2023

### Path-Based Review Instructions

This section explains how to add custom code review instructions for the entire project or specific file paths in your project using glob patterns. Developers can provide tailored review guidelines based on the file paths. These instructions are needed only if you want the reviewer to follow specific instructions besides the standard review.

Adding file path prompts allows developers to specify custom instructions for different parts of the codebase. For example, you may want to enforce style guide by file types or directories.

Sample Usage:

```yaml
path: **/*.js
instructions: Review the javascript code against the google javascript style guide and point out any mismatches
```

```yaml
path: tests/**.*
instructions: Review the following unit test code written using the Mocha test library. Ensure that: The code adheres to best practices associated with Mocha. Descriptive test names are used to clearly convey the intent of each test.
```

> Note:
>
> - Paths accept glob patterns
> - Instructions generally work well for specific additional instructions. However, they are not that effective if you are instructing AI not to do something
> - Test the review feedback on pull requests and tailor as necessary

---

## September 19, 2023

### Introducing CodeRabbit for GitLab Integration

CodeRabbit is now available for GitLab! We know many of you have been waiting for this integration. Thank you for your patience. Sign up for the free trial!
