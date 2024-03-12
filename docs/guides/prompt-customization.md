---
title: Prompt Customization
sidebar_label: Prompt Customization
description: Accelerate Code Reviews with AI
image: "/preview_meta.jpg"
---

<head>
 <meta charSet="utf-8" />
  <meta name="title" content="CodeRabbit: AI-powered Code Reviews" />
  <meta name="description" content="Accelerate Code Reviews with AI" />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://coderabbit.ai/" />
  <meta property="og:title" content="CodeRabbit: AI-powered Code Reviews" />
  <meta property="og:description" content="Accelerate Code Reviews with AI" />
  <meta property="og:image" content="/preview_meta.jpg" />

  <meta name="twitter:image" content="https://coderabbit.ai/preview_meta.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="CodeRabbit: AI-powered Code Reviews" />
  <meta name="twitter:description" content="Accelerate Code Reviews with AI" />
</head>

### Path-based instructions[](https://coderabbit.ai/docs/prompt-customization#path-based-instructions)

This section explains how to add custom code review instructions for the entire project or specific file paths in your project using glob patterns. Developers can provide tailored review guidelines based on the file paths. These instructions are needed only if you want the reviewer to follow specific instructions besides the standard review.

Adding file path prompts allows developers to specify custom instructions for different parts of the codebase. For example, you may want to enforce style guide by file types or directories.

### Sample Usage[](https://coderabbit.ai/docs/prompt-customization#sample-usage)

**path:** `**/*.js`

**instructions:** Review the JavaScript code against the Google JavaScript style guide and point out any mismatches

**path:** `tests/**.*`

**instructions:** Review the following unit test code written using the Mocha test library.
Ensure that:
The code adheres to best practices associated with Mocha.
Descriptive test names are used to clearly convey the intent of each test.

:::note

- Paths accept glob patterns.
- Instructions generally work well for specific additional instructions. However, they are not that effective if you are instructing AI not to do something.
- Test the review feedback on pull requests and tailor as necessary.

:::
