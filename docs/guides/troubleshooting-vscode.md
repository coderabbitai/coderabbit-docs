---
title: Troubleshoot the VSCode extension
description: Fix issues with CodeRabbit reviews in VSCode.
---

This guide will help you quickly resolve common problems with the CodeRabbit VSCode extension for local code reviews. If you haven’t set up the extension yet, see [Install the VSCode extension](/guides/install-vscode). For everyday usage tips, check [Use the VSCode extension](/guides/use-vscode).

## Common issues and solutions

### 1. The extension isn't activating

#### Symptoms

- No CodeRabbit icon in the sidebar
- No reviews appear
- "CodeRabbit" missing from the Command Palette

#### How to fix

- Confirm the extension is installed and enabled in VSCode.
- Reload the VSCode window (`Cmd/Ctrl + Shift + P` → “Reload Window”).
- Ensure your workspace is a valid Git repository; CodeRabbit requires Git context to activate.

---

### 2. Reviews aren't triggered on commit

#### Symptoms

- Committing changes does not trigger a review
- No output or errors are shown

#### How to fix

- Open the Command Palette and run `CodeRabbit: Review latest commit` to test manually.
- Check that "Auto Review on Commit" is enabled in the extension settings.
- Verify the comparison branch (e.g., `main`, `develop`) is set correctly.
- Restart VSCode to reset event listeners if needed.

---

### 3. Error: “Failed to compare branches”

#### Symptoms

- Error message in Output or CodeRabbit panel
- No diff is displayed

#### How to fix

- Ensure the comparison branch exists locally. Run `git fetch` to update references.
- Confirm your current branch has diverged commits from the comparison branch.
- Set the correct base branch in CodeRabbit settings:  
  `CodeRabbit: Base Branch` → set to `main` or another relevant branch.

---

### 4. Review results are incorrect or missing files

#### Symptoms

- Some changes are missing from the review
- Comments appear on incorrect lines or files

#### How to fix

- Make sure all changes are staged and committed; unstaged changes may be ignored.
- Check your Git client settings for line-ending conversions or whitespace trimming, which can affect diffs.
- Reload VSCode or run a fresh diff to force a new comparison.

---

### 5. The extension crashes or becomes unresponsive

#### Symptoms

- VSCode freezes or slows down
- CodeRabbit UI is unresponsive

#### How to fix

- Open the Output panel (`View > Output`) and select `CodeRabbit` from the dropdown to check for error logs.
- Disable other extensions that might conflict, such as custom Git diff viewers.
- Report persistent issues on the [CodeRabbit GitHub repository](https://github.com/coderabbitai/coderabbit-vscode/issues).

---

## Additional help

If you’re still experiencing issues, try:

- Restarting VSCode or your computer
- Updating VSCode and the CodeRabbit extension
- Reinstalling the extension
- Checking the [FAQs](/faq) or contacting [support](mailto:support@coderabbit.ai)
