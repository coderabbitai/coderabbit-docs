---
title: FAQs
sidebar_label: FAQs
description: Frequently asked questions about CodeRabbit.
sidebar_position: 9
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## General Questions {#general-questions}

### How accurate is CodeRabbit?

> CodeRabbit demonstrates high accuracy in code reviews based on early adoption results. While 100% accuracy isn't guaranteed due to AI's evolving nature, our technology continuously improves through:

- Regular model updates
- Enhanced pattern recognition
- Growing language support
- Refined code analysis

### Language Support

CodeRabbit works with all programming languages, with varying proficiency based on:

- Language popularity
- Available training data
- Community usage patterns

### Data Security

<Tabs>
  <TabItem value="storage" label="Code Storage" default>
    - No persistent code storage
    - Temporary cloning during review only
    - Complete data isolation
    - Immediate disposal post-review
  </TabItem>
  <TabItem value="training" label="Training Data">
    - Uses only public datasets
    - No proprietary code usage
    - Private repositories excluded
  </TabItem>
</Tabs>

### Organization Management

Switch between organizations easily:

1. Click organization name (top-left corner)
2. Select desired organization
3. Access organization-specific settings

![Organization Switcher](/img/faq/cr_support_orgs_light.png#gh-light-mode-only)
![Organization Switcher](/img/faq/cr_support_orgs_dark.png#gh-dark-mode-only)

### Comparison with Other Tools

> Code reviews remain essential, whether the code is written by a human or a bot. This is mainly because the perspective of the reviewer differs from that of the code generator, whether human or machine. This distinction is precisely why human peer reviews have been effective for so long. While AI-powered code-generation tools like GitHub Copilot hold immense potential, it's important to recognize that these generators are still in their early stages and may not be equipped to auto-generate meaningful code for moderately complex applications.

#### vs AI Code Generators

- Provides review perspective different from code generation
- Complements tools like GitHub Copilot
- Focuses on code quality and best practices

#### vs Traditional Review Tools

- Context-aware feedback
- Actionable suggestions
- Direct commit capabilities
- AI-powered intent understanding

## Usage and Configuration {#usage-and-configuration}

### When Does CodeRabbit Review PRs?

- ✅ **New PRs**: Automatic review when created
- ✅ **New Commits**: Automatic review when pushed to any PR
- ⚡ **Older PRs**: Use `@coderabbitai review` to trigger manually

![CodeRabbit- Full-Review](/img/faq/full-review.png)

### Customization Options

#### How to Add or Update Your Billing Email

To add or update your billing email, navigate to the Subscription page and
select Manage Subscription > **Billing Address**. Enter your email address in the
Email field and click Update to save your changes.

### Usage and Configuration

- **Language Settings**: Configure review language in repository settings
- **Review Rules**: Customize via [Review Instructions](/guides/review-instructions)
- **Branch Selection**: Default branch reviews enabled by default (configurable)

### Access & Permissions

- Minimal repository access required
- Review permissions during installation
- Individual developer support available

### Interaction Guide

Interact with CodeRabbit by:

1. Replying directly to CodeRabbit comments
2. Tagging `@coderabbitai` in PR discussions
3. Adding review comments for specific lines
4. Customize via [Review Instructions](/guides/review-instructions)

:::tip Collaboration Mode
When team members are active in PRs, use `@coderabbitai` to engage the bot.
:::

### Usage Limits

| Feature          | Free/Trial                    | Pro/Lite Plan |
| ---------------- | ----------------------------- | ------------- |
| Files per hour   | 300                           | 600           |
| Reviews per hour | Trial: 5, OSS: 4              | 8             |
| Conversations    | 25 back-to-back, then 50/hour | Higher limits |

:::note
In-trial and open-source plans have lower rate limits than the paid plan. In all cases, we re-allow further reviews/conversations after a brief timeout.
:::

## Integration Guide {#integration-guide}

### Prerequisites

- Organization admin access
- Domain allowlist (GitLab: add `coderabbit.ai`)
- Default branch configuration

### Quick Setup

1. Sign up at [coderabbit.ai](https://coderabbit.ai) using your GitHub account
2. Add your repository through the dashboard
3. That's it. CodeRabbit will automatically start reviewing your PRs

:::tip Need Help?
Visit our [Support](/getting-started/support) page for additional assistance or reach out to our team on [Discord](http://discord.gg/coderabbit).
:::

#### Unable to View Repositories in GitLab

If you cannot view repositories in the CodeRabbit UI, please ensure that you
are added as a Developer in the primary group for GitLab Cloud or in the first
level group for Self-Hosted GitLab.

#### Unable to Enable Repositories in GitLab

If you’re having trouble enabling the GitLab Repositories toggle, confirm that
you have Maintainer access in the primary group for GitLab Cloud or in the first
level group for Self-Hosted GitLab.

## Account Management {#account-management}

### How do I delete my CodeRabbit account?

:::danger Irreversible Account Deletion
Deleting your CodeRabbit account is permanent and cannot be undone. This action will permanently erase:

- Organization and Repository data
- AI Bot learnings and insights
- Subscriptions and billing information
- All settings and configurations
- Reports and recurring reports
- Third-party service integrations
  :::

<Tabs>
  <TabItem value="deletion" label="Account Deletion Steps" default>
    1. Sign into your CodeRabbit account
    2. Navigate to the **Subscription** page
    3. Click the orange **Delete Account** button
    4. Review the deletion confirmation modal
    5. Type "delete" to confirm
    6. Complete platform-specific cleanup steps below

    :::info
    The Delete Account button is only visible to admin users.
    :::

A confirmation modal will appear explaining the consequences of account deletion. You can expand each section for detailed information:

    <div align="center">
    ![Delete Account](/img/guides/delete_account_light.png#gh-light-mode-only)
    ![Delete Account](/img/guides/delete_account_dark.png#gh-dark-mode-only)
    </div>

  </TabItem>
  <TabItem value="github" label="GitHub Cleanup">
    After account deletion, you must:

    **Remove OAuth App:**
    1. Go to Organization settings
    2. Click **OAuth Application Policy**
    3. Find **coderabbitai** and click the pencil icon
    4. Click **Revoke**

    **Uninstall GitHub App:**
    1. Go to Organization settings
    2. Click **GitHub Apps**
    3. Select **Configure**
    4. Click **Uninstall**

  </TabItem>
  <TabItem value="gitlab" label="GitLab Cleanup">
    Complete these steps:

    1. Remove OAuth App from User Settings > Applications
    2. Remove Webhook from Group > Project Settings > Webhooks
    3. Remove Bot User from Group > Manage > Members

  </TabItem>
  <TabItem value="azure" label="Azure DevOps Cleanup">
    1. Go to Project Settings > Service Hooks
    2. Delete CodeRabbit webhooks
    3. Remove CodeRabbit user or delete associated Personal Access Token
  </TabItem>
</Tabs>

:::warning Post-Deletion Steps
The platform-specific cleanup steps are necessary to completely remove CodeRabbit access. Without completing these steps:

- CodeRabbit may retain some platform permissions
- Signing back in will recreate minimal account data
  :::
