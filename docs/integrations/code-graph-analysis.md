---
title: Analyze your code changes
description: Learn about CodeRabbit's intelligent graph-based code analysis.
---

# CodeRabbit Code Graph Analysis

## What is Code Graph Analysis?

Code Graph Analysis is an intelligent code analysis feature that enhances your code reviews by automatically mapping relationships between files in your codebase. By
understanding how your code connects and interacts, Code Graph provides concrete snippets of context that makes reviews more effective and insightful.

## How Code Graph Analysis Enhances Your Reviews

When reviewing code with CodeRabbit, Code Graph Analysis automatically:

- **Maps symbol definitions and references** across your entire codebase
- **Analyzes commit history** to identify files that frequently change together
- **Builds relationship graphs** showing how different parts of your code connect
- **Enriches reviews with contextual information** about related code

Code Graph Analysis is also available in the CodeRabbit Chat. CodeRabbit Chat will automatically analyze your codebase with it when the agent deems it necessary.

## Key Features

### Three Types of Contextual Information

Code Graph Analysis adds three powerful layers of context to your reviews:

1. **Definition Files**: Files containing definitions that are referenced in the current code
2. **Reference Files**: Files that reference symbols defined in the current code
3. **Related Files**: Files that appear related based on usage patterns and commit history

### Language Support

Code Graph Analysis works with:

- Bash
- C
- C#
- C++
- CSS
- Elixir
- Go
- Java
- JavaScript
- Kotlin
- Lua
- PHP
- Python
- Ruby
- Rust
- Scala
- Swift
- TSX
- TypeScript

## Availability

Code Graph Analysis is available on the Lite tier and above.

---

Learn more about CodeRabbit's advanced features at [coderabbit.ai](https://coderabbit.ai)
