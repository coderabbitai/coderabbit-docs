---
title: Quickstart
sidebar_label: Quickstart
description: See CodeRabbit in action, using a live GitHub repository.
sidebar_position: 1
---

# Quickstart

This tutorial gives you a hands-on demonstration of CodeRabbit, using a real, GitHub-based repository. It guides you through the following tasks:

1. Integrate CodeRabbit into a GitHub-based repository that you own.
1. Observe CodeRabbit perform a code review of a pull request that you initiate.
1. Converse with CodeRabbit about the code review.
1. Prompt CodeRabbit to generate its own improvements to the pull request.

When you complete this tutorial, you'll have seen CodeRabbit's code-review feature in action, and glimpsed a few of its other AI-driven abilities as well.

For a more general overview of CodeRabbit, see [Introduction](/).

:::note
While this tutorial focuses on GitHub, CodeRabbit also works with GitLab, Azure DevOps, and Bitbucket. For more information, see [Supported Git Platforms](/platforms/).
:::

## Before you begin

Create a new, private repository on GitHub. Name the new repository `coderabbit-test`, and let it have otherwise default GitHub settings.

## Integrate CodeRabbit with your GitHub account

To integrate CodeRabbit with your GitHub account, follow these steps:

1. Visit [the CodeRabbit login page](https://app.coderabbit.ai/login).
1. Click **Login with GitHub**.
1. Click **Authorize coderabbitai**.

CodeRabbit takes a moment to set up the integration. After it finishes, the CodeRabbit dashboard appears.

## Add CodeRabbit to your repository

To add CodeRabbit to your test repository, follow these steps:

1. On the CodeRabbit dashboard, click **Add Repositories**. A GitHub repository-access dialog appears.
1. Select the **Only select repositories** radio button.
1. From the **Select repositories** menu, select the `coderabbit-test` repository that you created earlier in this Quickstart.
1. Click **Install & Authorize**.
1. If a CodeRabbit **Complete your signup** dialog appears, then fill it out with the requested information before continuing.

CodeRabbit is now ready to use with your test repository. The next steps demonstrate its core code-review features.

## Let CodeRabbit perform a code review

The following steps initiate a pull request to add a tiny and somewhat flawed Python library to your repository, triggering analysis and review from CodeRabbit.

Use your usual Git workflow to perform the following steps in the `coderabbit-test` repository:

1. Create a branch named `add-utils`.

1. In that new `add-utils` branch, create a new file called `simple_utils.py`, with the following content:

   ```python
   # simple_utils.py - A tiny utility library

   def reverse_string(text):
       """Reverses the characters in a string."""
       return text[::-1]

   def count_words(sentence):
       return len(sentence.split())

   def celsius_to_fahrenheit(celsius):
       return (celsius * 9/5) + 32
   ```

1. Commit the added file to the `add-utils` branch. Use any text you want for the commit message.

1. Create a pull request that proposes to merge the `add-utils` branch into the `main` branch. Use any text you want for the pull request message.

After a few moments, CodeRabbit responds to the pull request using the `@coderabbitai` GitHub account. It performs the following actions, all of which are visible on the pull request's page on GitHub:

- If you didn't write a pull request summary, then CodeRabbit adds a new summary to the pull request.
- CodeRabbit posts a comment titled **Walkthrough** containing analysis and commentary about the content of the pull request.
- CodeRabbit attaches a detailed code review to the pull request as another comment.

Part of the review resembles the following screenshot:

![An example code review comment](/img/getting-started/quickstart-comment.png)

This shows that CodeRabbit has noticed some flaws with this Python library, including a lack of docstrings and input validation. The review comment identifies these flaws, and suggests how you might improve them.

## Ask CodeRabbit for more information

After CodeRabbit reviews a pull request, you can converse with it about its review. You can also give CodeRabbit special commands to request it to perform specific functions, such as generating appropriate code changes for you.

1. Post the following as a new GitHub comment attached to the pull request:

   ```text
   @coderabbitai Why do all of these functions need docstrings? Isn't it obvious enough what they do?
   ```

   After a few moments, CodeRabbit posts its reply, explaining its motivations for its recommendation. The reply might resemble the following:

   > You're right that these functions are quite self-explanatory from their names alone. Docstrings aren't strictly necessary for every function, especially in smaller projects with clear function names.
   >
   > While docstrings do provide benefits (IDE tooltips, documentation generation, help for future developers), they can sometimes feel redundant for very straightforward functions. It's ultimately a matter of coding style and project requirements.
   >
   > If you prefer to skip docstrings for obvious utility functions in this project, that's perfectly reasonable. Would you like me to adjust my review approach regarding documentation for this repository?

   In this case, CodeRabbit is offering to adjust its future behavior when reviewing changes to this repository. Instead, follow the next step to ask CodeRabbit to implement part of its suggestions.

1. Post the following as another new comment:

   ```text
   @coderabbitai generate docstrings
   ```

   After a few moments, CodeRabbit does the following:

   - CodeRabbit creates a new branch, based on `add-utils`.
   - CodeRabbit commits changes to the branch that adds suggested docstrings to `add-utils`.
   - CodeRabbit opens a new pull request between the new branch and `add-utils`.

## Clean up

Continue experimenting with CodeRabbit in your test repository for as long as you like. When you're finished, you can delete the repository.

You are now ready to add CodeRabbit to other repositories that you own, and let it review some real pull requests.

## What's next

- [Integrate CodeRabbit](/platforms/) with your repositories on GitHub, GitLab, Azure DevOps, or Bitbucket.
- [Configure CodeRabbit](/getting-started/configure-coderabbit) beyond its default settings.
- [Add custom review instructions](/guides/review-instructions).
- [Get support for CodeRabbit](/getting-started/support).
- [Learn more about how CodeRabbit works](/overview/why-coderabbit).
