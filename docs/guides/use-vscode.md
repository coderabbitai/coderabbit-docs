---
title: Use the VSCode extension
description: How to review your code with the VSCode extension.
---

This page is about performing local code reviews using the CodeRabbit VSCode extension. For more information about the extension, see
[Review local changes](/code-editors). To learn how to install the extension, see [Install the VSCode extension](/guides/install-vscode).

The CodeRabbit VSCode extension works by comparing changes in your current, checked-out Git branch against another branch in your local repository. You can use the extension to automatically perform full-branch changes after every commit, or make different kinds of comparisons by manually requesting a review.

:::note
The instructions on this page are specific to using the extension with VSCode. If you are instead using a VSCode-compatible editor such as Cursor or Windsurf, then the steps that you need to follow are similar, but might require some adaptation.
:::

## Automatically review local commits {#auto-reviews}

You can let CodeRabbit automatically review commits that you make to your local Git repository. These automatic reviews compare all committed changes against the branch that your working branch is based on.

To perform an automatic review, follow these steps:

1. Perform a Git commit using VSCode. After you do this, a dialog appears in your VSCode window, asking **Would you like to start a review?**

1. Click **Yes**. The CodeRabbit sidebar appears in your VSCode window.

1. Wait for the review to complete. This might take a few minutes. To cancel a review in progress, click **Stop the review**.

After the review completes, you can browse and respond to review comments as described in [Work with code reviews](#work).

You can optionally configure the extension to either always or never perform automatic code reviews on commit, instead of displaying this yes-or-no dialog. For more information, see [Configure automatic review behavior](/guides/config-vscode#auto-reviews).

For more control of code reviews performed using the CodeRabbit VSCode extension, you can manually request a review, as detailed in the following section.

## Manually request code reviews {#manual-reviews}

To manually review changes in a local Git branch using the CodeRabbit VSCode extension, follow these steps:

1. Click the CodeRabbit icon in the VSCode activity bar. The CodeRabbit sidebar appears.

1. If you want to compare your code changes to a branch other than its base branch, then follow these steps:

   1. In the sidebar, under **Branch**, click the name of the base branch. A **Select a base branch** dialog appears, listing other branches in your local Git repository.

   1. Select the name of a base branch to compare against.

1. Select one of the review-action options from the menu at the bottom of the CodeRabbit sidebar:

   - To review all changes between the base branch and your current branch, including both committed and uncommitted changes, select **Review all changes**. This is the default selection.

   - To limit the review to only changes on your branch that you have committed, select **Review committed changes**. This includes commits that you have pushed to your remote repository, if any, as well as any local commits.

   - To limit the review to only uncommitted changes on your branch, select **Review uncommitted changes**. This includes both staged and unstaged changes.

1. Refer to the list of **Files to review** in the sidebar. This list represents all of the files that the selected review action includes. To change this list of files, repeat the previous step to choose a different review action, or use Git features like `git stash` to selectively remove changes.

1. To perform the review, click the button part of the menu. The CodeRabbit sidebar displays a **Review** section with the review's progress.

1. Wait for the review to complete. This might take a few minutes. To cancel a review in progress, click **Stop the review**.

After the review completes, you can browse and respond to review comments as described in the following section.

## Work with code reviews {#work}

The CodeRabbit VSCode extension presents code reviews as a series of actionable comments, connected to specific files and lines. It gives you tools to apply its suggestions quickly, when possible.

### Browse comments {#browse}

After the extension finishes its review, it adds any comments to the CodeRabbit sidebar under the **Files** heading in the **Reviews** section.

Each item in **Files** is a comment referring to one or more lines in that file. Click the comment to see a detailed, inline comment in the editor, attached to the appropriate file and lines.

You can react to these comments however you want: you can apply their advice literally, or let them guide you to find alternate solutions, or ignore them entirely. CodeRabbit comments are metadata stored with VSCode, and are not part of your files. The presence of comments doesn't block your use of version control.

### Apply suggested changes {#apply}

Whenever possible, the CodeRabbit VSCode extension attaches discrete change suggestion to comments in the form of code diffs. For example, if it detects a typo in a new function name, the extension might attach a diff with a suggested correction.

If you agree with CodeRabbit about the suggested fix and want to apply to exactly as it proposes, click the checkmark-shaped **Apply suggested change** icon in the inline comment. The extension makes the change for you in the editor.

### Request help from your AI coding agent {#agent}

If CodeRabbit determines that an AI coding agent could help with resolving one of its comments, then it adds a star-shaped **Fix with AI** icon to the inline display of that comment. To have the extension generate a request for an AI agent to address the comment, click this icon.

Depending upon your IDE and the current extension settings, the extension performs one of the following actions:

- If you are using VSCode with Copilot installed, then the extension can send the request directly to Copilot.
- If you have Claude Code installed, then the extension can send the request to the `claude` command-line program.
- As a fallback, the extension can copy the request, phrased as an AI prompt, to your clipboard. You can then manually paste this prompt into the coding AI of your IDE.

For more information about configuring this behavior, see [Configure AI agent integration](/guides/config-vscode#agent).

### Ignore or collapse comments {#ignore}

To remove a comment from the editor, click its **Ignore** icon.

To remove a comment but keep an icon in the editor noting its presence, click its **Collapse** icon.

To see an ignored or collapsed comment in the editor again, click its summary in the CodeRabbit sidebar.

### Browse previous reviews {#previous}

If you have performed reviews prior to the most recent review in the current VSCode window, then you can browse the comments from these reviews under the **Previous reviews** heading in the CodeRabbit sidebar.

If a past review comment no longer applies to the current state of your code, then clicking that comment won't display a detailed comment or suggestion in the editor.

## What's next {#whats-next}

- [Configure the VSCode extension](/guides/config-vscode)

- [Uninstall the VSCode extension](/guides/uninstall-vscode)
