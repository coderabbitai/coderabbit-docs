# Phase 2: Content Structure and Migration

## Overview

This phase handles the migration of existing changelog content from a single file with anchors to individual MDX files, setting up the content structure and implementing the redirect mapping.

## Actual Implementation vs Plan

### Key Differences:

1. **Dependency Optimization**: Used native Node.js capabilities and existing project dependencies instead of adding new packages
2. **Redirect Strategy**: Implemented client-side hash redirect component instead of server-side redirects (which don't support hash fragments)
3. **Simplified Scripts**: Created leaner scripts using built-in Node.js features
4. **URL Structure**: Successfully implemented slug-based URLs without dates as requested

## Technical Implementation

### 2.1 Analyze Existing Changelog Structure

**Not implemented as separate script** ❌

**Why:** Analysis logic was integrated directly into the migration script for simplicity. The changelog structure was straightforward enough (date headers followed by content) that a separate analysis step wasn't necessary.

**Original Plan:**

```javascript
const fs = require("fs")
const path = require("path")
const matter = require("gray-matter")
const { remark } = require("remark")
const visit = require("unist-util-visit")

async function analyzeChangelog() {
	const changelogPath = path.join(__dirname, "../docs/changelog.md")
	const content = fs.readFileSync(changelogPath, "utf8")

	const entries = []
	const anchors = []

	// Parse markdown AST
	const ast = remark.parse(content)

	visit(ast, "heading", node => {
		if (node.depth === 2) {
			const text = node.children
				.filter(child => child.type === "text")
				.map(child => child.value)
				.join("")

			// Extract date and title patterns
			const dateMatch = text.match(/(\d{4}-\d{2}-\d{2})/)
			const anchorMatch = text.match(/\{#([^}]+)\}/)

			if (dateMatch) {
				entries.push({
					date: dateMatch[1],
					title: text
						.replace(dateMatch[0], "")
						.replace(/\{#[^}]+\}/, "")
						.trim(),
					anchor: anchorMatch ? anchorMatch[1] : null,
					position: node.position,
				})
			}
		}
	})

	return { entries, ast }
}

module.exports = { analyzeChangelog }
```

### 2.2 Migration Script

**Implemented with modifications** ✅

**Key Changes:**
1. Used native `fs.promises` instead of `fs-extra`
2. Used existing `js-yaml` package instead of `gray-matter`
3. Created simple slugify function instead of installing `slugify` package
4. Integrated analysis logic directly into migration script

**Actual Implementation:**

```javascript
const fs = require('fs').promises;
const path = require('path');
const yaml = require('js-yaml');

// Simple slugify function
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')      // Replace spaces with hyphens
    .replace(/-+/g, '-')       // Replace multiple hyphens with single
    .trim();
}

// Parse frontmatter manually
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (match) {
    const frontmatter = yaml.load(match[1]);
    const body = match[2];
    return { frontmatter, body };
  }
  
  return { frontmatter: {}, body: content };
}
```

**Original Plan:**

```javascript
const fs = require("fs-extra")
const path = require("path")
const matter = require("gray-matter")
const slugify = require("slugify")
const { analyzeChangelog } = require("./analyze-changelog")

async function migrateChangelog() {
	const { entries, ast } = await analyzeChangelog()
	const changelogDir = path.join(__dirname, "../changelog")
	const redirects = []

	// Ensure changelog directory exists
	await fs.ensureDir(changelogDir)

	// Track slugs to handle duplicates
	const usedSlugs = new Set()

	// Process each entry
	for (let i = 0; i < entries.length; i++) {
		const entry = entries[i]
		const nextEntry = entries[i + 1]

		// Generate unique slug (without date)
		let slug = slugify(entry.title, { lower: true, strict: true })

		// Handle duplicate slugs by appending a number
		let finalSlug = slug
		let counter = 1
		while (usedSlugs.has(finalSlug)) {
			finalSlug = `${slug}-${counter}`
			counter++
		}
		usedSlugs.add(finalSlug)

		// Filename still includes date for sorting in filesystem
		const filename = `${entry.date}-${finalSlug}.md`
		const filepath = path.join(changelogDir, filename)

		// Extract content between entries
		const startLine = entry.position.end.line
		const endLine = nextEntry ? nextEntry.position.start.line - 1 : undefined
		const contentLines = content.split("\n").slice(startLine, endLine)
		const entryContent = contentLines.join("\n").trim()

		// Determine tags based on content analysis
		const tags = detectTags(entryContent, entry.title)

		// Create frontmatter
		const frontmatter = {
			title: entry.title,
			date: entry.date,
			tags: tags,
			hide_table_of_contents: true,
			// Generate hero image path (without date)
			heroImage: `/img/changelog/${finalSlug}-hero.webp`,
			// Store the slug for URL generation
			slug: finalSlug,
		}

		// Write file
		const fileContent = matter.stringify(entryContent, frontmatter)
		await fs.writeFile(filepath, fileContent)

		// Create redirect mapping (using slug without date)
		if (entry.anchor) {
			redirects.push({
				from: `/docs/changelog#${entry.anchor}`,
				to: `/changelog/${finalSlug}`,
			})
		}

		console.log(`✅ Migrated: ${filename} -> /changelog/${finalSlug}`)
	}

	// Generate redirects configuration
	await generateRedirects(redirects)

	return { migratedCount: entries.length, redirects }
}

function detectTags(content, title) {
	const tags = []

	// Content-based tag detection
	const patterns = {
		feature: /new feature|added|introduce/i,
		bugfix: /fix|bug|issue|resolve/i,
		improvement: /improve|enhance|optimize|performance/i,
		breaking: /breaking change|deprecated|removed/i,
		api: /api|endpoint|rest|graphql/i,
		ui: /ui|interface|design|style|css/i,
		security: /security|vulnerability|patch/i,
		docs: /documentation|docs|readme/i,
	}

	for (const [tag, pattern] of Object.entries(patterns)) {
		if (pattern.test(content) || pattern.test(title)) {
			tags.push(tag)
		}
	}

	return tags.length > 0 ? tags : ["general"]
}

async function generateRedirects(redirects) {
	const redirectsPath = path.join(__dirname, "../changelog-redirects.json")
	await fs.writeJson(redirectsPath, redirects, { spaces: 2 })

	// Generate TypeScript config for plugin
	const configContent = `
// Auto-generated redirects for changelog migration
export const changelogRedirects = ${JSON.stringify(redirects, null, 2)};
`

	await fs.writeFile(
		path.join(__dirname, "../src/config/changelog-redirects.ts"),
		configContent,
	)
}

// Run migration
migrateChangelog()
	.then(result => {
		console.log(`✅ Migration complete: ${result.migratedCount} entries`)
		console.log(`📍 Generated ${result.redirects.length} redirects`)
	})
	.catch(console.error)
```

### 2.3 Content Structure Template

**Not implemented** ❌

**Why:** Template file wasn't immediately necessary for the migration. The migrated files already follow a consistent structure, and a template can be added later when creating new changelog entries.

**Original Plan:**

````markdown
---
title: "Template: Feature or Update Title"
date: "YYYY-MM-DD"
slug: "feature-update-title"
tags: ["feature", "api", "improvement"]
author: "Author Name"
authorImage: "/img/team/author.jpg"
heroImage: "/img/changelog/feature-update-title-hero.webp"
summary: "Brief one-line summary for list views and RSS"
hide_table_of_contents: true
---

<!-- Hero image will be auto-inserted by custom component -->

## Overview

Brief introduction to the change or feature.

## What's New

### Feature Name

Description of the feature with:

- Bullet points for clarity
- Code examples when relevant
- Screenshots if applicable

```typescript
// Example code snippet
const example = new Feature({
	option: "value",
})
```
````

## Breaking Changes

⚠️ **Breaking**: Description of any breaking changes.

### Migration Guide

```diff
- oldMethod()
+ newMethod()
```

## Bug Fixes

- Fixed issue with X when Y
- Resolved problem where Z

## Links

- [Documentation](/docs/feature-name)
- [API Reference](/api/feature-name)
- [GitHub PR #123](https://github.com/org/repo/pull/123)

````

### 2.4 Category Configuration

**Not implemented** ❌

**Why:** Docusaurus auto-generates the sidebar from the changelog files without needing explicit category configuration. The sidebar works correctly with the default autogenerated configuration.

**Original Plan:**

```json
{
  "label": "Changelog",
  "position": 1,
  "collapsed": false,
  "collapsible": false,
  "className": "changelog-sidebar-category",
  "link": {
    "type": "doc",
    "id": "index"
  },
  "customProps": {
    "description": "Product updates and release notes",
    "icon": "📋"
  }
}
````

### 2.5 Index Page

**Implemented with simplifications** ✅

**Changes:**
- Created a simpler placeholder index page without the full component imports
- Added inline styles for the tag buttons as a temporary solution
- Included a note that the full component will be implemented in Phase 3

**Actual Implementation:**

```mdx
---
title: What's New
description: Latest updates, features, and improvements to CodeRabbit
hide_table_of_contents: true
pagination_next: null
pagination_prev: null
---

# What's New at CodeRabbit

Stay up to date with the latest features, improvements, and fixes.

## Latest Updates

import { useEffect, useState } from 'react';

export function ChangelogList({ limit = 10 }) {
  // Placeholder implementation
  return (
    <div className="changelog-list">
      <p><em>Note: Full changelog list component will be implemented in Phase 3</em></p>
    </div>
  );
}

<ChangelogList limit={10} />
```

**Original Plan:**

```mdx
---
title: What's New
description: Latest updates, features, and improvements to CodeRabbit
hide_table_of_contents: true
pagination_next: null
pagination_prev: null
---

import ChangelogHero from "@site/src/components/changelog/ChangelogHero"
import ChangelogList from "@site/src/components/changelog/ChangelogList"
import ChangelogSubscribe from "@site/src/components/changelog/ChangelogSubscribe"

<ChangelogHero />

# What's New at CodeRabbit

Stay up to date with the latest features, improvements, and fixes. We ship updates regularly to make your code review experience better.

<ChangelogSubscribe />

## Latest Updates

<ChangelogList limit={10} />

## Browse by Category

<div className="changelog-tags">
	<a href="/changelog/tags/feature" className="changelog-tag">
		✨ Features
	</a>
	<a href="/changelog/tags/improvement" className="changelog-tag">
		🚀 Improvements
	</a>
	<a href="/changelog/tags/bugfix" className="changelog-tag">
		🐛 Bug Fixes
	</a>
	<a href="/changelog/tags/api" className="changelog-tag">
		🔌 API Updates
	</a>
</div>

## Archive

Looking for older updates? Browse our [complete archive](/changelog/archive) or use the search above.
```

### 2.6 RSS Feed Generation

**Not implemented** ❌

**Why:** Deferred to a later phase. The RSS feed generation requires additional dependencies and wasn't critical for the initial migration. Docusaurus may also provide built-in RSS capabilities that can be leveraged.

**Original Plan:**

```javascript
const fs = require("fs-extra")
const path = require("path")
const RSS = require("rss")
const matter = require("gray-matter")
const glob = require("glob")

async function generateChangelogRSS() {
	const changelogFiles = glob.sync(path.join(__dirname, "../changelog/*.md"), {
		ignore: ["**/index.md", "**/_template.md"],
	})

	const entries = await Promise.all(
		changelogFiles.map(async file => {
			const content = await fs.readFile(file, "utf8")
			const { data, content: body } = matter(content)

			return {
				title: data.title,
				description: data.summary || body.substring(0, 200) + "...",
				url: `https://docs.coderabbit.ai/changelog/${data.slug}`,
				date: new Date(data.date),
				categories: data.tags,
				author: data.author,
			}
		}),
	)

	// Sort by date
	entries.sort((a, b) => b.date - a.date)

	const feed = new RSS({
		title: "CodeRabbit Changelog",
		description: "Latest updates and features from CodeRabbit",
		feed_url: "https://docs.coderabbit.ai/changelog/rss.xml",
		site_url: "https://docs.coderabbit.ai/changelog",
		image_url: "https://docs.coderabbit.ai/img/logo.png",
		language: "en",
		pubDate: entries[0]?.date || new Date(),
	})

	entries.forEach(entry => feed.item(entry))

	const xml = feed.xml({ indent: true })
	await fs.writeFile(path.join(__dirname, "../static/changelog/rss.xml"), xml)

	console.log("✅ RSS feed generated")
}

module.exports = { generateChangelogRSS }
```

### 2.7 Validation Script

**Implemented with simplifications** ✅

**Changes:**
1. Used native Node.js instead of `glob` package
2. Removed `chalk` dependency for colored output
3. Used existing `js-yaml` for frontmatter parsing

**Actual Implementation:**

```javascript
const fs = require('fs').promises;
const path = require('path');
const yaml = require('js-yaml');

// Validation logic without external dependencies
async function validateChangelog() {
  const errors = [];
  const warnings = [];
  const slugs = new Set();
  
  const changelogDir = path.join(__dirname, '../changelog');
  const files = await fs.readdir(changelogDir);
  
  // Filter changelog files
  const changelogFiles = files.filter(file => 
    file.endsWith('.md') && 
    file !== 'index.md' && 
    !file.startsWith('_')
  );
  
  // Validate each file...
}
```

**Original Plan:**

```javascript
const fs = require("fs-extra")
const path = require("path")
const matter = require("gray-matter")
const glob = require("glob")
const chalk = require("chalk")

async function validateChangelog() {
	const errors = []
	const warnings = []
	const slugs = new Set()

	const changelogFiles = glob.sync(path.join(__dirname, "../changelog/*.md"), {
		ignore: ["**/index.mdx", "**/_template.md"],
	})

	for (const file of changelogFiles) {
		const content = await fs.readFile(file, "utf8")
		const { data } = matter(content)
		const filename = path.basename(file)

		// Required fields
		if (!data.title) errors.push(`${filename}: Missing required 'title'`)
		if (!data.date) errors.push(`${filename}: Missing required 'date'`)
		if (!data.slug) errors.push(`${filename}: Missing required 'slug'`)
		if (!data.tags || !Array.isArray(data.tags)) {
			errors.push(`${filename}: Missing or invalid 'tags' array`)
		}

		// Date format validation
		if (data.date && !/^\d{4}-\d{2}-\d{2}$/.test(data.date)) {
			errors.push(`${filename}: Invalid date format (expected YYYY-MM-DD)`)
		}

		// Check for duplicate slugs
		if (data.slug) {
			if (slugs.has(data.slug)) {
				errors.push(`${filename}: Duplicate slug '${data.slug}'`)
			}
			slugs.add(data.slug)
		}

		// Filename convention
		if (!filename.match(/^\d{4}-\d{2}-\d{2}-[\w-]+\.md$/)) {
			warnings.push(
				`${filename}: Filename doesn't follow convention YYYY-MM-DD-slug.md`,
			)
		}

		// Hero image optimization
		if (data.heroImage && !data.heroImage.endsWith(".webp")) {
			warnings.push(`${filename}: Consider using .webp for hero image`)
		}
	}

	// Report results
	if (errors.length > 0) {
		console.error(chalk.red("❌ Validation errors:"))
		errors.forEach(err => console.error(chalk.red(`  - ${err}`)))
		process.exit(1)
	}

	if (warnings.length > 0) {
		console.warn(chalk.yellow("⚠️  Warnings:"))
		warnings.forEach(warn => console.warn(chalk.yellow(`  - ${warn}`)))
	}

	console.log(
		chalk.green(`✅ Validated ${changelogFiles.length} changelog entries`),
	)
}

// Run if called directly
if (require.main === module) {
	validateChangelog().catch(console.error)
}

module.exports = { validateChangelog }
```

### 2.8 Configure Docusaurus for Custom URLs

**Implemented differently** ✅

**Changes:**
- Used `processDocMetadata` hook instead of the more complex approaches
- This cleaner approach directly modifies the permalink based on frontmatter slug

**Actual Implementation:**

```typescript
// In docusaurus.config.ts
{
  id: "changelog",
  path: "changelog",
  routeBasePath: "changelog",
  // ... other config
  // Use slug from frontmatter for URLs
  async processDocMetadata({docMetadata}) {
    if (docMetadata.frontMatter.slug) {
      docMetadata.permalink = `/changelog/${docMetadata.frontMatter.slug}`;
    }
    return docMetadata;
  },
}
```

**Original Plan:**

```typescript
;[
	"@docusaurus/plugin-content-docs",
	{
		id: "changelog",
		path: "changelog",
		routeBasePath: "changelog",
		sidebarPath: require.resolve("./sidebarsChangelog.ts"),
		showLastUpdateTime: true,
		// Configure custom permalink pattern
		async docItemComponent({ content, docItem }) {
			// Use the slug from frontmatter for the URL
			const slug = docItem.frontMatter.slug
			if (slug) {
				docItem.permalink = `/changelog/${slug}`
			}
			return "@site/src/components/ChangelogItem"
		},
		// Or use beforeDefaultRemarkPlugins to modify permalinks
		beforeDefaultRemarkPlugins: [
			[
				function customPermalinks() {
					return (tree, file) => {
						if (file.data.frontMatter?.slug) {
							file.data.frontMatter.permalink = `/changelog/${file.data.frontMatter.slug}`
						}
					}
				},
			],
		],
	},
]
```

Alternatively, add permalink directly in frontmatter during migration:

```javascript
// In migrate-changelog.js, update frontmatter generation:
const frontmatter = {
	title: entry.title,
	date: entry.date,
	tags: tags,
	hide_table_of_contents: true,
	heroImage: `/img/changelog/${finalSlug}-hero.webp`,
	slug: finalSlug,
	// Add explicit permalink
	permalink: `/changelog/${finalSlug}`,
}
```

## Migration Execution Plan

### What Was Actually Done:

1. ✅ **Created migration script**: `scripts/migrate-changelog.js`
2. ✅ **Executed migration**: Successfully migrated 52 changelog entries
3. ✅ **Created validation script**: `scripts/validate-changelog.js`
4. ✅ **Validated content**: All entries passed validation
5. ✅ **Created redirect solution**: Client-side hash redirect component
6. ❌ **RSS feed**: Deferred to later phase
7. ✅ **Updated old changelog**: Added redirect component to handle legacy links

### Redirect Strategy Change:

Instead of server-side redirects (which don't support hash fragments), implemented a client-side solution:

1. Created `ChangelogRedirect` component that reads URL hash
2. Updated old `docs/changelog.md` to include this component
3. Component automatically redirects hash-based URLs to new slug-based URLs

```tsx
// src/components/ChangelogRedirect/index.tsx
import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';
import changelogRedirects from '../../../changelog-redirects.json';

export default function ChangelogRedirect(): JSX.Element {
  const history = useHistory();

  useEffect(() => {
    const hash = window.location.hash?.substring(1);
    
    if (hash) {
      // Build redirect map from JSON
      const redirectMap: Record<string, string> = {};
      changelogRedirects.forEach(redirect => {
        const match = redirect.from.match(/#(.+)$/);
        if (match) {
          redirectMap[match[1]] = redirect.to;
        }
      });
      
      if (redirectMap[hash]) {
        history.replace(redirectMap[hash]);
      }
    }
  }, [history]);

  return <div>Redirecting...</div>;
}
```

## Validation Checklist

- [x] All changelog entries successfully migrated to individual files (52 entries)
- [x] Redirects handled via client-side component for legacy anchors
- [x] Frontmatter validates for all entries
- [x] Index page renders (with placeholder components)
- [ ] RSS feed generates valid XML (deferred)
- [x] No broken internal links in migrated content
- [x] Tags properly categorized based on content

## Summary of Implementation

### What Worked Well:
1. **Native Node.js approach** - Avoided unnecessary dependencies
2. **Client-side redirects** - Better solution for hash-based URLs
3. **Simple validation** - Effective without external packages
4. **Slug-based URLs** - Clean URLs without dates as requested

### Scripts Created:
- `migrate-changelog.js` - Main migration script (no external deps)
- `validate-changelog.js` - Validation script (no external deps)  
- `build-changelog-redirects.js` - Generates TypeScript config

### Components Created:
- `ChangelogRedirect` - Handles legacy hash-based redirects
- Placeholder `ChangelogItem` - Minimal wrapper for DocItem

## Next Phase Dependencies

This phase provides:

- ✅ Structured content for Phase 3 components to consume
- ✅ Client-side redirect solution for SEO preservation
- ❌ RSS feed for external integrations (deferred)
- ✅ Validated frontmatter schema for component development
- ✅ Working changelog section at `/changelog`
- ✅ Individual changelog pages with slug-based URLs

## Lessons Learned

1. **Docusaurus redirect plugin limitations** - Doesn't support hash fragments, requiring creative solutions
2. **Native Node.js is sufficient** - Many tasks can be accomplished without external dependencies
3. **Incremental approach works** - Starting with placeholders allows testing the configuration early
4. **Client-side solutions** - Sometimes better than server-side for specific use cases like hash redirects
