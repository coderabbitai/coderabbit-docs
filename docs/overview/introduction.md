---
id: introduction
title: Introduction
sidebar_label: Introduction
sidebar_position: 1
description:
  CodeRabbit is an AI-powered code reviewer offering real-time, context-aware
  feedback on pull requests, reducing manual effort in code reviews.
slug: "/"
---

# Introduction

This page provides a conceptual introduction to CodeRabbit. For a hands-on tutorial, see [Quickstart](/getting-started/quickstart/).

**CodeRabbit** is an AI-powered code reviewer that delivers context-aware feedback on pull requests within minutes, reducing the time and effort needed for manual code reviews. It complements manual reviews by providing a fresh perspective and catching issues that manual reviews often miss, enhancing the overall review quality.

Developers can interact directly with the CodeRabbit bot within their existing Git platform's pull request interface to add context, ask questions, or even have the bot generate code. Over time, CodeRabbit learns from user input and improves its suggestions.

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/3SyUOSebG7E?si=i0oT9RAnH0PW81lY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

## Core features

Core CodeRabbit features include the following:

- Integrates rapidly with popular Git platforms and workflows.
- Applies dozens of open-source, industry-standard code analyzers to every commit.
- Implements code reviews as familiar pull-request comments.
- Works with contributors through natural-language conversation in comments.
- Learns and adapts to your team's code style and review preferences.
- Provides an observability dashboard of code-contribution activity.
- Practices strong privacy and security, with no retention of analyzed code.
- Offers free use for public repositories, and flexible pricing for private codebases.

## Seamless workflow integration

CodeRabbit shares its reviews as comments attached to pull requests, using the same Git platform that your team already uses. Further commits in the same pull review prompt CodeRabbit to make further reviews, using the earlier reviews as context.

Each time that it performs a code review, CodeRabbit runs the relevant code changes through [an array of industry-standard code linters, security analyzers, and other tools](/tools/). CodeRabbit synthesizes the output of these tools into its reviews, offering a high-level analysis that can suggest areas for further focus and improvement.

Your team can have conversations with CodeRabbit about its reviews by replying to it with follow-up comments on pull requests, asking it questions or making observations about the review using natural language. CodeRabbit continues the conversation appropriately, offering further insights about the code changes, or adjusting its own review style based on feedback.

### Customizable review preferences

As you interact with CodeRabbit through chat, it learns the review preferences of your team, and applies them to all future reviews on a given repository.

For example, if CodeRabbit uses a linter to suggest that your pull request use four-space indentations, but your team uses a two-space indentation style, then you can reply to CodeRabbit's pull-request comment to tell it exactly that. CodeRabbit acknowledges your feedback and adjusts all of its subsequent reviews with that repository appropriately.

For a video introduction to this feature, see [CodeRabbit Learnings](https://www.youtube.com/watch?v=Yu0cmmOYA-U).

If you need to fine-tune CodeRabbit's behavior beyond this, then you can [add a CodeRabbit-specific configuration file](/getting-started/configure-coderabbit) to your repository, or use the CodeRabbit web UI to set further preferences. This file can include [path-based instructions](/guides/review-instructions) for how CodeRabbit should review different files within your codebase.

No matter how you tune and customize CodeRabbit, its default settings make it useful out of the box, able to meaningfully review pull requests within minutes of its introduction to a repository.

### Platform integration options

CodeRabbit integrates in just a few clicks with many popular Git platforms:

- GitHub, including GitHub Enterprise Server
- GitLab, including self-managed GitLab
- Azure DevOps
- Bitbucket Cloud

In addition, CodeRabbit can integrate with a number of popular workflow systems:

- Jira
- Linear
- CircleCI

## Data privacy and security

CodeRabbit does not use data collected from code reviews to train or influence its models. All queries to large language models (LLMs) are ephemeral, with zero retention. No data is shared with third parties.

- **Temporary Storage**: CodeRabbit temporarily stores your code in memory during the review process, and deletes it afterward.
- **Stored Embeddings**: While CodeRabbit doesn't store your code, it does store embeddings based on chat conversations and workflow systems (Linear, Jira, GitHub/GitLab issues) to improve future reviews.
- **Compliance**: All data is kept confidential, isolated by organization, and complies with SOC2 Type II and GDPR standards.

You can opt out of data storage at any time without affecting your access to CodeRabbit. Opting out might reduce the level of personalized review feedback that CodeRabbit can provide you.

## Flexible pricing, free for public repositories

Public repositories can use the Pro tier of CodeRabbit at no charge, including all of the code-review features described on this page. Rate limits might apply.

For private repositories, a number of pricing tiers are available. These range from a Free tier that offers unlimited code-change summaries, to an Enterprise tier with access to advanced features and SLA support. For more information, see [Pricing](https://www.coderabbit.ai/pricing).

## What's next

- [Quickstart](/getting-started/quickstart/) lets you experience your first CodeRabbit code review first-hand.

- [Why CodeRabbit?](/overview/why-coderabbit) dives further into the philosophies and technologies that drive CodeRabbit.
