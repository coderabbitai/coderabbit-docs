---
title: Schedule reports
description: Learn how to set up automated recurring reports with CodeRabbit Pro
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

CodeRabbit Pro offers automated recurring reports that provide insights into your GitHub organization's activities. These reports can be customized and delivered through various channels to help teams stay informed about development progress.

## Setting Up a Recurring Report

1. Navigate to **Recurring Reports** in the [CodeRabbit dashboard](https://app.coderabbit.ai/reports/recurring)
2. Click **Create Report**
3. Configure the following settings:

### Schedule Configuration

![Schedule Configuration](/img/guides/report-params.png)

The schedule configuration allows you to set precise timing for your reports:

#### Frequency Options

- **Days of Week**

  - Select any combination of days (Sun-Sat)
  - Set frequency (every 1-3 weeks)
  - Ideal for weekly team syncs or sprint reviews

- **Days of Month**
  - Select specific dates (1-31)
  - Special date handling:
    - 31st: Runs on the last day of every month
    - 30th: Skips February
    - 29th: Only runs in February during leap years

#### Time Settings

- Set specific time for report generation
- Choose from comprehensive timezone list (e.g., America/New_York)
- Reports run at the specified time in the selected timezone

:::tip Timezone Consideration
Choose a time that works for all team members, especially for distributed teams across different time zones.
:::

### Report Parameters

Reports can be filtered using multiple parameters:

- **Repositories**: Select specific repositories to monitor
- **Labels**: Filter by GitHub labels with operators:
  - IN: Match any selected label
  - ALL: Match all selected labels
- **Users**: Filter by specific GitHub users
- **Teams**: Filter by organization teams
  - Note: Team filtering is not available for GitLab repositories

:::note Parameter Configuration
Each parameter can be:

- Added or removed as needed
- Combined with other parameters for precise filtering
- Modified using different operators
  :::

### Report Content

Reports include comprehensive PR information:

- PR metadata:
  - Title and description
  - Creation and last activity dates
  - Status (merged, mergeable, draft)
  - State (open, closed, merged)
- Collaboration details:
  - Labels and reviewers
  - Comments and discussions
  - Team associations
- Repository context
- Author information

:::info Stale PR Detection
PRs are marked as stale after 168 hours (7 days) of inactivity. This helps identify potential workflow bottlenecks.
:::

### Report Templates

CodeRabbit offers several built-in templates:

1. **Daily Standup Report**: A concise summary of pull requests and activities.
2. **Sprint Report**: A structured overview of sprint goals, completed tasks, in-progress work, and blockers.
3. **Release Notes**: A high-level changelog with summary and significant changes.
4. **[Custom Templates](custom-reports.md)**: Create your own format using prompts. Allows for endless customization such as native language reporting (Japanese, Spanish, French, etc.), custom formatting, custom titles, and more.

Example custom prompt:

```text
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

![Report Delivery Platforms](/img/guides/report-platforms.png)

#### Email

- Enter individual email addresses
- Use distribution lists for team-wide delivery

#### Slack/Discord

1. Connect your workspace through OAuth
2. Select target channels
3. CodeRabbit bot will be installed automatically
4. If installation fails check the [slack service](https://slack-status.com/) or [discord status](https://discordstatus.com/) page for any outages.

#### Microsoft Teams

1. Create a webhook in your Teams channel
2. Add the webhook URL to CodeRabbit
3. Select target channels

:::tip
Create separate reports if you need to send to multiple channels with different formats. Learn more about [custom report formats](./custom-reports.md).
:::

## Managing Reports

<!-- ### Example Results

Example results help you understand and standardize your report output format. After your first report run, you'll see example results in the report configuration:

- **Viewing Examples**: Example results appear in the report editor after the first run.
- **Editing**: You can modify the example to standardize future report formats.
- **Clearing**: To generate new examples erase the current example and save your report.

Here is an example of a daily standup report:

![Azure DevOps Daily Standup Report Example](/img/guides/example-report-1.png)

We see the links are to the API and not the web interface. We can modify the example so that future reports will include the web links in a more readable format:

![Edited Azure DevOps Daily Standup Report Example](/img/guides/example-report-2.png) -->

### Preview Reports

Test your configuration using the **Preview Report** button to generate a sample report instantly.

### Grouping Options

Reports can be organized hierarchically using groups and subgroups:

#### Primary Grouping

Select from these options to organize your main report structure:

- **None**: No grouping, flat list of items
- **Repository**: Group by source repository
- **Label**: Group by PR labels
- **Team**: Group by team ownership
- **User**: Group by PR author

#### Subgrouping

After selecting a primary group, you can add a secondary level of organization:

- Choose any remaining grouping option for further categorization
- Subgroups create a nested hierarchy within primary groups
- Select "None" to use only primary grouping

:::tip
Choose grouping options that match your team's workflow. For example:

- Use Repository → Team for large multi-team organizations
- Use User → Label to track individual contributions by type
- Use Team → Repository to monitor team activity across repos

:::

### Report Lifecycle Management

Control your reports through their entire lifecycle:

#### Editing Reports

- Make your desired changes to any configuration settings
- Click the **Save** button to apply your changes
- Changes take effect from the next scheduled run

:::tip
Remember to click **Save** when you're done making changes. Your modifications will be discarded if you navigate away without saving.
:::

#### Disabling Reports

- Toggle the **Active** switch to temporarily pause a report
- Disabled reports:
  - Maintain their configuration
  - Skip scheduled runs
  - Can be re-enabled at any time
  - Show "Disabled" status in the dashboard

#### Deleting Reports

- Click the **Delete** button (trash icon) next to the report
- Confirm deletion in the modal
- Note: This action is permanent and cannot be undone
- All report history and configuration will be removed

:::warning
Deleting a report will immediately stop all scheduled runs and remove access to historical reports. Consider disabling instead of deleting if you might need the report again.
:::

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

- [Custom Reports](./custom-reports.md)
- [On-demand Reports](./ondemand-reports.md)
- [API Documentation](https://api.coderabbit.ai/api/swagger/)
