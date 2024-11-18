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

:::tip Pro Tip
Just created a PR right before installing CodeRabbit? or drop a `@coderabbitai full review` comment in old PR to get it reviewed.
:::

![CodeRabbit- Full-Review](/img/faq/full-review.png)

### Customization Options

- **Language Settings**: Configure review language in repository settings
- **Review Rules**: Customize via [Review Instructions](./guides/review-instructions.md)
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
4. Customize via [Review Instructions](./guides/review-instructions.md)

:::tip Collaboration Mode
When team members are active in PRs, use `@coderabbitai` to engage the bot.
:::

### Usage Limits

| Feature        | Free/Trial                    | Pro Plan      |
| -------------- | ----------------------------- | ------------- |
| Files per hour | 200                           | 200           |
| Reviews        | 3 back-to-back, then 3/hour   | Higher limits |
| Conversations  | 25 back-to-back, then 50/hour | Higher limits |

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
Visit our [Support](./about/support.md) page for additional assistance or reach out to our team on [discord](http://discord.gg/coderabbit).
:::
