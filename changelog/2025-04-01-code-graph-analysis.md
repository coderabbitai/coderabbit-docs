---
title: Code Graph Analysis
date: '2025-04-01'
slug: code-graph-analysis
tags:
  - feature
  - improvement
  - bugfix
  - docs
  - tools
hide_table_of_contents: true
heroImage: /img/changelog/code-graph-analysis-hero.webp
permalink: /changelog/code-graph-analysis
---

### Code Graph Analysis

Code reviews automatically analyze dependencies across multiple files to enhance the context from code definitions (e.g., types) to improve accuracy and reduce false positives.

This is a very powerful feature that gathers context behind code changes in one file that have dependencies in another file.

🔍 See it in action: Review details → Additional context used → Code definitions
In the review status message. It is automatically enabled for all users.

### Automatically Run a Web Query to Include Latest Information

CodeRabbit now performs Web Queries automatically to include the most recent publicly available information — even if it wasn't included in the latest LLM update. This feature is enabled by default for all users, and you may notice it being used in review comments and chat responses.

Web Queries allow CodeRabbit to fetch the latest documentation and external content to improve the accuracy and relevance of its output. You can disable this feature by setting web_search: false in your knowledge_base settings.

### CodeRabbit Auto-Resolve

CodeRabbit can now detect when suggested changes have been implemented and automatically resolve the related review threads on your behalf.

### Dashboard Redesign

```mdx-code-block
import ProPlanNotice from "@site/src/components/ProPlanNotice.mdx"

<ProPlanNotice />
```

New and Improved Dashboards to provide more useful feedback such as:

- Avgerage PR Merge Time
- Weekly Pull Request Activity
- Number of PRs Reviewed
- Acceptance rate of CodeRabbit Suggestions
- Tool Findings
- Review Feedback Breakdown

and much more! Check out the new dashboard to view these metrics about your organization.

### Multi-Step Agent Chat

```mdx-code-block
<ProPlanNotice />
```

We're thrilled to introduce agentic planning on GitHub for CodeRabbit chat as an Experimental feature for Early Access users. This enhancement lets you make more advanced requests that span multiple files. Just add a review comment on any pull request tagging `@coderabbitai` along with your natural language request for a code change, and the chat will develop a plan for complex modifications. Upon reviewing the plan and getting your consent, CodeRabbit will emit a stacked PR to your PR for those code changes.

### Additional Static Analysis Support

We are continually expanding our support for static analysis tools. We've recently added support for:

- SQLFluff
- Added Oxlint for faster linting
  - Oxlint is a blazingly fast JavaScript/TypeScript linter written in Rust
  - Replaces ESLint for basic linting while maintaining ESLint for more complex rules
  - Up to 50-100x faster than traditional ESLint
