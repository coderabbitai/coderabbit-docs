---
title: MCP integrations
description: MCP integrations allow CodeRabbit to access your documentation, project management tools, knowledge bases, Figma designs, and more.
---

:::caution
Pro feature — Early Access only
:::

You can enable CodeRabbit to connect to external tools and data sources through the Model Context Protocol (MCP) integration. This allows CodeRabbit to serve as the client, and grants it with richer contextual understanding for:

- Code reviews
- The validation step for code suggestions
- Chat in the PR

Use the MCP integration as a way to access your documentation, project management tools, knowledge bases, Figma designs, and more.

## Considerations

A few things to keep in mind:

- CodeRabbit acts as the MCP client, not the server. It ingests data.
- The constraint is understanding what MCP data can be helpful for code reviews. See above for how CodeRabbit uses MCP data.
- This approach unlocks integrations in a way that wasn't possible before. You don't have to wait for CodeRabbit to have a formal integration, if it has an MCP server, we can connect to it.

## Setup

### Configuration steps

1. Navigate to Integrations Page within your CodeRabbit app settings and select the new MCP Server tab
2. To add a new MCP server, click "Add MCP Integration" and provide your server connection details along with the name
3. Complete the authentication process for your MCP server
4. Enable or disable individual MCP tools for each server

## How it works

### During code reviews

CodeRabbit automatically calls relevant MCP tools during analysis to:

- Gather additional review context.
- Validate and enhance suggested review comments.

Enhanced review comments will include enriched insights while maintaining your existing workflow. Tools used during analysis are listed under "Additional context used."

### In chat interactions

MCP integration enhances chat by:

- Retrieving contextual information based on discussion topics
- Accessing external documentation and knowledge bases
