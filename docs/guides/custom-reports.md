---
title: Custom Reports
sidebar_label: Custom Reports
description: Learn how to create custom reports with CodeRabbit Pro's flexible reporting system
sidebar_position: 7
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

CodeRabbit Pro allows you to create custom reports tailored to your specific needs using a flexible prompt-based system. This guide will help you understand how to create effective custom reports.

## Understanding Custom Reports

Custom reports allow you to:

- Define exactly what information you want to see
- Specify the format and structure of the report
- Set custom filtering and grouping rules
- Generate reports in different languages

## Creating Custom Report Templates

### Basic Structure

A custom report template consists of instructions that tell CodeRabbit what information to include and how to present it. Here's a basic example:

```text
Please provide a summary of:
- All merged pull requests
- Critical bug fixes
- Code review discussions

Group by:
- Repository
- Team

Format using:
- Bullet points for changes
- Tables for statistics
```

### Example for different languages

Japanese:

```text
レポートを英語ではなく日本語で送信してください。

以下の要約を提供してください：
- すべてのプルリクエスト活動
- コードレビューの議論
```

French:

```text
Veuillez envoyer le rapport en français et non en anglais.

Veuillez fournir un résumé de :
- Toutes les activités de demandes de fusion
- Discussions sur la révision de code
```

### Available Data Points

Your custom reports can access the following PR information that you can reference in your prompts:

#### Pull Request Status

- `Merged`: boolean (true/false) - Whether the PR has been merged
- `Draft`: boolean (true/false) - Whether the PR is in draft state
- `State`: string ("open"/"closed") - Current state of the PR
- `Mergeable`: boolean (true/false) - Whether the PR can be merged
- `Is stale`: boolean - Whether PR has been inactive for over 168 hours

#### Basic Information

- `Pull request number`: number - The PR's identifier
- `Title`: string - PR title
- `URL`: string - Link to the PR
- `Author name`: string - PR creator's username
- `Created at`: datetime - When the PR was created
- `Last activity`: datetime - Most recent activity timestamp
- `Closed at`: datetime (if applicable) - When the PR was closed

#### Additional Context

- `Labels`: array of strings - All labels applied to the PR
- `Reviewers`: array of strings - Assigned reviewers' usernames
- `Description`: markdown - Full PR description
- `Summary`: string - AI-generated summary of changes
- `Comments`: array of objects
  - `username`: string - Comment author
  - `body`: markdown - Comment content

Here's an example prompt that uses these data points:

```text
Generate a summary with the following format for each PR:

## [PR Title](URL)
**Status**: {Use these symbols based on state}
- 🔀 if Merged is true
- 📝 if Draft is true
- 💬 if State is "open"
- 🔒 if State is "closed" and not merged
Add ⚠️ if Is stale is true

**Author**: {Author name}
**Created**: {Created at}
**Labels**: {Labels joined by commas}
**Reviewers**: {Reviewers joined by commas}

### Summary
{Summary limited to 50 words}

### Recent Activity
{List last 3 comments with username and content}
```

### Formatting Options

CodeRabbit supports markdown formatting in custom reports. You can use:

- Headers (`#`, `##`, `###`)
- Lists (bullet points and numbered)
- Tables
- Code blocks
- Bold and italic text
- Links

### Headers and Titles

The name you give to each report in the CodeRabbit menu will be used for the first line of any report or the subject for emails. For example if your report is named `Executive Summary Template` then this string will appear on the subject of your emails and start of all message chains.

When using the `Preview Report` button in the CodeRabbit menu, the subject will begin with `Preview: <report name>`.

The reports will also have an overall title describing the report content such as `Pull Request Summary Report (January 2025)`.

To change these details of this overall title you should include specific instructions in your custom prompt with examples such as:

```text
- Do not add a date to the titles like "Pull Request Summary Report (January 2025)" it should just be "Pull Request Summary Report"
```

### Language Support

You can generate reports in multiple languages by specifying the ISO language code in your template. For example:

```text
Language: fr
Please provide a summary of:
- All pull request activities
- Code review discussions
```

## Advanced Features

### Filtering

Include specific filtering instructions in your template:

```text
Include only:
- PRs with "critical" or "bug" labels
- Changes to production code
- Reviews from senior developers

Exclude:
- Automated commits
- Documentation changes
- Dependencies updates
```

### Custom Grouping

Organize information using custom grouping rules:

```text
Group by:
1. Priority (High/Medium/Low)
2. Component (Frontend/Backend/Infrastructure)
3. Team (Team A/Team B)

Within each group, sort by:
- Activity date (newest first)
- Impact level
```

### Time-Based Analysis

Add temporal analysis to your reports:

```text
Provide:
- Week-over-week comparison
- Trend analysis for the past month
- Velocity metrics
- Time to merge statistics
```

## Best Practices

1. **Be Specific**

   - Clearly define what should be included/excluded
   - Use precise language to avoid ambiguity
   - Specify exact metrics you want to track

2. **Structure Matters**

   - Start with high-level summaries
   - Use consistent grouping patterns
   - Include clear section breaks

3. **Keep it Relevant**

   - Focus on actionable information
   - Avoid redundant data points
   - Consider your audience's needs

4. **Optimize Readability**

   - Use appropriate formatting
   - Include visual breaks
   - Maintain consistent styling

5. **Use Examples**
   - Include "do this" and "don't do this" examples (especially for titles)
   - Demonstrate proper formatting patterns
   - Show concrete use cases for different report types
   - Help maintain consistency across teams
   - Avoid ambiguity in report generation

Try to use `<overall_summary>` and `<example>` tag blocks to keep consistency across reports:

```text
Use the <overall_instructions> to guide the content of the summary and base the formatting of the summary on the <example>. Be sure to change the PR link based on the platform of the repository.

<overall_instructions>
Generate a summary of each pull request in the following bullet point format:

- PR Link
- Title
- PR State: Provide the state of the PR based on the following conditions:
  - If 'Merged: true' set 'PR State: 🔀 Merged'
  - Else If 'Draft: true' set 'PR State: 📝 Draft'
  - Else If 'State: open' set 'PR State: 💬 Open'
  - Else If 'State: closed' and 'Merged: false' set 'PR State: 🔒 Closed'
  - Else set 'PR State: ❓ Unknown'
  - If the PR is stale, add '⚠️ Stale' at the end of the PR State.
- Mergeable (if PR State if not 'Merged'): Provide the mergeable status of the PR as 'Mergeable' or 'Not Mergeable'.
- Summary: Provide a short summary of the PR under 50 words.
</overall_instructions>

<example>
- **PR Link:** [#3001](https://github.com/mygithuborg/myrepo/pull/3001)
- **Title:** feat: Add Dynamic Theme Switching Feature
- **PR State:** 💬 Open
- **Mergeable:** Mergeable
- **Summary:** Introduces dynamic theme switching to improve UI accessibility. Adds support for dark/light mode toggling and updates color schemes across the application for an enhanced user experience.

- **PR Link:** [#3](https://github.com/mygithuborg/myotherrepo/pull/3)
- **Title:** Chore: Update Third-Party Dependencies for Security Enhancements
- **PR State:** 🔀 Merged
- **Summary:** Updates several third-party dependencies to address security vulnerabilities and improve performance. Includes minor bug fixes and adjustments to maintain compatibility with the latest libraries.

- **PR Link:** [#3007](https://github.com/mygithuborg/myrepo/pull/3007)
- **Title:** 📝 Draft: Prototype New Analytics Dashboard
- **PR State:** 📝 Draft
- **Mergeable:** Not Mergeable
- **Summary:** Initiates a prototype for a new analytics dashboard designed to provide users with real-time insights. This draft version is open for early feedback and may undergo significant changes based on review and testing.  Requires update from the main branch to be mergable.
</example>
```

## Example Templates

### Executive Summary Template

```text
Provide a high-level overview:
1. Key metrics:
   - Total PRs merged
   - Average review time
   - Code quality scores
2. Notable achievements
3. Blocking issues
4. Resource allocation

Format:
- Use tables for metrics
- Bullet points for achievements
- Clear headers for sections
```

### Technical Deep Dive Template

```text
Generate a detailed technical report:
1. Code changes:
   - Architecture updates
   - API modifications
   - Database changes
2. Testing coverage
3. Performance impacts
4. Security considerations

Include:
- Links to significant PRs
- Code snippets for major changes
- Technical debt analysis
```

## Advanced Example Templates

Heres a more advanced example of a custom report template:

### **Good Day Release Report**

```text
**GPT Specialization:**
This GPT specializes in summarizing software release notes and optional summary paragraphs into a consistent, clear, and concise format. The goal is to streamline the presentation of release notes, making them easy to understand for a general audience. It prioritizes clarity, brevity, and coherence while highlighting important updates without unnecessary jargon.

**Release Note Structure:**

1. **Release Notes Organization**
   The items in the release notes may not be in the desired order. It is crucial to group similar items together meaningfully. Review the list after the release notes are created and reorder items within each heading based on relevance. Use **PRODUCT FEATURE GROUPS** to understand which items are related.

2. **General Release Note Guidelines**
   - The title should be: `GoodDay Release v${versionNumber}`

3. **Release Note Line Items**
   - Reword individual release lines to maintain a consistent tone (happy and fun)
   - Use past tense for descriptions
   - Items in the 🧼 Fixes group should begin with "Fixed"
   - Consolidate duplicate or closely related items, and list the associated GitHub pull requests as a comma-delimited list at the end (e.g., GH-123, GH-456)
   - Add links to Github App for each PR

4. **GitHub App Links**
   - each pr mentioned should include hyperlinking to the pull request such as [coderabbitai/mono/pull/2614](https://github.com/coderabbitai/mono/pull/2614)

5. **Grouping Release Note Line Items**
   - Replace any emoji in the provided content with the appropriate **RELEASE NOTE GROUP**
   - Order the **RELEASE NOTE GROUP** according to the structure below

6. **Release Note Groups**
   - 🚀 **Features**: New capabilities or enhancements
   - 🧼 **Fixes**: Bug fixes or problem resolutions
   - 🧰 **Maintenance**: Documentation, cleanup, or technical changes
   - 📚 **Other**: Anything else

7. **PR Label Uses**
   - Omit any PRs with the label `skip-changelog`
   - Use the labels from related pull requests to group items together
   - Map PR labels to release note groups using the table below:

     | RELEASE NOTE GROUP | LABELS          |
     |--------------------|-----------------|
     | 🚀 Features        | feature, enhancement |
     | 🧼 Fixes           | bug, fix        |
     | 🧰 Maintenance     | design, docs    |
     | 📚 Other           | other, tech     |

8. **Final Checks**
   - Verify that the number of items matches the number of PRs included
   - Ensure the PR links match the PR number and reflect the content of the changes
```

### **Nato's Special Report**

```text
Generate a report of all pull requests in the following format:

- As the first paragraph, start with "🟣" if merged, "⚫" if draft, "🟢" if open, "🔴" if closed
  - On the same line, add the PR title in bold (and only the title; don't put anything else in bold after that)
  - On the same line, add the PR browser link (do not use an api link)
  - On the same line, add the last activity date in the format "Day Month Year, Hour:Minute AM/PM (Timezone)" in italic (don't put anything else in italic after that and make sure it's not bold)
- Make a new bullet-point list of high-level changes in the PR
  - Start each change with a gitmoji followed by a very terse one-liner to mention at a high level what the change does and to what part of the application it applies to
  - Do not start with verbose non-speak such as "The pull request enhances" or "This PR introduces". Keep it terse and straight to the point. Start change descriptions with a verb
  - Do not end with justifications or reasons for the changes such as "... enhancing type safety". Stick to the facts, do not make up the outcome of a change
  - Limit to the 4 most relevant changes
  - Examples: "✨ Add a rotating tagline on the home page", "🔧 Add func-style to ESLint", "📝 Add download badge to `README.md`", "✅ Add unit tests for comment trees", "👷 Create a pipeline to publish to npmjs.org", "🐛 Fix comment submission in posts", "📄 License under AGPL-3.0-or-later", "📱 Change post view for mobile", "💄 Make sidebar links blue", "🩹 Fix unfollow button", "🔒️ Limit login cookies to a specific subdomain", "🥅 Handle errors when commenting in a post", "🙈 Stop ignoring `.env` and start ignoring `.env.local` and `.env.*.local`", "⬆️ Update lemmy-js-client to v0.19.4", "🏷️ Define interfaces for pull request events", "🔐 Add environment variables for Bitbucket Server", "🚚 Rename exported client instances in test files", "🏷️ Add type alias `EventKey` and its type guard `isEventKey`", "🏗️ Aggregate exports for pull request events in an index file"
- Start the next paragraph with "Blockers:" in bold
  - Summarize any issues preventing the PR from progressing
    - Some examples: "Waiting for merge", "Waiting for review", "Failing CI/CD", "Needs more tests", "Needs rebase", "@username is waiting for a response", etc.
  - If the PR is stale, note it here
- Do not add a "Report" heading
- Make sure there is one empty line between each paragraph

These are the available emojis and the type of change they represent. Do not using any other emoji. Make sure the change corresponds to the gitmoji.

<gitmojis>
🎨: Improve structure / format of the code.
⚡️: Improve performance.
🔥: Remove code or files.
🐛: Fix a bug.
🚑️: Critical hotfix.
✨: Introduce new features.
📝: Add or update documentation.
🚀: Deploy stuff.
💄: Add or update the UI and style files.
🎉: Begin a project.
✅: Add, update, or pass tests.
🔒️: Fix security or privacy issues.
🔐: Add or update secrets.
🔖: Release / Version tags.
🚨: Fix compiler / linter warnings.
🚧: Work in progress.
💚: Fix CI Build.
⬇️: Downgrade dependencies.
⬆️: Upgrade dependencies.
📌: Pin dependencies to specific versions.
👷: Add or update CI build system.
📈: Add or update analytics or track code.
♻️: Refactor code.
➕: Add a dependency.
➖: Remove a dependency.
🔧: Add or update configuration files.
🔨: Add or update development scripts.
🌐: Internationalization and localization.
✏️: Fix typos.
💩: Write bad code that needs to be improved.
⏪️: Revert changes.
🔀: Merge branches.
📦️: Add or update compiled files or packages.
👽️: Update code due to external API changes.
🚚: Move or rename resources (e.g.: files, paths, routes).
📄: Add or update license.
💥: Introduce breaking changes.
🍱: Add or update assets.
♿️: Improve accessibility.
💡: Add or update comments in source code.
🍻: Write code drunkenly.
💬: Add or update text and literals.
🗃️: Perform database related changes.
🔊: Add or update logs.
🔇: Remove logs.
👥: Add or update contributor(s).
🚸: Improve user experience / usability.
🏗️: Make architectural changes.
📱: Work on responsive design.
🤡: Mock things.
🥚: Add or update an easter egg.
🙈: Add or update a .gitignore file.
📸: Add or update snapshots.
⚗️: Perform experiments.
🔍️: Improve SEO.
🏷️: Add or update types.
🌱: Add or update seed files.
🚩: Add, update, or remove feature flags.
🥅: Catch errors.
💫: Add or update animations and transitions.
🗑️: Deprecate code that needs to be cleaned up.
🛂: Work on code related to authorization, roles and permissions.
🩹: Simple fix for a non-critical issue.
🧐: Data exploration/inspection.
⚰️: Remove dead code.
🧪: Add a failing test.
👔: Add or update business logic.
🩺: Add or update healthcheck.
🧱: Infrastructure related changes.
🧑‍💻: Improve developer experience.
💸: Add sponsorships or money related infrastructure.
🧵: Add or update code related to multithreading or concurrency.
🦺: Add or update code related to validation.
</gitmojis>
```

## Related Resources

- [Scheduled Reports](./scheduled-reports.md)
- [On-demand Reports](./ondemand-reports.md)
- [API Documentation](https://api.coderabbit.ai/api/swagger/)
