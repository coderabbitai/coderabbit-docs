---
title: Jira Integration
description: Integrate CodeRabbit with Jira.
sidebar_label: Linked and Related Issues
image: "/preview_meta.jpg"
---

<head>
 <meta charSet="utf-8" />
  <meta name="title" content="Utilize CodeRabbit with Jira" />
  <meta name="description" content="Integrate CodeRabbit with Jira" />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://coderabbit.ai/" />
  <meta property="og:title" content="Utilize CodeRabbit with Jira" />
  <meta property="og:description" content="CodeRabbit: AI-powered Code Reviews" />
  <meta property="og:image" content="/preview_meta.jpg" />

  <meta name="twitter:image" content="https://coderabbit.ai/preview_meta.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Utilize CodeRabbit with Jira" />
  <meta name="twitter:description" content="CodeRabbit: AI-powered Code Reviews" />
</head>

### Linking Issues

After successfully integrating CodeRabbit with Jira, you gain the ability to link Jira issues directly to your pull requests.

To link a Jira issue to a pull request, simply include the Jira Issue ID in the pull request description. For instance:

Jira issue: TEK-01

This indicates that the pull request addresses a specific issue, such as fixing a bug. When the pull request is submitted with the associated Jira Issue ID, CodeRabbit automatically retrieves the corresponding issue and evaluates whether the pull request fulfills its objectives.

:::info
You can view the assessment outcome in the Walkthrough section of CodeRabbit's Review
:::

Upon posting the review findings, CodeRabbit provides details about the issue's objectives, confirms whether they were met, and offers additional explanations if needed.

### Finding Related Issues

One of the key features of CodeRabbit's Jira integration is its ability to discover existing related Jira issues addressed in the pull request. Leveraging RAG (Retrieval-Augmented Generation), CodeRabbit enhances its AI capabilities. RAG empowers AI models to incorporate external data sources beyond their training sets or predefined parameters, thereby enhancing their responses to given prompts.

After integrating with Jira, CodeRabbit scans through open issues, indexing them for future reference. This means that pre-existing issues are retrieved, indexed into a Vector database, and subsequently searched for each new pull request.
:::info
Indexing occurs periodically on a scheduled basis. As a result, newly created issues or those not yet scheduled for indexing may not be immediately detected by CodeRabbit.
:::

If any related issues are identified, CodeRabbit highlights them, providing insights into the pull request's coverage and facilitating collaboration between developers and reviewers.
