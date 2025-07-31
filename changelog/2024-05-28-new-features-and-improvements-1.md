---
title: New Features and Improvements
date: '2024-05-28'
slug: new-features-and-improvements-1
tags:
  - feature
  - improvement
hide_table_of_contents: true
heroImage: /img/changelog/new-features-and-improvements-1-hero.webp
permalink: /changelog/new-features-and-improvements-1
---

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
