---
title: Configure third-party tool use
description: Overview of CodeRabbit's supported linters and security analysis tools.
---

This page provides an overview of how CodeRabbit uses third-party open-source tools to deliver its multifaceted code reviews. For a complete list of supported tools, see [Supported tools](/tools/list).

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

CodeRabbit supports various linters and security analysis tools to improve the code review process. The output of these tools is used to enhance the feedback provided by CodeRabbit, making it possible to provide 1-click fixes for common issues.

All tool runs are done in a secure sandboxed execution environment.

## Enabling/Disabling Tools

You can enable or disable tools by setting `reviews.tools.<tool>.enabled` in your project's `.coderabbit.yaml` file or setting the "Review → Tools → Tool → Enabled" field in CodeRabbit's settings page.

## Customizing Tools

CodeRabbit supports customizing the strictness of tools by setting `reviews.profile` in your project's `.coderabbit.yaml` file or setting the "Review → Profile" field in CodeRabbit's settings page. The following profiles are available:

- `Chill` - Yields less feedback, that may be considered lenient.
- `Assertive` - Yields more feedback, that may be considered nit-picky.

Apart from the overall profile, you can also configure each tool by providing a path to a configuration file (specific to the tool) in your project. This would allow you to further customize the tool's behavior, by enabling/disabling specific rules, setting rule severity, etc.

## Checking Tool Output

When a tool is enabled, CodeRabbit will run it on your change request and attach the output under "Review details" comment in the change request. The output will be displayed in a structured format, with information on the file, line number, and the issue detected. For example:

```text
Ruff
fib.py
21-21: f-string without any placeholders

Remove extraneous f prefix

(F541)
```

## What's next

- For a complete list of tools that CodeRabbit supports, see [Supported tools](/tools/list).
