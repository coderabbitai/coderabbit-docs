---
title: Control administrative access
description: Using the role-based authorization features of CodeRabbit
---

You can control which CodeRabbit
administrative features are available to your organization's user accounts by
assigning and updating account roles.

## Overview of CodeRabbit roles {#overview}

Every CodeRabbit account has exactly one role for each organization
that account is associated with.
For example, if you belong to two GitHub-based organizations that use
CodeRabbit, then you have one CodeRabbit role set for each of those two
organizations.

CodeRabbit roles determine your ability to read or change various
billing, account management, and other administrative functions related to
an organization. The roles are as follows:

- **Admin**: allows full read/write access to all CodeRabbit administrative features.
- **Member**: allows read-only access to a limited set of administrative settings. This role
  is appropriate for most developers in an organization.
- **Billing Admin**: allows read/write access to features specific
  to a subscription and billing management, and limited access to other administrative features.

CodeRabbit users with the **Admin** role can modify the roles of other users in the
organization.

For a complete list of the administrative functions available to each role, see
[Role permissions](#permissions).

### CodeRabbit roles and Git platform roles {#and-upstream}

Modifying an account's CodeRabbit role doesn't have any "upstream"
effect on that account's role or permissions in your organization's Git platform.
Similarly, changes to an account's role on your organization's Git platform don't
affect that account's CodeRabbit role.

For example, if you have CodeRabbit integrated with a GitHub organization, and you change an account's CodeRabbit role from **Member** to **Admin**, then that account's
permission or ownership level with your GitHub organization doesn't change as a result.

### CodeRabbit roles and developer features {#and-features}

CodeRabbit roles affect only access to administrative features. Roles have no effect on using CodeRabbit developer features, such as automated code reviews.

For example, if an organization has a Pro-tier
CodeRabbit account, then any user account with a seat assigned to it can use Pro-tier features with the organization's private repositories, regardless of that account's role.

For more information on seat and subscription management, see [Manage your subscription](/getting-started/subscription-management).

## Default roles {#defaults}

CodeRabbit assigns every user account in your organization a default role,
using the following metrics:

- If a user has an ownership-level role with the Git platform organization—for example,
  **Admin** on GitHub, or **Owner** on Bitbucket—then that user receives the default
  CodeRabbit role of **Admin**.
- Otherwise, the user receives the **Member** role by default.

You can update a user's role from its default setting by following the steps detailed in the next section. This requires that your own account
has an **Admin** role with the organization.

CodeRabbit applies these defaults only when initially setting up for an
account within an organization. Subsequent "upstream" role changes don't affect
an account's CodeRabbit role.

## View or set roles {#how-to}

You can view and set roles from the CodeRabbit dashboard, as detailed in the
following sections.

### View roles {#view-roles}

To view a list of your organization's role assignments, follow these steps:

1. Go to the [CodeRabbit dashboard](https://app.coderabbit.ai/settings/repositories).
1. At the top of the sidebar, select the organization whose user roles you want to view.
1. On the sidebar, click **Subscription**.

This displays a table of all of the CodeRabbit **Admin** and **Member** accounts associated with the selected
organization. In this table, the **Role** column displays the CodeRabbit role for
each account.

To view a list of accounts with the **Billing Admin** role, click the **Billing Admins** tab located above the table of user accounts.

### Set roles {#set-roles}

:::note
To modify users' CodeRabbit accounts, your own account must have the **Admin** role within your organization.
:::

To change a user account's CodeRabbit role, follow these steps:

1. Go to your organization's list of user accounts, as detailed in the previous section.
   If you have the **Admin** role within this organization, then the **Role** column in the user accounts table contains selectable menus.
1. Click the menu in the user's **Role** column, and select the appropriate role from
   the list.

The only roles you can assign through this method are **Admin** and **Member**.
You can't grant the **Billing Admin** role to an existing user account. To add an account with the **Billing Admin** role, see the next section.

### Add billing admin accounts {#billing}

:::note
Billing Admin users don't require CodeRabbit seat licenses. You can add Billing Admin users regardless of how many seat licenses you have available.
:::

To add a CodeRabbit user account with the **Billing Admin** role, follow these steps:

1. Go to your organization's list of user accounts, as detailed in [View roles](#view-roles).
1. Click **Invite Billing Admin**.
1. Enter the name and email address of the billing administrator who you want to invite to the organization.

This sends an email to the address that you specified. After the recipient completes the process of joining your organization in CodeRabbit, then their record appears in the user accounts list, under the **Billing Admins** tab.

## Role permissions {#permissions}

The following table lists the CodeRabbit administrative functionality
available to each of the CodeRabbit roles.

| Resource                | Admin      | Member    | Billing Admin |
| ----------------------- | ---------- | --------- | ------------- |
| Learning Resources      | Read/Write | Read-only | No access     |
| Metrics/Dashboard       | Read/Write | No access | No access     |
| Reports                 | Read/Write | Read-only | No access     |
| Integrations            | Read/Write | Read-only | No access     |
| Repository Settings     | Read/Write | Read-only | No access     |
| Organization Settings   | Read/Write | Read-only | No access     |
| User Management         | Read/Write | Read-only | Read-only     |
| Subscription Management | Read/Write | Read-only | Read/Write    |
| Billing Management      | Read/Write | No access | Read/Write    |

## What's next {#whats-next}

- [Manage your subscription](/getting-started/subscription-management)
