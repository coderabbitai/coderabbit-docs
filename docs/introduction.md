---
id: introduction
title: What is CodeRabbit?
sidebar_label: Introduction
sidebar_position: 1
description:
  CodeRabbit is an innovative, AI-first code reviewer. It provides context-aware
  review feedback on a pull request within minutes, thereby significantly
  reducing the time and effort associated with manual code reviews.
slug: "/"
---

**CodeRabbit** is an innovative, AI-first code reviewer. It provides
context-aware review feedback on a pull request within minutes, thereby
significantly reducing the time and effort associated with manual code reviews.
Additionally, it brings a different perspective to the reviews and finds issues
often missed by the human eye. Developers can chat with the bot within the code,
which allows them to provide additional context, ask questions, or have the bot
generate code. It learns from your suggestions and gets better over time.

**CodeRabbit** seamlessly integrates with GitHub and GitLab repositories,
performing continuous, incremental reviews for each commit within a pull
request. Review feedback is sent back to the pull requests and can be directly
committed.

<iframe width="560" height="315" src="https://www.youtube.com/embed/3SyUOSebG7E?si=i0oT9RAnH0PW81lY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**CodeRabbit** integrates into code repositories using GitHub or GitLab webhooks
and monitors events related to Pull Request (PR) and Merge Request (MR) changes.
A comprehensive review is performed when a PR or MR is created, and for
incremental commits and comments addressed to the bot. The feedback is then sent
directly back to the PR or MR.

![CodeRabbit Flow](about/images/CodeRabbitFlow.png)

## Data, Privacy, and Security

**CodeRabbit** does not use data collected during code reviews to train or
influence the models. Queries to the Large Language Models (LLMs) are ephemeral
and there is zero retention on LLMs. Neither we nor the LLMs provider(s) share
any data collected during the code review process with third parties.

Data storage: Code downloaded during the review process is temporarily stored in
memory and deleted once the review is completed. The code is not stored or used for
any other purpose. However, CodeRabbit enhances future reviews for your organization by
storing the embeddings of the learnings generated from chat conversations. Additionally,
it integrates embeddings from issues in workflow systems (Liner, Jira, GitHub/GitLab issues)
to assess the impact of code changes on existing issues.

Compliance and Data Privacy: Your data is kept confidential, isolated by the
organization, and used only to improve your organization reviews. Data storage
complies with SOC2 Type II and GDPR standards.

Opting Out: You can choose to opt out of data storage at any time. Opting out
won't affect your access but will limit the personalization of the reviews.

## CodeRabbit with other AI code generators

Code reviews remain essential, whether the code is written by a human or a bot.
This is mainly because the perspective of the reviewer differs from that of the
code generator, whether human or machine. This distinction is precisely why
human peer reviews have been effective for so long. While AI-powered
code-generation tools like GitHub Copilot hold immense potential, it's important to recognize that
these generators are still in their early stages and may not be equipped to
auto-generate meaningful code for moderately complex applications.

## CodeRabbit is different

Traditional code review tools excel in linting and static analysis, but they
fall short in providing context-aware, conversational feedback with actionable
suggestions for changes that can be directly committed. On the other hand,
**CodeRabbit** leverages AI to understand the intent behind the code changes and
provide human-like feedback for applying the best practices.