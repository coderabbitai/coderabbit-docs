---
title: New Security and Code Quality Tools
date: '2025-05-25'
slug: new-security-and-code-quality-tools
tags:
  - improvement
  - bugfix
  - security
  - docs
  - tools
hide_table_of_contents: true
heroImage: /img/changelog/new-security-and-code-quality-tools-hero.webp
permalink: /changelog/new-security-and-code-quality-tools
---

### New Security and Code Quality Tools

We're excited to announce the addition of two powerful tools to our static analysis arsenal:

- **Brakeman**: A static analysis security vulnerability scanner for Ruby on Rails applications. It helps identify security issues in your Ruby codebase by analyzing Gemfile, Ruby files (_.rb), and ERB templates (_.erb).

- **Clippy**: The official linter for Rust code, helping catch common mistakes and improve your Rust code quality. It analyzes \*.rs files and supports configuration through clippy.toml files.

Both tools can be configured through their respective config files or through CodeRabbit's settings page. See our [tools documentation](https://docs.coderabbit.ai/tools/) for more details.
