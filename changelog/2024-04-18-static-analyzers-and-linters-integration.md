---
title: Static Analyzers and Linters Integration
date: '2024-04-18'
slug: static-analyzers-and-linters-integration
tags:
  - bugfix
  - tools
hide_table_of_contents: true
heroImage: /img/changelog/static-analyzers-and-linters-integration-hero.webp
permalink: /changelog/static-analyzers-and-linters-integration
---

### Static Analyzers and Linters Integration

CodeRabbit now runs static analyzers, linters and provides one-click fixes for the issues identified. AI helps reduce the false positives and focus on the critical findings. CodeRabbit will respect the existing configuration files of these tools if they already exist in the project. For example, if your project already uses ruff and has a ruff.toml file at the root of the project, that will be used. In cases where project configurations are not found, CodeRabbit defaults will be used. Currently, CodeRabbit runs markdownlint, shellcheck, ruff, and languagetool. We will continue to add more tools. The default configuration can be changed through the .coderabbit.yaml file.

Are there any specific tools you'd like us to add? Let us know. We'd love to hear your suggestions!

---
