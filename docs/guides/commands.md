---
title: Control and manage code reviews
description: Learn how to control CodeRabbit using commands in pull request comments
---

# CodeRabbit Commands

> Control your code reviews directly from pull request comments using CodeRabbit's command system. Each command starts with `@coderabbitai` followed by the specific action you want to take.

## Review Control Commands

### Managing Reviews

| Command                     | Description                                          | Use Case                                                                     |
| --------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------- |
| `@coderabbitai review`      | Triggers an incremental review of new changes        | When automatic reviews are disabled or you want to manually trigger a review |
| `@coderabbitai full review` | Performs a complete review of all files from scratch | When you want to get fresh insights on the entire PR                         |
| `@coderabbitai summary`     | Regenerates the PR summary                           | When you want an updated overview after making changes                       |

### Review Flow Control

| Command                | Description                              | Use Case                                            |
| ---------------------- | ---------------------------------------- | --------------------------------------------------- |
| `@coderabbitai pause`  | Temporarily stops reviews on the PR      | When you're making multiple rapid changes           |
| `@coderabbitai resume` | Restarts reviews after a pause           | When you're ready for CodeRabbit to review again    |
| `@coderabbitai ignore` | Permanently disables reviews for this PR | When you want to handle the review process manually |

### Comment Management

| Command                 | Description                             | Use Case                                                |
| ----------------------- | --------------------------------------- | ------------------------------------------------------- |
| `@coderabbitai resolve` | Resolves all CodeRabbit review comments | When you've addressed all feedback and want to clean up |

### Documentation Commands

| Command                             | Description                                  | Use Case                                            |
| ----------------------------------- | -------------------------------------------- | --------------------------------------------------- |
| `@coderabbitai generate docstrings` | Generates docstrings for functions in the PR | When you need automatic documentation for your code |
| `@coderabbitai configuration`       | Shows current CodeRabbit settings            | When you need to check or export your configuration |

### Agentic Chat Commands

| Command              | Description                                                | Use Case                                             |
| -------------------- | ---------------------------------------------------------- | ---------------------------------------------------- |
| `@coderabbitai plan` | Get the agentic chat to plan an edit for previous comments | When you want CodeRabbit to change your code for you |

### Help & Support

| Command              | Description                                | Use Case                                   |
| -------------------- | ------------------------------------------ | ------------------------------------------ |
| `@coderabbitai help` | Displays available commands and usage info | When you need guidance on using CodeRabbit |

## Best Practices

### Review Workflow

- Start with `@coderabbitai review` for checking new changes
- Use `@coderabbitai full review` when major changes require a fresh perspective
- Generate summaries after significant updates using `@coderabbitai summary`

### Managing Large Changes

- Use `@coderabbitai pause` before making multiple commits
- Resume reviews with `@coderabbitai resume` when ready
- Consider `@coderabbitai full review` after substantial changes

### Documentation Flow

- Run `@coderabbitai generate docstrings` after finalizing function implementations
- Learn more about [docstring generation](/finishing-touches/docstrings)

## Tips

- Commands are case-insensitive (`@coderabbitai REVIEW` works the same as `@coderabbitai review`)
- Commands can be issued by anyone with write access to the repository
- Multiple commands can be used in sequence as needed
- Use `@coderabbitai configuration` to export your settings before making changes

## Command Response Time

- Most commands (pause, resume, ignore) take effect immediately
- Review commands typically complete within a few minutes, depending on PR size
- Docstring generation time varies based on the number of functions

## Troubleshooting

If a command doesn't seem to work:

1. Check that you have the necessary repository permissions
2. Verify the command syntax
3. Look for any response from CodeRabbit in the PR comments
4. Use `@coderabbitai help` for command guidance

Need help? Join our community on [Discord](https://discord.gg/coderabbit) or contact our support team.
