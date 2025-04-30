---
title: Discuss code reviews with CodeRabbit
description: Learn about CodeRabbit Pro's chat and agentic chat system
---

# CodeRabbit Chat

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

CodeRabbit Chat is a powerful pull-request-specific assistant designed to streamline your development workflow. You can interact directly in pull request review comments and pull request comments to ask questions, have CodeRabbit rewrite code, or generate new code.

## Invocation

To invoke CodeRabbit Chat, simply comment on a pull request using the handle `@coderabbitai` without any explicit command (so without the [explicit CodeRabbit commands](./commands.md)) in plain natural language.

The permission flow for the chat is the same as the deterministic CodeRabbit commands.

Upon being invoked, CodeRabbit processes your request and responds with the necessary assistance. This assistance may entail generating scripts, updating issue tracking systems, offering detailed code suggestions, or even submitting an entire pull request (with your consent).

## Features

### Script Writing

CodeRabbit Chat can automatically generate scripts in various programming languages (mainly shell scripting) to answer questions about your codebase. If incorrect or non-running or non-germane shell scripts are created, CodeRabbit goes and tries again, and the whole script iteration process will be displayed to you in an Analysis Flow.

All scripts are run in a secure sandboxed execution environment.

### Web Search

CodeRabbit Chat integrates real-time web search capabilities, enabling it to fetch up-to-date information to support its responses. The CodeRabbit Chat response will indicate this if it decides to search the web to answer your query.

Set `enabled` to false within `web_search` within `knowledge_base` within the config in order to turn this off.

### Code Graph Analysis Integration

CodeRabbit Chat is capable of analyzing definitions of code symbols from the symbol graph it generates from your codebase. CodeRabbit can use these code definitions to enhance context when providing a chat response and review comments. CodeRabbit Chat will indicate in its response if it has found relevant symbols and snippets surrounding those symbols in your codebase.

Set the environment variable `ENABLE_CODE_GRAPH` to false in self-hosted CodeRabbit instances to turn this feature off in self-hosted instances.

### Jira and Linear Integration

CodeRabbit Chat can deal with existing issue tracking system integrations in order to integrate with your existing issues. For details on setting up issue tracking integrations, see our [Issue Integrations](../integrations/issue-integrations.md) guide and [Issue Creation](./issue-creation.md) guide.

### Learnings Integration

CodeRabbit Chat can insert and delete Learnings from your Learnings database. Simply ask it to do so in plain natural language.

### Single Step Code Generation

For rapid prototyping and quick fixes, CodeRabbit Chat is capable of generating code snippets in a single step.

### Configuration Changes

CodeRabbit is also capable of managing its own configuration settings upon request. This self-management allows the assistant to dynamically adapt to changing project requirements. By simplifying configuration updates, CodeRabbit helps users quickly adjust to new workflows or requirements without interrupting the development process.

## Agentic Chat (Chat with Planning)

When facing complex coding challenges, CodeRabbit Agentic Chat supports multi-step agentic flows that involve detailed planning and execution. Once the multi-step workflow is complete, CodeRabbit can automatically issue a pull request for the changes so you can consent to the code changes or edit them. CodeRabbit can also place changes in the existing pull request branch or create copyable snippets.

Agent chat can be invoked explicitly with the `@coderabbitai plan` command.

CodeRabbit cannot perform further modifications to opened pull requests. From there, it's your turn to checkout the branch and improve it to satisfaction. We believe that this workflow provides a significant headstart to implementing code.

Agentic Chat is currently only available on Github issue, pull request and pull request review comments.

### Help and Feedback

Need help? Join our community on [Discord](https://discord.gg/coderabbit) or contact our support team.
