---
title: High-level Features
sidebar_label: High-level Features
description: Learn how CodeRabbit works in a pull request review.
---

### 1. Pull Request Summary {#pull-request-summary}

Generated upon the creation of a pull request and subsequently updated with each
incremental request.

High-Level Summary: This offers a concise overview of the changes in the pull
request. It helps the team, including those without technical expertise, to
quickly understand the changes and the impact on the product.

![Summary Overview](/img/about/Summary-Overview.png)

Walkthrough: A detailed code walkthrough to understand the changes in each file
that is part of the pull request, followed by a celebratory poem about the
changes.

![Summary Walkthrough](/img/about/Summary-Walkthrough.png)

### 2. Code Review feedback {#code-review-feedback}

Review feedback is posted as review comments on the lines of the code that
changed for each file. Code suggestions are given in a Diff format, which either
be copied or committed within the pull request with a single click.

![Review Feedback](/img/about/ReviewFeedback.png)

A review status is generated for each commit that is reviewed. It displays the
commit IDs that were reviewed, the files examined and ignored, as well as the
additional comments generated for each review, and so on. Review status is
useful for understanding the auxiliary context of the review.

![Review Status](/img/about/ReviewStatus.png)

### 3. Chat with CodeRabbit {#chat-with-coderabbit}

CodeRabbit provides conversational capability that allows developers and the
reviewers to ask questions, generate code, and get feedback in the context of
changes. Just comment on the CodeRabbit review to start the conversation.
CodeRabbit learns from your interactions and gets smarter over time. The more
you chat, the better it gets.

![Chat](/img/about/chat.png)

### 4. Issue Validation {#issue-validation}

Pull request changes are validated against the linked GitHub or GitLab issue and
identifies all other issues which might be affected by this change.

![Issue Validation](/img/about/issue-validation.png)
