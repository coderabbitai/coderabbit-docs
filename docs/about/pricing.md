---
title: Pricing
sidebar_label: Pricing
description: Learn about the plans, pricing, and subscription management of CodeRabbit.
---

Find all the information you need about CodeRabbit's plans and how to manage your monthly bill.

## Overview

- **Transparent Pricing**: CodeRabbit offers a per-seat pricing model that
  scales with your team size, ensuring you pay for what you need.
- **14-Day Free Trial**: All plans start with a generous 14-day free trial for
  CodeRabbit Pro for the entire organization, ensuring a commitment-free
  experience
- **No Credit Card Required**: You don't need a credit card to start your free
  trial.
- **CodeRabbit Seats** Every developer who submits a pull request is counted as
  a separate seat. Seats can be purchased for all or for a limited number of
  developers.

---

## Open Source

:::note
CodeRabbit Pro is free for all Open Source projects.
:::

- **Price**: $0/month
- Free forever
- No credit card required
- Unlimited public repositories

---

## Pro Plan

### Features

- This plan begins with a 14-day free trial, with no credit card required.
- Summarization of pull requests.
- Includes line-by-line reviews of all changes in the Pull Request
- Ability to have conversations with CodeRabbit bot.
- Reviews on unlimited public and private repositories within the organization.

### Pricing

- **Monthly**: $15 per month per contributing developer.
- **Annual**: $12 per month, billed annually per contributing developer.

### Usage Limits

These are the hourly usage limits for each developer per repository:

- Number of files reviewed per hour: **150 Files**
- Number of reviews per hour (includes incremental reviews): **8**
- Number of conversations per hour: **50**

---

## Free Plan

### Features

- Starts with a 14-day free trial of the Pro plan.
- Unlimited access for both public and private repositories.
- Summarization pull requests on private repositories.
- Reviews pull requests on public repositories.

### Pricing

- Free forever, no credit card required.

---

## Plan Comparison

| Feature                       | Free Plan        | Pro Plan        |
| ----------------------------- | ---------------- | --------------- |
| **Free Trial**                | 14-day free trial| 14-day free trial|
| **Private Repos**             | Limited access   | Unlimited access|
| **Public Repos**              | Unlimited access  | Unlimited access|
| **Pull Request Summarization** | Included         | Included        |
| **Line-by-Line Reviews**      | Public repos only | All repos       |
| **Conversational Bot**        | No               | Yes             |
| **Hourly Usage Limits**       | Limited          | 150 files/hour, 9 reviews/hour, 50 conversations/hour |
| **Price**                     | Free forever     | $15 per seat/mo |

---

## Subscription Management

### Pro Plan

- [GitHub/GitLab](docs/tools/tools.md) organization owners can purchase or introduce changes to the
  subscription.
- You can choose to manually purchase seats and assign them to developers, or
  have them assigned automatically as developers create pull requests.
- During the trial period, seat assignment is automatic, but the number of seats
  can be adjusted when purchasing the subscription.

![Seat Management for CodeRabbit Subscription](/img/about/cr_seat_manage_dark.png#gh-dark-mode-only)
![Seat Management for CodeRabbit Subscription](/img/about/cr_seat_manage_light.png#gh-light-mode-only)

### Free Plan

- Seats are assigned to new developers immediately

![Free Plan Seat Assignment - CodeRabbit](/img/about/cr_seat_free_dark.png#gh-dark-mode-only)
![Free Plan Seat Assignment - CodeRabbit](/img/about/cr_seat_free_light.png#gh-light-mode-only)

:::note
The subscription is limited to human users; bot users are not
supported. Thus, pull requests or merge requests created by bots will not be
reviewed.
:::
