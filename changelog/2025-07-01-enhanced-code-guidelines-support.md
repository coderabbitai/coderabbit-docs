---
title: Enhanced Code Guidelines Support
date: '2025-07-01'
slug: enhanced-code-guidelines-support
tags:
  - improvement
hide_table_of_contents: true
heroImage: /img/changelog/enhanced-code-guidelines-support-hero.webp
permalink: /changelog/enhanced-code-guidelines-support
---

### Enhanced Code Guidelines Support

We've expanded our code guidelines scanning capabilities to provide even better code review experiences. CodeRabbit now automatically scans and learns from additional configuration files to understand your organization's coding standards and preferences.

**New supported patterns:**

- `**/.cursorrules` - Cursor IDE rules and preferences
- `.github/copilot-instructions.md` - GitHub Copilot instructions
- `**/CLAUDE.md` - Claude-specific coding guidelines
- `**/.cursor/rules/*` - Cursor rules directory
- `**/.windsurfrules` - Windsurf IDE rules
- `**/.clinerules/*` - Cline IDE rules
- `**/.rules/*` - General rules directory

These guidelines are automatically analyzed and applied during code reviews to ensure consistency with your team's coding standards. You can configure these patterns in the knowledge base section of your CodeRabbit settings.
