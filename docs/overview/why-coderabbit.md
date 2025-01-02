---
id: why-coderabbit
title: Why CodeRabbit?
sidebar_label: Why CodeRabbit?
sidebar_position: 2
description: CodeRabbit is AI-powered code reviews built for modern development teams
---

As developers, we understand the critical value of code reviews - they're the backbone of maintaining code quality and knowledge sharing across teams. But let's be honest about the growing challenges: as codebases expand and development velocity increases, traditional code reviews often become a bottleneck. This is where CodeRabbit comes in, not to replace human reviewers, but to make their work more impactful and helpful.

### Deep Understanding, Immediate Insights

Think about how you approach reviewing a complex pull request. You first try to understand the context, examine potential edge cases, and consider architectural implications. CodeRabbit performs this same thoughtful analysis, but delivers insights within minutes of PR submission.

For example, when examining a change to your authentication system, CodeRabbit doesn't just flag syntax issues - it analyzes the entire authentication flow, identifying potential security vulnerabilities in token handling or session management specific to your implementation:

![CodeRabbit Review comment on a Auth Flow](/img/about/why-cr-auth-flow-cors.png "CodeRabbit Code Review Comment")

### Intelligence Through Integration

CodeRabbit combines the specialized insights of over 20 analysis tools (ESLint, Semgrep, Checkov, and more) with AI understanding to provide meaningful, actionable feedback. But instead of drowning you in alerts, it provides curated, context-aware suggestions.

### Learning Your Team's DNA

What makes CodeRabbit truly valuable is its ability to learn and adapt to your team's codebase, practices, and standards. It doesn't just pattern match - it builds a deep understanding through direct interactions with your team. For example, when a reviewer indicates a preference:

![CodeRabbit Learnings](/img/about/why-cr-learnings.png "How CodeRabbit learns and remembers org standards")

CodeRabbit will then:

- Remember this preference for future reviews
- Apply this knowledge across the entire codebase
- Share this learning with the whole team through its review comments
- Maintain consistency with your established standards

### Practical Impact on Your Workflow

When a developer opens a pull request, CodeRabbit:

- Analyzes changes across the entire codebase context
- Generates a clear, actionable summary
- Creates visual sequence diagrams for complex changes
- Provides specific feedback and suggestions

This means human reviewers can focus on architectural decisions and knowledge sharing, rather than catching basic issues.

### Built for Production Teams

For teams building production software, CodeRabbit provides:

- SOC 2 Type II and GDPR compliance for enterprise security requirements
- Self-hosted deployment options for complete control
- Zero data retention policy - code is analyzed in memory and immediately discarded

Want to see the impact yourself? Try CodeRabbit on your next complex refactoring PR - you might be surprised at the subtle implications it catches that could easily be missed in manual review.

## Not convinced? Read more

You can read more about our custom [code review instructions](/guides/review-instructions) or how we verify issues using [knowledge bases](/integrations/knowledge-base) like Linear and Jira.

Join thousands of developers who are already benefiting from AI-powered code reviews.

After signing up, join our active Discord community where you'll find CodeRabbit users and team members ready to help you get the most out of your code reviews.

<div style={{display: 'flex', gap: '10px', marginTop: '20px'}}>
  <a href="https://app.coderabbit.ai/login" className="button button--primary button--lg">Sign Up Free</a>
  <a href="https://discord.gg/coderabbit" className="button button--secondary button--lg">Join Discord</a>
</div>
