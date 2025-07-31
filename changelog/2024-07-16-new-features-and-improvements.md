---
title: New Features and Improvements
date: '2024-07-16'
slug: new-features-and-improvements
tags:
  - feature
  - improvement
  - bugfix
  - security
  - tools
hide_table_of_contents: true
heroImage: /img/changelog/new-features-and-improvements-hero.webp
permalink: /changelog/new-features-and-improvements
---

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
