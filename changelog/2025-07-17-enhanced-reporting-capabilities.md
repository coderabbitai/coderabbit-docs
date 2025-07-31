---
title: Enhanced Reporting Capabilities
date: '2025-07-17'
slug: enhanced-reporting-capabilities
tags:
  - feature
  - improvement
  - bugfix
  - docs
hide_table_of_contents: true
heroImage: /img/changelog/test-feature-demo.svg
permalink: /changelog/enhanced-reporting-capabilities
---

### Enhanced Reporting Capabilities

We're excited to announce significant improvements to our reporting system that will make your automated reports more powerful and actionable!

#### Exclusion Filters with NOT_IN Option

Reports now support exclusion filters using the `NOT_IN` option, allowing you to filter out pull requests based on their repository, label, user, or team. This gives you more granular control over what appears in your reports, helping you focus on the most relevant information.

#### Next Steps Section in Daily Standup Reports

We've enhanced the default daily standup report template to include a "Next Steps" section. This provides clear guidance on what actions authors and reviewers should take regarding each pull request or change, making your reports more actionable and helping teams stay on track.

#### CI/CD GitHub Action Check Status Awareness

Reports now include CI/CD GitHub Action check status as a data source. Your reports will be aware of which CI/CD checks are failing or passing, giving you better visibility into the health of your pull requests and helping identify potential issues before they become blockers.

#### Score Card Custom Report Option

We've added a new optional score card report feature that allows you to grade and create report cards for your developers. This custom report optional data source provides a structured way to evaluate developer performance and contributions. See our [custom reports documentation](/guides/custom-reports#remove-prs-without-a-score-cardchart-bot-comment) for more details on how to implement score cards in your reports.
