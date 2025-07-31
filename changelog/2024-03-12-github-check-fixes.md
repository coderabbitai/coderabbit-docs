---
title: GitHub Check Fixes
date: '2024-03-12'
slug: github-check-fixes
tags:
  - bugfix
  - tools
hide_table_of_contents: true
heroImage: /img/changelog/github-check-fixes-hero.webp
permalink: /changelog/github-check-fixes
---

### GitHub Check Fixes

CodeRabbit now offers fixes for GitHub Check failures on pull requests. With this change, Check Runs on GitHub that add Annotations to Pull Requests will be used. For example, popular GitHub Actions published by reviewdog (action-golangci-lint, action-staticcheck, action-eslint) and super-linter among many others can report issues on Pull Requests as annotations. Checks that output logs will be supported shortly. The CodeRabbit GitHub App requires permission to read Checks for this feature to work. To enable this, please grant the necessary permissions by visiting the CodeRabbit GitHub app settings under [installation](https://github.com/settings/installations). Support for GitLab will follow.

---
