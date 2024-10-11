---
id: Get Started
title: Get Started
sidebar_label: Introduction
sidebar_position: 1
description:
  CodeRabbit is an AI-powered code reviewer offering real-time, context-aware
  feedback on pull requests, reducing manual effort in code reviews.
slug: "/"
---
## What is CodeRabbit?

>**CodeRabbit** is an AI-powered code reviewer that delivers context-aware feedback on pull requests within minutes, reducing the time and effort needed for manual code reviews. It provides a fresh perspective and catches issues that are often missed, enhancing the overall review quality.

Developers can interact directly with the bot within the code, offering additional context, asking questions, or even having the bot generate code. Over time, **CodeRabbit** learns from user input and improves its suggestions.

:::tip
> See CodeRabbit in action and watch the demo video below to see how it delivers real-time, context-aware feedback on your pull requests in just a few minutes.
:::

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/3SyUOSebG7E?si=i0oT9RAnH0PW81lY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

## Integration with GitHub and GitLab

>**CodeRabbit** integrates with both GitHub and GitLab repositories to deliver continuous and incremental reviews for each commit in a pull request (PR) or merge request (MR). Review feedback is automatically sent back to the PR/MR and can be committed directly.

It works via GitHub/GitLab webhooks, monitoring Pull Request (PR) and Merge Request (MR) events. A comprehensive review is performed when a PR or MR is created, and for
incremental commits and comments addressed to the bot. The feedback is then sent directly back to the Pull Request or Merge Request.

![CodeRabbit Code Review Flow showing how AI integrates with GitHub and GitLab for continuous pull request feedback.](/img/about/coderabbit-flow.png "CodeRabbit Code Review Flow")

## Data Privacy and Security

>**CodeRabbit** does not use data collected from code reviews to train or influence its models. All queries to Large Language Models (LLMs) are ephemeral, with zero retention. No data is shared with third parties.

- **Temporary Storage**: Code is temporarily stored in memory during the review process and deleted afterward.
- **Stored Embeddings**: While the code itself isn’t stored, **CodeRabbit** stores embeddings based on chat conversations and workflow systems (Linear, Jira, GitHub/GitLab issues) to improve future reviews.
- **Compliance**: All data is kept confidential, isolated by organization, and complies with **SOC2 Type II** and **GDPR** standards.

### Opting Out

You can opt out of data storage at any time without affecting your access to **CodeRabbit**.
:::warning
However, opting out may reduce the level of personalized review feedback.
:::

## Try CodeRabbit Now

>Ready to experience **CodeRabbit** in action?

:::tip
For open source projects CodeRabbit Pro is **_FREE_**, forever.
- No credit card required
- Unlimited public repositories
:::

<div style={{textAlign: 'left', marginTop: '20px'}}>
  <a href="https://app.coderabbit.ai/login" className="button button--primary button--lg">Start reviewing PR Now</a>
</div>


