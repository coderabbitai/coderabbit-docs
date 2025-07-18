---
title: Shopify CLI
sidebar_label: Shopify CLI
description: CodeRabbit's guide to Shopify CLI.
---

```mdx-code-block
import ProPlanNotice from '@site/src/components/ProPlanNotice.mdx';

<ProPlanNotice />
```

[Shopify CLI](https://github.com/Shopify/cli) is a command-line tool that helps you build Shopify apps, themes, and custom storefronts. It provides functionality for initializing, building, developing, and deploying Shopify projects.

## Requirements

The tool only runs when the following conditions are met:

### File Types

- Only processes pull requests changing `*.liquid` files

### Configuration Files

- Requires either `.theme-check.yml` or `.theme-check.yaml` configuration file in the project root

### Directory Structure

- Requires the standard Shopify theme directory structure at the project root:
  - `assets/`
  - `config/`
  - `layout/`
  - `locales/`
  - `sections/`
  - `snippets/`
  - `templates/`

If any of these requirements are not met, the tool will not run.

## Validation Rules

The tool checks for:

### Theme Validation

- Liquid syntax errors
- Theme requirements compliance
- Asset organization
- Performance best practices
- Accessibility standards

### App Validation

- App extension configuration
- Function implementation
- API version compatibility
- Security best practices

## Common Issues

The tool helps identify and fix:

1. Theme Issues:

   - Invalid Liquid syntax
   - Missing required templates
   - Performance bottlenecks
   - Accessibility violations

2. App Issues:
   - Invalid API usage
   - Missing dependencies
   - Configuration errors
   - Security vulnerabilities

## Links

- [Shopify CLI GitHub Repository](https://github.com/Shopify/cli)
- [Shopify CLI Theme Documentation](https://shopify.dev/docs/api/shopify-cli/theme)
- [Shopify CLI App Documentation](https://shopify.dev/docs/apps/tools/cli)
- [Theme Development Requirements](https://shopify.dev/docs/themes/store/requirements)
