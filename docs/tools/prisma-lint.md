---
title: Prisma Lint
sidebar_label: Prisma Lint
description: CodeRabbit's guide to Prisma Lint.
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

[Prisma Lint](https://github.com/loop-payments/prisma-lint) is a linter for Prisma schema files that helps enforce consistent conventions and best practices in your Prisma schemas.

## Files

Prisma Lint will run on files with the following extensions:

- `.prisma`

## Configuration

Prisma Lint supports the following config files:

- `.prismalintrc.json`
- User-defined config file set at `reviews.tools.prismalint.config_file` in your project's `.coderabbit.yaml` file or setting the "Review → Tools → Prisma Lint → Config File" field in CodeRabbit's settings page.

:::note

By default, Prisma Lint looks for schema files at `prisma/schema.prisma`. If you have a custom schema path specified in the `prisma.schema` field within `package.json`, that will be used instead.

:::

## Rule Configuration

Rules can be configured in your `.prismalintrc.json` file. Here's an example configuration:

```json
{
	"rules": {
		"field-name-mapping-snake-case": [
			"error",
			{
				"compoundWords": ["S3"]
			}
		],
		"model-name-grammatical-number": [
			"error",
			{
				"style": "singular"
			}
		],
		"require-field-index": [
			"error",
			{
				"forAllRelations": true,
				"forNames": ["tenantId"]
			}
		]
	}
}
```

## Ignoring Rules

You can ignore rules using three-slash (`///`) comments inside your Prisma models:

```prisma
model User {
  /// prisma-lint-ignore-model
  // Ignores all lint rules for this model
}

model Post {
  /// prisma-lint-ignore-model require-field
  // Ignores specific rules for this model
}
```

## Links

- [Prisma Lint GitHub Repository](https://github.com/loop-payments/prisma-lint)
- [Prisma Lint Rules Documentation](https://github.com/loop-payments/prisma-lint/blob/main/RULES.md)
