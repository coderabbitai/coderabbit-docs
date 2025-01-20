---
id: why-coderabbit
title: Why CodeRabbit?
sidebar_label: Why CodeRabbit?
sidebar_position: 2
description: CodeRabbit is AI-powered code reviews built for modern development teams
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Why CodeRabbit?

Looking back at CodeRabbit's journey, our fundamental reasons remain unchanged:

- **To build the best code review experience in the tech**

> This continues to be our core mission. It was clear to us then, as it is now, that development workflows are becoming increasingly complex — and teams need intelligent automation to maintain quality while moving fast.

- **In an ever-evolving tech space, we believe AI-powered code review is the future**

> Just like Git revolutionized version control and CI/CD transformed deployments, we believe AI-assisted code review will become the standard for quality assurance.

- **An insight that modern code review can be reimagined**

We call this approach _contextual analysis_, which allows us to understand not just the code changes, but their implications across your entire codebase. This enables us to provide insights about:

- Security vulnerabilities
- Performance impacts
- Architectural changes
- Best practices
- Knowledge sharing

- **The conviction that our AI can provide a better Developer Experience (DevX)**

Features such as:

- Instant analysis
- On-demand Reports
- Review Instructions
- CodeRabbit Commands
- PR summary on the fly
- Visual diagrams
- Docstrings (Beta)
- Custom review rules

> All these features improve the developer experience by reducing review time, maintaining consistency, and sharing knowledge effectively across teams.

These are CodeRabbit's foundational principles, but given the many _code review tools_ available today, let's explore why **you** should choose CodeRabbit:

---

# CodeRabbit is AI-Powered

Your intelligent code review companion that understands context.

> From its foundation as a Generative AI-first platform, CodeRabbit has evolved to become the preferred code review tool among developers because of its speed, intelligence, adaptability, and support for features like contextual analysis, security scanning, and architectural insights. CodeRabbit supports all major programming languages and integrates with popular development [tools](/tools).

:::info Get Started
If your team needs intelligent code reviews, CodeRabbit delivers. If you're new to AI-powered reviews, [sign up for a Free account](https://app.coderabbit.ai/login), join the [Discord server](https://discord.gg/coderabbit), and start the journey with us.
:::

## CodeRabbit is Context-Aware

An AI architecture built for understanding, reliability, and efficiency

<div className="row">
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>Intelligent Features</h3>
      </div>
      <div className="card__body">
        <ul>
          <li>Instant code understanding</li>
          <li>Security vulnerability detection</li>
          <li>Performance impact assessment</li>
          <li>Architecture evaluation</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h3>Context Analysis</h3>
      </div>
      <div className="card__body">
        Understanding context means analyzing how code changes affect the entire system, not just the modified files. This approach contrasts with traditional code review tools that only look at direct changes.
      </div>
    </div>
  </div>
</div>

![CodeRabbit Review comment on a Auth Flow](/img/about/why-cr-auth-flow-cors.png "CodeRabbit Code Review Comment")

:::tip DID YOU KNOW?
CodeRabbit's AI can detect potential issues that would only surface in production, saving costly debugging time later.
:::

## CodeRabbit is Adaptive

Let the AI learn and grow with your team.

Being an adaptive system means that CodeRabbit continuously learns from your team's practices and preferences without requiring manual configuration or rule setting. When reviewers accept or reject suggestions, CodeRabbit learns and applies these preferences to future reviews.

### Real-World Example: Performance Optimization

Here's a real example of how CodeRabbit identifies opportunities for performance improvement:

<Tabs>
  <TabItem value="before" label="Before - Sequential Processing" default>
    ```typescript
    const createdTools = await Promise.all(
      tools.map(async (tool) => {
        return prisma.tool.create({
          data: {
            name: tool.name,
            description: tool.description,
            headline: tool.headline,
            features: tool.features,
            logo: tool.name,
            categories: tool.categories || [],
            tags: tool.tags || [],
            stars: tool.stars || 0,
            forks: tool.forks || 0,
            lastUpdated: new Date(),
            websiteUrl: tool.websiteUrl,
            githubUrl: tool?.githubUrl,
            documentation: tool?.documentation
          },
        });
      })
    );
    ```
  </TabItem>
  <TabItem value="after" label="After - Batch Processing">
    ```typescript
    const createdTools = await prisma.tool.createMany({
      data: tools.map((tool) => ({
        name: tool.name,
        description: tool.description,
        headline: tool.headline,
        features: tool.features,
        logo: tool.name,
        categories: tool.categories || [],
        tags: tool.tags || [],
        stars: tool.stars || 0,
        forks: tool.forks || 0,
        lastUpdated: new Date(),
        websiteUrl: tool.websiteUrl,
        githubUrl: tool?.githubUrl,
        documentation: tool?.documentation
      }))
    });
    ```
  </TabItem>
</Tabs>

:::note CodeRabbit's Analysis
The current implementation processes each tool creation sequentially. Consider using Prisma's `createMany` for better performance. This batch operation can significantly reduce database round trips and improve overall execution time.

<div className="margin-top--sm">
  <a href="https://github.com/tyaga001/devtoolsacademy/pull/44" className="button button--secondary button--sm">
    View Example PR
  </a>
</div>
:::

### How CodeRabbit Adapts

When suggesting improvements, CodeRabbit:

<div className="row">
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h4>Analyzes Patterns</h4>
      </div>
      <div className="card__body">
        <ul>
          <li>Identifies common performance bottlenecks</li>
          <li>Learns from your codebase's patterns</li>
          <li>Suggests modern best practices</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="col col--6">
    <div className="card">
      <div className="card__header">
        <h4>Provides Context</h4>
      </div>
      <div className="card__body">
        <ul>
          <li>Explains the reasoning behind suggestions</li>
          <li>Highlights potential benefits</li>
          <li>Offers committable suggestions</li>
        </ul>
      </div>
    </div>
  </div>
</div>

![CodeRabbit Learnings](/img/about/why-cr-learnings.png "How CodeRabbit learns and remembers org standards")

:::tip Learning from Feedback
When you accept or reject these suggestions, CodeRabbit learns your team's preferences and adjusts future recommendations accordingly. This ensures that suggestions become increasingly relevant to your specific needs and coding standards.
:::

## CodeRabbit is Integrated

Seamless integration with your existing workflow.

CodeRabbit combines insights from multiple specialized tools into a single, coherent review:

<div className="row">
  <div className="col col--3">
    <div className="card">
      <div className="card__header">
        <h4>Security</h4>
      </div>
      <div className="card__body">
        Semgrep, Checkov
      </div>
    </div>
  </div>
  <div className="col col--3">
    <div className="card">
      <div className="card__header">
        <h4>Style</h4>
      </div>
      <div className="card__body">
        ESLint, Prettier
      </div>
    </div>
  </div>
  <div className="col col--3">
    <div className="card">
      <div className="card__header">
        <h4>Performance</h4>
      </div>
      <div className="card__body">
        Lighthouse
      </div>
    </div>
  </div>
  <div className="col col--3">
    <div className="card">
      <div className="card__header">
        <h4>Dependencies</h4>
      </div>
      <div className="card__body">
        Dependabot
      </div>
    </div>
  </div>
</div>

But instead of flooding you with alerts, CodeRabbit provides curated, actionable feedback.

## Tool Comparison

<Tabs>
<TabItem value="coderabbit" label="CodeRabbit">
- ✅ Most comprehensive and detailed code analysis
- ✅ Committable Suggestion
- ✅ Context-aware feedback
- ✅ Adaptive learning
- ✅ Strong data protection policies
- ✅ Chat capabilities with detailed explanations
</TabItem>
<TabItem value="traditional" label="Traditional Tools" default>
- ❌ Provides basic data protection
- ❌ Conflicting suggestions
- ❌ No context awareness
- ❌ No detailed analysis
- ❌ Least transparent privacy
- ❌ Limited chat interaction
- ❌ Lacks actionable code suggestions
</TabItem>
</Tabs>

## Impact on Your Workflow

When a developer opens a pull request, CodeRabbit comes into action:

<div className="row">
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Immediate Analysis</h3>
      </div>
      <div className="card__body">
        <ul>
          <li>Scans changed files and dependencies</li>
          <li>Identifies security vulnerabilities</li>
          <li>Evaluates performance impact</li>
          <li>Checks architectural consistency</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Communication</h3>
      </div>
      <div className="card__body">
        <ul>
          <li>Generates concise summary</li>
          <li>Creates visual diagrams</li>
          <li>Generates a changelist and walkthrough</li>
          <li>Chat option</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h3>Continuous Learning</h3>
      </div>
      <div className="card__body">
        <ul>
          <li>Remembers team preferences</li>
          <li>Adapts to coding patterns</li>
          <li>Shares knowledge across teams</li>
          <li>Maintains consistent standards</li>
        </ul>
      </div>
    </div>
  </div>
</div>

:::note ENTERPRISE READY
CodeRabbit is built for production environments with:

- SOC 2 Type II certification
- GDPR compliance
- Zero data retention
- Self-hosted options
  :::

## Start Reviewing Code in Seconds

> CodeRabbit makes it effortless to begin AI-powered code reviews. Our architecture enables instant setup and immediate code analysis, providing you with intelligent feedback within minutes.

### Three Steps to Better Code Reviews

1. **Sign in** with [GitHub](../platforms/github-com.md), [GitLab](../platforms/gitlab-com.mdx), or [Azure DevOps](../platforms/azure-devops.md)
2. Select and add repositories in CodeRabbit dashboard
3. That's it. You're good to go.

:::tip INSTANT ACTIVATION
CodeRabbit starts analyzing your first pull request immediately - no complex configuration needed.
:::

### What You'll Get

<div className="row">
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h4>Immediate Benefits</h4>
      </div>
      <div className="card__body">
        - Instant PR analysis
        - Security checks
        - Style enforcement
        - Performance insights
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h4>Team Features</h4>
      </div>
      <div className="card__body">
        - Custom review rules
        - Team preferences
        - Knowledge sharing
        - Workflow integration
      </div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card">
      <div className="card__header">
        <h4>Advanced Tools</h4>
      </div>
      <div className="card__body">
        - Visual diagrams
        - Impact analysis
        - Batch suggestions
        - Pattern detection
      </div>
    </div>
  </div>
</div>

### Quick Configuration Examples

<Tabs>
  <TabItem value="github" label="GitHub" default>
    ```bash
    # Example GitHub Reviews
    https://github.com/appsmithorg/appsmith/pull/38270
    https://github.com/tyaga001/devtoolsacademy/pull/44
    https://github.com/openreplay/openreplay/pull/1858

    # Browse All Reviews
    https://github.com/search?q=coderabbitai&type=pullrequests
    ```

  </TabItem>
</Tabs>

:::note SUPPORT AT EVERY STEP
Need help? read [quickstart](/getting-started/quickstart) or ask a question in [Discord community](https://discord.gg/coderabbit), and team is here to help.
:::

## See the Difference

Try CodeRabbit on your next pull request. Experience how AI-powered code review can:

- Reduce review time by up to 90%
- Catch bugs before they reach production
- Share knowledge across your team
- Maintain consistent code quality

> Start reading more about the custom [code review instructions](/guides/review-instructions) or how CodeRabbit verify issues using [knowledge bases](/integrations/knowledge-base) like Linear and Jira.

Transform your code reviews now, [Start your free trial today](https://app.coderabbit.ai/login) and join the Discord server and chat with CodeRabbit users and team.

<div style={{display: 'flex', gap: '10px', marginTop: '20px'}}>
  <a href="https://app.coderabbit.ai/login" className="button button--primary button--lg">Sign Up Free</a>
  <a href="https://discord.gg/coderabbit" className="button button--secondary button--lg">Join Discord</a>
</div>
