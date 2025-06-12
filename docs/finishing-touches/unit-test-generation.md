---
title: Generate unit tests
description: Automated Unit Test Generation with CodeRabbit
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

:::warning
This feature is [experimental](/early-access#experiments).
:::

# Unit Test Generation

Unit Test Generation is part of the [finishing touches](/future-development#finishing-touches).

Unit Test Generation is an Early Access Experimental feature.

## Usage

Once you are done with your pull request and its reviews, you may want to perform finishing touches to your code, such as adding unit tests. You can request CodeRabbit to generate unit tests by typing `@coderabbitai auto-generate unit tests` in a comment under that pull request or by clicking a checkbox under **Generate Unit Tests** in the CodeRabbit Walkthrough.

Once sent, CodeRabbit will perform the following actions:

- The CodeRabbit agent will examine your code for places where it needs tests
- Unit tests will be generated for the PR, in a separate PR, in the same PR in a new commit, or in a comment to copy-paste, depending on your choice
- If (and only if) you choose to generate the unit tests in a separate PR, CodeRabbit will examine your GitHub checks (build steps and tests and such) and adjust the PR to deal with build failures, test failures and similar.

## Path Instructions

You can customize the generated unit tests by providing instructions based on file paths in your `.coderabbit.yaml`. The `path` is a [minimatch](https://github.com/isaacs/minimatch) pattern.

```yaml
code_generation:
  unit_tests:
    path_instructions:
      - path: "**/*.ts"
        instructions: |
          Use vitest for testing framework.
          Generate comprehensive test cases including edge cases and error conditions.
          Do not omit the imports; the test file must be valid.
```

## Supported software forges

These software forges are supported:

- GitHub

## Supported CI/CD systems

These CI/CD systems are supported for post-generation adjustments:

- GitHub actions
