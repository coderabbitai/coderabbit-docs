---
title: CodeRabbit Commands
sidebar_label: CodeRabbit Commands
description:
  CodeRabbit offers various commands that can be invoked as PR comments to
  control the review process.
sidebar_position: 4
---

The following commands are available (invoked as PR comments):

- `@coderabbitai pause` to pause the reviews on a PR.
- `@coderabbitai resume` to resume the paused reviews.
- `@coderabbitai ignore` to ignore the reviews on a PR.
- `@coderabbitai review` to trigger an incremental review. This is useful when
  automatic reviews are disabled for the repository.
- `@coderabbitai full review` to do a full review from scratch and review all
  the files again.
- `@coderabbitai summary` to regenerate the summary of the PR.
- `@coderabbitai resolve` resolve all the CodeRabbit review comments.
- `@coderabbitai configuration` to show the current CodeRabbit configuration for
  the repository.
- `@coderabbitai help` to get help.
