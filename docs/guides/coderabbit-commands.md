---
title: CodeRabbit Commands
sidebar_label: CodeRabbit Commands
description: Learn how to manage your PR reviews with CodeRabbit commands.
---

Manage your PR reviews with the following commands:

By default, CodeRabbit automatically reviews all pull requests. Additionally,
for each pull request, it will review all incremental commits. However, this
behavior can be overridden using the following commands:

- **Pause Reviews**:
  - Use `@coderabbitai pause` in a PR comment to halt ongoing reviews.
- **Resume Reviews**:
  - Enter `@coderabbitai resume` in a PR comment to continue paused reviews.
- **On-Demand Reviews**:
  - Disable automatic reviews for your repository to switch to on-demand
    reviews.
  - Use `@coderabbitai review` in a PR comment. This command will override all
    review filters that might be set up in the repository settings and will
    initiate a one-time review.
- **Skip Specific PR**:

  - To exclude a specific PR from review, include `@coderabbitai ignore` in the
    PR description.

- **Resolve Command**:

  - Use `@coderabbitai resolve` to mark all the CodeRabbit review comments as
    resolved all at once.

- **Help Command**:
  - You can at any time post `@coderabbitai help` in a PR comment to get the
    list of all valid commands.

:::note

Ensure you input these commands as PR comments. For direct bot interactions,
enter your input in the review comments of a code diff or file.

:::

### Feedback

If you have suggestions for additional commands or improvements, we would love
to hear from you! Please submit your feedback to our support team.
