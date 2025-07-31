---
title: CodeRabbit Commands
date: '2023-10-23'
slug: coderabbit-commands
tags:
  - general
hide_table_of_contents: true
heroImage: /img/changelog/coderabbit-commands-hero.webp
permalink: /changelog/coderabbit-commands
---

### CodeRabbit Commands

Introducing additional CodeRabbit commands for managing code reviews:

- Pause Reviews: Use `@coderabbitai pause` in a PR comment to halt ongoing reviews
- Resume Reviews: Enter `@coderabbitai resume` in a PR comment to continue paused reviews
- On-Demand Reviews: Disable automatic reviews for your repository to switch to on-demand reviews. Use `@coderabbitai review` in a PR comment. This command will override all review filters that might be set up in the repository settings and will initiate a one-time review
- Help Command: You can at any time post `@coderabbitai help` in a PR comment to get the list of all valid commands

---
