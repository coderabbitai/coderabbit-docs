---
title: Path-Based Review Instructions
date: '2023-09-21'
slug: path-based-review-instructions
tags:
  - general
hide_table_of_contents: true
heroImage: /img/changelog/path-based-review-instructions-hero.webp
permalink: /changelog/path-based-review-instructions
---

### Path-Based Review Instructions

This section explains how to add custom code review instructions for the entire project or specific file paths in your project using glob patterns. Developers can provide tailored review guidelines based on the file paths. These instructions are needed only if you want the reviewer to follow specific instructions besides the standard review.

Adding file path prompts allows developers to specify custom instructions for different parts of the codebase. For example, you may want to enforce style guide by file types or directories.

Sample Usage:

```yaml
path: **/*.js
instructions: Review the javascript code against the google javascript style guide and point out any mismatches
```

```yaml
path: tests/**.*
instructions: Review the following unit test code written using the Mocha test library. Ensure that: The code adheres to best practices associated with Mocha. Descriptive test names are used to clearly convey the intent of each test.
```

> Note:
>
> - Paths accept glob patterns
> - Instructions generally work well for specific additional instructions. However, they are not that effective if you are instructing AI not to do something
> - Test the review feedback on pull requests and tailor as necessary

---
