---
title: Scheduled Reports
sidebar_label: Scheduled Reports
description: Learn how to set up automated recurring reports with CodeRabbit Pro
sidebar_position: 7
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

CodeRabbit Pro offers automated recurring reports that provide insights into your GitHub organization's activities. These reports can be customized and delivered through various channels to help teams stay informed about development progress.

## Setting Up a Recurring Report

1. Navigate to **Recurring Reports** in the CodeRabbit dashboard
2. Click **Create New Report**
3. Configure the following settings:

### Schedule Configuration

- **Frequency**: Choose between weekly, monthly, or custom intervals
- **Days**: Select specific days of the week or month
- **Time**: Set the time for report generation in your timezone

:::note
Reports summarize events between scheduled intervals. For example, a Monday report will include activities from Friday through Monday.
:::

### Report Parameters

- **Repositories**: Select specific repositories to monitor
- **Labels**: Filter by specific GitHub labels
- **Users**: Filter by specific GitHub users
- **Teams**: Narrow focus to specific teams within your organization

### Report Templates

CodeRabbit offers several built-in templates:

1. **Daily Standup Report**: A concise summary of pull requests and activities
2. **Sprint/Release Notes**: Detailed summaries combining related changes
3. **Custom Templates**: Create your own format using prompts

Example custom prompt:

```
Please provide a summary of:
- All pull request activities
- Related issues and comments
- Code review discussions
- Quality gate status

Do not include:
- Bot conversations
- Sequence diagrams
```

### Communication Channels

Configure where your reports will be delivered:

#### Email

- Enter individual email addresses
- Use distribution lists for team-wide delivery

#### Slack/Discord

1. Connect your workspace through OAuth
2. Select target channels
3. CodeRabbit bot will be installed automatically

#### Microsoft Teams

1. Create a webhook in your Teams channel
2. Add the webhook URL to CodeRabbit
3. Select target channels

:::tip
Create separate reports if you need to send to multiple channels with different formats
:::

## Managing Reports

### Preview Reports

Test your configuration using the **Preview Report** button to generate a sample report instantly.

### Grouping Options

Organize report content by:

- Repository
- Labels
- Teams

This helps keep information organized for larger organizations or teams.

## Best Practices

1. **Scheduling**
   - Align report timing with your team's workflow
   - Consider timezone differences for distributed teams

2. **Content**
   - Keep prompts focused on actionable information
   - Use grouping to improve readability
   - Exclude unnecessary details that may create noise

3. **Distribution**
   - Use channels your team actively monitors
   - Consider creating separate reports for different audiences (e.g., management vs. development team)

## Related Resources

- [On-demand Reports](./ondemand-reports.md)
- [API Documentation](https://api.coderabbit.ai/api/swagger/)
