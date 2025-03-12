---
title: Agentic Chat
sidebar_label: Agentic Chat
description: Learn about CodeRabbit Pro's agentic chat system
sidebar_position: 7
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

CodeRabbit Chat is a powerful pull-request-specific assistant designed to streamline your development workflow. You can interact directly in pull request review comments and pull request comments to ask questions, have CodeRabbit rewrite code, or generate new code.

# Invocation

To invoke CodeRabbit Chat, simply comment on a pull request using the handle @coderabbitai without any explicit command. The permission flow for the chat is the same as the deterministic CodeRabbit commands // some crap about commands

Upon being invoked, CodeRabbit processes your request and responds with the necessary assistance. This assistance may entail generating scripts, updating issue tracking systems, offering detailed code suggestions, or even submitting an entire pull request.

# Features

## Script Writing

CodeRabbit Chat can automatically generate scripts in various programming languages (mainly shell scripting) to answer questions about your codebase. If incorrect or non-running or non-germane shell scripts are created, CodeRabbit goes and tries again, and the whole script iteration process will be displayed to you in an Analysis Flow.

///////// example some crap
///////// example some crap

## Web Search

CodeRabbit Chat integrates real-time web search capabilities, enabling it to fetch up-to-date information to support its responses. The CodeRabbit Chat response will indicate this if it decides to search the web to answer your query.

// example
// how to turn it off

## Jira and Linear Integration

CodeRabbit Chat is integrated with Jira and Linear.

// link to authing it

## Learnings Integration

CodeRabbit Chat can insert and delete Learnings from your Learnings database. Simply ask it to do so in plain natural language.

////// example some crap

## Single Step Code Generation

For rapid prototyping and quick fixes, CodeRabbit Chat is capable of generating code snippets in a single step.

// example

## Multi-Step Agentic Flow with Planning

/// github only lol
/// early access lol

When facing complex coding challenges, CodeRabbit Chat supports multi-step agentic flows that involve detailed planning and execution. Once the multi-step workflow is complete, CodeRabbit can automatically issue a pull request for the changes, ensuring that even intricate processes are handled efficiently.

// example

## Configuration Changes

CodeRabbit is also capable of managing its own configuration settings upon request. This self-management allows the assistant to dynamically adapt to changing project requirements. By simplifying configuration updates, CodeRabbit helps users quickly adjust to new workflows or requirements without interrupting the development process.

// example

## Help

Need help? Join our community on [Discord](https://discord.gg/coderabbit) or contact our support team.
