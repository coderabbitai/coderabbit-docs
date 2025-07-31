# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the CodeRabbit documentation site built with Docusaurus v3. The site is live at https://docs.coderabbit.ai/ and provides comprehensive documentation for CodeRabbit, an AI-powered code review tool.

## Essential Commands

```bash
# Development (MUST use pnpm)
pnpm install        # Install dependencies
pnpm start          # Start dev server at localhost:3000
pnpm build          # Build for production
pnpm serve          # Serve production build locally

# Code Quality
pnpm lint           # Check markdown and formatting
pnpm lint:fix       # Auto-fix issues
pnpm format         # Format all files
pnpm typecheck      # TypeScript type checking

# Cleanup
pnpm clean          # Remove build artifacts and node_modules
pnpm clear          # Clear Docusaurus cache
```

## Architecture & Key Concepts

### Documentation Structure

- `/docs/` - All documentation content in MDX format, organized by topic
- `/src/components/` - Custom React components (AiDisclaimer, YamlEditor, SchemaViewer)
- `/static/` - Images, schemas, and other static assets
- `docusaurus.config.ts` - Main site configuration including redirects and integrations
- `sidebars.ts` - Navigation structure definition

### Key Integrations

1. **Algolia Search** - Primary search functionality
2. **Inkeep AI Assistant** - AI-powered help chat
3. **Client-side redirects** - Maintains old URLs for backward compatibility
4. **JSON Schema Plugin** - Displays configuration schemas interactively

### Development Patterns

1. **Adding Documentation**: Create MDX files in appropriate `/docs/` subdirectory
2. **Custom Components**: Import from `@site/src/components/` in MDX files
3. **Images**: Store in `/static/images/` and reference with absolute paths
4. **Redirects**: Add to `redirects` array in `docusaurus.config.ts`

### Code Style

- No semicolons
- Tabs for indentation
- Trailing commas in multiline structures
- Arrow functions without parentheses for single parameters
- All formatting enforced by Prettier

### Working with MDX

- Supports React components within markdown
- Use frontmatter for metadata (title, description, sidebar position)
- Import custom components at the top of MDX files
- Code blocks support syntax highlighting via Prism

### Common Tasks

**Adding a new documentation page:**

1. Create MDX file in appropriate `/docs/` subdirectory
2. Add frontmatter with title and sidebar_position
3. Update `sidebars.ts` if creating new category

**Updating configuration schemas:**

1. Update schema files in `/static/schema/`
2. Reference in docs using SchemaViewer component

**Testing changes locally:**

1. Run `pnpm start` to start dev server
2. Navigate to localhost:3000
3. Changes hot-reload automatically

**Before committing:**

1. Run `pnpm lint:fix` to fix formatting
2. Run `pnpm typecheck` to ensure no TypeScript errors
3. Run `pnpm build` to verify production build works
