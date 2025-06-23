---
title: Best practices for using the VSCode extension
description: Recommended ways to get the most out of CodeRabbit's VSCode extension.
---

Maximize your productivity and code quality with these best practices for the CodeRabbit VSCode extension. For setup instructions, see [Install the VSCode extension](/guides/install-vscode). To get started, visit [Use the VSCode extension](/guides/use-vscode).

## Recommended setup

- **Set a default comparison branch**  
  Choose your main development branch (e.g., `main`, `develop`, or trunk) as the default for reviews. This ensures consistent and relevant diffs.  
  → Use `CodeRabbit: Base Branch` in the Command Palette.

- **Enable auto-reviews on commit**  
  Let CodeRabbit automatically review your code after each commit to catch issues early and maintain momentum.  
  → Toggle `CodeRabbit: Auto Review on Commit` in extension settings.

- **Pin CodeRabbit to the sidebar**  
  Keep the CodeRabbit icon visible in the activity bar for instant access to reviews and history.

- **Keep Git in sync**  
  Regularly fetch and rebase or merge from your base branch. This keeps your diffs clean and prevents unnecessary noise in reviews.

---

## Daily workflow tips

### 1. Commit often, review often

Make small, frequent commits. CodeRabbit can review incremental changes, helping you spot issues early and keep reviews manageable.

### 2. Use manual reviews for partial code

For work-in-progress or uncommitted changes, use `CodeRabbit: Review Selected Files` or `Review Current Changes`. This is ideal for exploratory or experimental work.

### 3. Follow up on comments

Always address CodeRabbit’s suggestions. Even if you disagree, double-check the feedback. Use comments as a checklist before pushing to remote.

### 4. Re-review after refactoring

After significant changes or refactoring, run `Review Current Branch` again to validate new logic and catch regressions.

---

## Performance tips

- **Avoid large, monolithic commits**  
  Break up big changes into logical units. This speeds up reviews and improves feedback accuracy.

- **Close unused VSCode windows**  
  Running multiple VSCode instances with the extension can impact performance.

- **Use `.coderabbitignore`**  
  Exclude files or directories you don’t want reviewed to reduce clutter and speed up analysis.

---

## Team collaboration tips

- **Share `.vscode/settings.json`**  
  Align CodeRabbit settings (like base branch and ignored paths) across your team for consistency.

- **Document your CodeRabbit workflow**  
  Add a section to your project README outlining when to run reviews, what to check, and how to handle feedback.

- **Integrate with CI**  
  Use CodeRabbit both locally and in your CI pipeline for consistent, automated code reviews.

---

## Keep your tools updated

- Regularly update the CodeRabbit extension for the latest features and fixes.
- Keep VSCode and Git up to date for best compatibility.
- Watch the [CodeRabbit GitHub repo](https://github.com/coderabbitai/coderabbit-vscode) for release notes and updates.

---

By following these practices, you’ll catch bugs earlier, streamline your workflow, and write more reliable code with confidence.
