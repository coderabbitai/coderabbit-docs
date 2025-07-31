---
title: Deep Insights Feature Release
date: '2024-01-02'
slug: deep-insights-feature-release
tags:
  - bugfix
hide_table_of_contents: true
heroImage: /img/changelog/deep-insights-feature-release-hero.webp
permalink: /changelog/deep-insights-feature-release
---

### Deep Insights Feature Release

Working as recursive autonomous agent, CodeRabbit uses shell scripts to perform complex operations on the entire codebase, verifying changes and providing deeper insights.

Here are some uses cases:

- Want to defer implementing the CodeRabbit suggestion to a later time? Ask the bot the create an issue
- Generate unit tests - comment `@coderabbitai generate unit tests` for the src/utils.ts
- In PR comments, ask the bot to gather insights on your repository including latest commits, frequently changed files, recent contributors etc
- When the CodeRabbit review comment is addressed, let the bot know and it can validate with the latest commit

Really excited to see how this feature gets used, especially with access to the CLI commands. There are some suggestions in the pull request tips but we are looking forward to seeing additional use cases of how developers use this feature. Please consider sharing your experiences.

---
