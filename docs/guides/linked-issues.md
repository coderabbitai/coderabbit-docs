---
title: Work with linked Issues
description: Learn how to effectively use linked issues with CodeRabbit for better pull request assessments
---

# Linked Issues

CodeRabbit provides intelligent assessment of linked issues to validate whether pull requests properly address their requirements. This guide explains how to effectively use linked issues and write clear issue descriptions for optimal results.

## Understanding Linked Issues

A linked issue is one that is explicitly referenced in your pull request description using platform-specific syntax:

- GitHub: `fixes #123`, `closes #123`, `resolves #123`
- GitLab: `closes #123`, `fixes #123`, or full URLs
- Jira/Linear: Full URLs to tickets

When CodeRabbit detects linked issues, it analyzes them against your pull request changes to determine if the requirements are met:

![Linked Issue Assessment Example](/img/guides/linked-issue.png)

## Best Practices for Issue Writing

### Issue Titles

Create descriptive, technical titles that clearly state the goal:

✅ Good Examples:

- "Add PrismaLint integration to configuration flow"
- "Fix race condition in user authentication"
- "Implement caching for GraphQL queries"

❌ Poor Examples:

- "Fix bug"
- "Update code"
- "Improve performance"

### Issue Descriptions

Write comprehensive descriptions that provide clear technical context:

1. **Problem Statement**

   - Clearly describe what needs to be changed
   - Include technical details about affected components
   - Reference specific files or functions if known

2. **Expected Solution**
   - Outline the desired implementation approach
   - Include code examples or pseudo-code when relevant
   - List specific acceptance criteria

Example Description:

```markdown
Problem:
The configuration system doesn't validate Prisma schema files before deployment,
leading to potential runtime errors.

Solution:
Integrate PrismaLint into the configuration flow to:

- Validate schema files during PR checks
- Enforce consistent naming conventions
- Prevent common Prisma anti-patterns

Affected Components:

- Configuration validation pipeline
- CI/CD workflow
- Schema validation logic

Acceptance Criteria:

- [ ] PrismaLint runs on all PR checks
- [ ] Failed validations block merging
- [ ] Clear error messages for schema issues
```

### Consistent Terminology

Use consistent terminology between issues and pull requests:

✅ Good:

- Use the same technical terms consistently
- Reference components with their exact names
- Maintain consistent naming patterns

❌ Poor:

- Mixing different terms for the same component
- Using vague or non-technical language
- Inconsistent capitalization or formatting

## Linking Issues Effectively

### In Pull Requests

1. **Direct References**

   ```markdown
   Fixes #123
   Resolves organization/repo#456
   Closes https://github.com/org/repo/issues/789
   ```

2. **Multiple Issues**

   ```markdown
   This PR addresses:

   - Fixes #123
   - Closes #456
   - Resolves https://jira.company.com/browse/PROJ-789
   ```

### Cross-References

For better traceability:

1. Add PR references in issue comments
2. Use complete URLs when linking external systems
3. Maintain bidirectional links between related issues

## How CodeRabbit Assesses Linked Issues

CodeRabbit evaluates linked issues by:

1. Analyzing issue titles and descriptions
2. Comparing changes in the pull request
3. Validating if requirements are met
4. Providing an assessment with:
   - ✅: If the objective has been addressed in the PR. The 'Explanation' column will be left blank.
   - ❌: If the objective has not been addressed in the PR. Here a brief explanation is added to the 'Explanation' column.
   - ❓: If it is unclear whether the objective has been addressed. Here a brief explanation is added to the 'Explanation' column.

:::note
Only the issue title and description are considered in the assessment. Comments and discussion threads are not currently analyzed.
:::

## Tips for Better Assessments

1. **Be Specific**

   - Include clear, measurable objectives
   - List specific technical requirements
   - Reference affected code components

2. **Provide Context**

   - Explain why changes are needed
   - Document current behavior
   - Describe expected outcomes

3. **Use Technical Details**

   - Include file paths when known
   - Reference specific functions or classes
   - Mention relevant technologies

4. **Keep It Focused**
   - One main objective per issue
   - Clear scope boundaries
   - Specific acceptance criteria

## Related Resources

- [Add review instructions](/guides/review-instructions)
- [Issue Chat](./issue-chat.md)
- [Issue Creation](./issue-creation.md)
