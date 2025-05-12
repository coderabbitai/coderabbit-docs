---
title: Use the VSCode extension
description: How to review your code with the VSCode extension.
---

This page is about using the CodeRabbit VSCode extension. For more information about the extension, see
[Overview](/guides/about-vscode). To learn how to install the extension, see [Install the VSCode extension](/guides/install-vscode).

## Automatically review local commits

You can let CodeRabbit automatically review commits that you make to your local Git repository. These automatic reviews compare all committed changes against the branch that your working branch is based on.

To perform an automatic review, follow these steps:

1. Perform a Git commit using VSCode. After you do this, a dialog appears in your VSCode window, asking **Would you like to start a review?**

1. Click **Yes.** The CodeRabbit sidebar appears in your VSCode window.

1. Wait for the review to complete. This might take several minutes. To cancel a review in progress, click **Stop the review**.

For more options and control of code reviews performed using the CodeRabbit VSCode extension, you can manually request a review, as detailed in the following section.

## Manually request code reviews

To manually review changes in a local Git branch using the CodeRabbit VSCode extension, follow these steps:

1.  Click the CodeRabbit icon in the VSCode activity bar. The CodeRabbit sidebar appears.

1.  Refer to **Branch** in the CodeRabbit sidebar. If you want to compare your code changes
    to a branch other than the default that appears, then follow these steps:

        1. Click the name of the base branch, which is `main` by default. A **Select a base branch** dialog appears, listing other branches in your local Git repository.

        1. Select the name of a base branch to compare against.

1.  Select one of the review-action options from the menu at the bottom of the CodeRabbit sidebar:

    - To review all changes between the base branch and your current branch, including
      both committed and uncommitted changes, select **Review all changes**. This is the default selection.

    - To limit the review to only changes on your branch that you have committed, select **Review committed changes**. This includes both pushed and not-pushed commits on the current branch.

    - To limit the review to only uncommitted changes on your branch, select **Review all changes**.

1.  Refer to the list of **Files to review** in the sidebar. This list represents all of the files that the selected review style includes. To change this list of files, repeat the previous step to choose a different review style, or use Git features like `git stash` to remove changes to files.

1.  To perform the review, click the button part of the menu. The CodeRabbit sidebar displays a **Review** section with the review's progress.

1.  Wait for the review to complete. This might take several minutes. To cancel a review in progress, click **Stop the review**.

## What's next

- [Uninstall the VSCode extension](/guides/install-extension)
