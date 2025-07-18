---
title: Integrate with GitHub.com
description: Learn how to integrate CodeRabbit and add to your GitHub workflow.
sidebar_label: GitHub.com
---

This is a step-by-step guide to integrate CodeRabbit with your GitHub repositories.

For an overview of how CodeRabbit integrates with Git platforms, see
[Add CodeRabbit to your repository](/platforms).

For a hands-on tutorial with CodeRabbit performing code reviews on a live
GitHub repository that you create, see [Quickstart](/getting-started/quickstart).

## Before you begin

You need to have a GitHub account, and ownership-level permissions of at least one repository associated with that account.

If you want to authorize CodeRabbit to write code reviews for a repository contained in a GitHub organization, then you need ownership-level permission with that organization, as well.

## Authorize CodeRabbit with your GitHub account

Before you can you use CodeRabbit with GitHub, you need to
authorize CodeRabbit with your GitHub account. To do this, follow these steps:

1. Visit [the CodeRabbit login page](https://app.coderabbit.ai/login).

1. Click **Login with GitHub**. Your browser navigates to GitHub.com.

1. If GitHub prompts to sign in to your GitHub account before continuing, then enter your GitHub login credentials as you normally would. Otherwise, continue to the next step.

1. GitHub displays a summary of the information that CodeRabbit needs in order to integrate with your
   GitHub account. This includes read-only access to the following:

   - Organizations and teams that are associated with your GitHub account.
   - Email addresses that are associated with your GitHub account.

   To allow CodeRabbit access to this information, click **Authorize coderabbitai**.

After you complete these steps, your browser navigates to the CodeRabbit web interface.

Now that you've integrated CodeRabbit with your GitHub account, you need to give CodeRabbit additional permissions to work with your code repositories. To do this, see the next section.

## Allow CodeRabbit to access your repositories

Even after you've integrated CodeRabbit with your GitHub account, you need to
separately grant CodeRabbit the permissions that it needs to post code reviews and
create pull requests in your repositories.

You need to authorize CodeRabbit separately for each GitHub organization whose repositories you want it to work with. You can give CodeRabbit permission to
work with all of the repositories associated with a GitHub organization, or limit its access to a select list.

### Overview of required permissions

CodeRabbit requires the following permissions to work with your repositories:

- Read-only access to actions, checks, discussions, members, and metadata.

- Read-and-write access to code, commit statuses, issues, and pull requests.

:::note
CodeRabbit requests read and write access to your repository in order for its code review, issue management, and pull request generation features to work. CodeRabbit never stores your code. For more information, see [the CodeRabbit Trust Center](https://trust.coderabbit.ai).
:::

### Grant required permissions

To give CodeRabbit access to one or more of your repositories, follow these steps:

1. Visit [the CodeRabbit web interface](https://app.coderabbit.ai/settings/repositories).

1. Make sure that the correct GitHub organization for the repository is displayed
   at the top of the web interface. To change the organization, click **Change
   Organization** and select a different organization from the list.

   If the repositories that you want to add are associated directly with your GitHub account, and not a separate organization, then select your account name as the organization.

   If the organization containing the repository doesn't appear in the list, then you might
   need to refresh the list of organizations that CodeRabbit has associated with your
   GitHub account. For more information, see [Add organizations](/getting-started/adding-organizations).

1. Click the **Add Repositories** button. Your browser navigates to GitHub.com.

   If the selected organization has no repositories registered with CodeRabbit, then your browser displays a CodeRabbit permissions dialog for setting up a new integration. Proceed to the next step.

   Otherwise, your browser displays a GitHub settings page for your organization's existing CodeRabbit integration. Scroll down to the section titled **Repository access**, and then proceed to the next step.

1. Select which repositories you'd like to allow CodeRabbit to write code reviews for.

   To give CodeRabbit access to all repositories in the organization, select **All repositories**. This also automatically grants CodeRabbit access to all repositories added to the organization in the future.

   To give CodeRabbit access to specific, limited list of repositories, select **Only select repositories**, and then choose repositories from the list.

   :::note
   You can change this setting later.
   :::

1. Click the button at the bottom of the form, which has one of the following labels, depending upon context:

   - **Install & Authorize**, if this organization has no repositories integrated with CodeRabbit, and you are an owner of this organization.
   - **Save**, if this organization already has repositories integrated with CodeRabbit

1. If you are integrating an organization with CodeRabbit for the first time, then your browser navigates back to the CodeRabbit web interface.

   Otherwise, your browser remains on your GitHub settings page, and you can manually navigate [back to the CodeRabbit web interface](https://app.coderabbit.ai/settings/repositories).

## What's next

- [Set your repository preferences](/guides/repository-settings)

- [Review pull requests](/guides/code-review-overview)
