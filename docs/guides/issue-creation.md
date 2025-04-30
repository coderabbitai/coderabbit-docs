---
title: Create issues
description: Learn how to create issues directly through CodeRabbit
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

CodeRabbit provides seamless issue creation capabilities across multiple platforms including GitHub, GitLab, Jira, and Linear. You can create issues directly from pull request discussions or through the agentic chat interface.

## Creating Issues Through Agentic Chat

Using CodeRabbit's chat functions, you can create issues naturally through conversations in comments or comment threads. Simply mention `@coderabbitai` and ask to create an issue.

![Creating issues inline](/img/guides/create-issue-inline.png)

When using CodeRabbit's [agentic chat](./agent_chat.md), CodeRabbit will help you format and create the issue with appropriate details based on your description and desired issue platform.

![Creating issues through agentic chat](/img/guides/create-issue-agentic.png)

## Supported Platforms

### GitHub Issues

CodeRabbit can create GitHub issues directly in your repository. The integration works automatically without additional setup.

### GitLab Issues

Similar to GitHub, GitLab issue creation is supported out of the box.

### Jira

To create Jira issues, ensure you have [configured the Jira integration](../integrations/issue-integrations.md#jira) first.

### Linear

Make sure you have [set up the Linear integration](../integrations/issue-integrations.md#linear) to create Linear issues.

## Tips for Issue Creation

- Use natural language when creating issues through agentic chat
- Include code snippets when relevant
- Specify assignees if known
- Set appropriate priorities
- Add deadlines or milestones if applicable

For more detailed information about issue tracking integrations, see our [Issue Integrations](../integrations/issue-integrations.md) guide.
