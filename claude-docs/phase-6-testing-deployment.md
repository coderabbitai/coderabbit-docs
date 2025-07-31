# Phase 6: Testing and Deployment

## Overview

This phase covers comprehensive testing strategies, performance optimization, deployment procedures, and monitoring setup for the changelog system.

## Technical Implementation

### 6.1 Unit Testing Setup

Create `tests/changelog/components.test.tsx`:

```typescript
import React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import '@testing-library/jest-dom';
import ChangelogList from '@site/src/components/changelog/ChangelogList';
import ChangelogCard from '@site/src/components/changelog/ChangelogCard';
import ChangelogSidebar from '@site/src/components/changelog/ChangelogSidebar';

// Mock global data
jest.mock('@docusaurus/useGlobalData', () => ({
  usePluginData: () => ({
    entries: [
      {
        id: '2025-01-20-new-features',
        metadata: {
          title: 'New Features Released',
          date: '2025-01-20',
          slug: 'new-features',
          tags: ['feature', 'api'],
          heroImage: '/img/changelog/new-features-hero.webp',
          summary: 'Test summary'
        },
        permalink: '/changelog/new-features'
      }
    ]
  })
}));

describe('ChangelogList', () => {
  it('renders changelog entries', () => {
    render(
      <MemoryRouter>
        <ChangelogList />
      </MemoryRouter>
    );

    expect(screen.getByText('New Features Released')).toBeInTheDocument();
  });

  it('filters by tag', () => {
    render(
      <MemoryRouter>
        <ChangelogList tag="feature" />
      </MemoryRouter>
    );

    expect(screen.getByText('New Features Released')).toBeInTheDocument();
  });

  it('limits entries when limit prop provided', () => {
    render(
      <MemoryRouter>
        <ChangelogList limit={1} />
      </MemoryRouter>
    );

    const entries = screen.getAllByRole('article');
    expect(entries).toHaveLength(1);
  });
});

describe('ChangelogSidebar', () => {
  it('groups entries by year and month', () => {
    render(
      <MemoryRouter>
        <ChangelogSidebar />
      </MemoryRouter>
    );

    expect(screen.getByText('2025')).toBeInTheDocument();
    expect(screen.getByText('January')).toBeInTheDocument();
  });

  it('highlights active entry', () => {
    render(
      <MemoryRouter initialEntries={['/changelog/new-features']}>
        <ChangelogSidebar />
      </MemoryRouter>
    );

    const activeEntry = screen.getByRole('link', {name: /New Features Released/});
    expect(activeEntry.parentElement).toHaveClass('entryActive');
  });
});
```

### 6.2 Integration Testing

Create `tests/changelog/integration.test.ts`:

```typescript
import { test, expect } from "@playwright/test"

test.describe("Changelog Integration", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/changelog")
	})

	test("changelog index page loads", async ({ page }) => {
		await expect(page.locator("h1")).toContainText("What's New")
		await expect(page.locator(".changelog-hero")).toBeVisible()
	})

	test("sidebar navigation works", async ({ page }) => {
		// Click on an entry in sidebar
		await page.click("text=New Features Released")

		// Verify navigation
		await expect(page).toHaveURL(/\/changelog\/new-features/)
		await expect(page.locator("h1")).toContainText("New Features Released")
	})

	test("tag filtering works", async ({ page }) => {
		await page.click("text=Features")

		// Verify filtered view
		await expect(page).toHaveURL(/\/changelog\/tags\/feature/)
		await expect(page.locator(".changelog-card")).toHaveCount(5) // Adjust based on test data
	})

	test("search functionality", async ({ page }) => {
		await page.fill('input[placeholder="Search updates..."]', "api")
		await page.waitForTimeout(300) // Debounce

		const results = page.locator(".searchResult")
		await expect(results).toHaveCount(3) // Adjust based on test data
	})

	test("responsive sidebar toggle", async ({ page }) => {
		// Set mobile viewport
		await page.setViewportSize({ width: 375, height: 667 })

		// Sidebar should be hidden
		await expect(page.locator(".changelog-sidebar")).not.toBeVisible()

		// Click toggle
		await page.click('[aria-label="Toggle changelog navigation"]')

		// Sidebar should be visible
		await expect(page.locator(".changelog-sidebar")).toBeVisible()
	})
})
```

### 6.3 Performance Testing

Create `tests/changelog/performance.test.ts`:

```typescript
import { test, expect } from "@playwright/test"
import lighthouse from "lighthouse"
import { chromium } from "playwright"

test.describe("Changelog Performance", () => {
	test("meets performance benchmarks", async () => {
		const browser = await chromium.launch({
			args: ["--remote-debugging-port=9222"],
		})

		const { lhr } = await lighthouse("http://localhost:3000/changelog", {
			port: 9222,
			onlyCategories: ["performance"],
		})

		// Check key metrics
		expect(lhr.categories.performance.score).toBeGreaterThan(0.9)

		const metrics = lhr.audits.metrics.details.items[0]
		expect(metrics.firstContentfulPaint).toBeLessThan(1500)
		expect(metrics.largestContentfulPaint).toBeLessThan(2500)
		expect(metrics.cumulativeLayoutShift).toBeLessThan(0.1)

		await browser.close()
	})

	test("images are optimized", async ({ page }) => {
		await page.goto("/changelog")

		// Check all images
		const images = await page.locator("img").all()

		for (const img of images) {
			const src = await img.getAttribute("src")

			// Verify WebP format
			expect(src).toMatch(/\.webp$/)

			// Check lazy loading
			const loading = await img.getAttribute("loading")
			expect(loading).toBe("lazy")

			// Verify srcset for responsive images
			const srcset = await img.getAttribute("srcset")
			expect(srcset).toBeTruthy()
		}
	})
})
```

### 6.4 Accessibility Testing

Create `tests/changelog/accessibility.test.ts`:

```typescript
import { test, expect } from "@playwright/test"
import { injectAxe, checkA11y } from "axe-playwright"

test.describe("Changelog Accessibility", () => {
	test("changelog pages pass WCAG 2.1 AA", async ({ page }) => {
		await page.goto("/changelog")
		await injectAxe(page)

		// Check main page
		await checkA11y(page, null, {
			detailedReport: true,
			detailedReportOptions: {
				html: true,
			},
		})

		// Check individual entry
		await page.click("text=New Features Released")
		await checkA11y(page)
	})

	test("keyboard navigation works", async ({ page }) => {
		await page.goto("/changelog")

		// Tab through interactive elements
		await page.keyboard.press("Tab")
		await expect(page.locator(":focus")).toHaveAttribute("href", "/changelog")

		// Navigate sidebar with arrow keys
		await page.focus('[role="tree"]')
		await page.keyboard.press("ArrowDown")
		await expect(page.locator('[role="treeitem"]:focus')).toBeTruthy()
	})

	test("screen reader announcements", async ({ page }) => {
		await page.goto("/changelog")

		// Check ARIA labels
		const sidebar = page.locator('nav[aria-label="Changelog navigation"]')
		await expect(sidebar).toBeTruthy()

		// Check heading hierarchy
		const h1 = await page.locator("h1").count()
		expect(h1).toBe(1)
	})
})
```

### 6.5 SEO Validation

Create `scripts/validate-changelog-seo.js`:

```javascript
const fs = require("fs-extra")
const path = require("path")
const glob = require("glob")
const matter = require("gray-matter")
const { parseHTML } = require("linkedom")

async function validateSEO() {
	const errors = []
	const warnings = []

	// Check all changelog files
	const files = glob.sync(path.join(__dirname, "../changelog/*.md"))

	for (const file of files) {
		const content = await fs.readFile(file, "utf8")
		const { data, content: body } = matter(content)
		const filename = path.basename(file)

		// Check meta requirements
		if (!data.title || data.title.length > 60) {
			errors.push(`${filename}: Title missing or too long (max 60 chars)`)
		}

		if (!data.description || data.description.length > 160) {
			warnings.push(
				`${filename}: Description missing or too long (max 160 chars)`,
			)
		}

		// Check for proper heading structure
		const headings = body.match(/^#{1,6}\s.+$/gm) || []
		const h1Count = headings.filter(h => h.startsWith("# ")).length

		if (h1Count > 1) {
			errors.push(`${filename}: Multiple H1 headings found`)
		}

		// Check image alt text
		const images = body.match(/!\[([^\]]*)\]/g) || []
		images.forEach(img => {
			if (img === "![]") {
				warnings.push(`${filename}: Image missing alt text`)
			}
		})
	}

	// Validate sitemap
	const sitemapPath = path.join(__dirname, "../build/sitemap.xml")
	if (await fs.pathExists(sitemapPath)) {
		const sitemap = await fs.readFile(sitemapPath, "utf8")
		const changelogUrls = sitemap.match(/<loc>.*\/changelog\/.*<\/loc>/g) || []

		console.log(`✅ ${changelogUrls.length} changelog URLs in sitemap`)
	}

	return { errors, warnings }
}

module.exports = { validateSEO }
```

### 6.6 Build Optimization

Create `scripts/optimize-changelog-build.js`:

```javascript
const fs = require("fs-extra")
const path = require("path")
const sharp = require("sharp")
const glob = require("glob")

async function optimizeImages() {
	const images = glob.sync(
		path.join(__dirname, "../static/img/changelog/*.{jpg,png}"),
	)

	for (const imagePath of images) {
		const outputPath = imagePath.replace(/\.(jpg|png)$/, ".webp")

		// Create WebP version
		await sharp(imagePath).webp({ quality: 85 }).toFile(outputPath)

		// Create responsive versions
		const sizes = [400, 800, 1200]
		for (const size of sizes) {
			const sizedPath = outputPath.replace(".webp", `-${size}w.webp`)
			await sharp(imagePath)
				.resize(size)
				.webp({ quality: 85 })
				.toFile(sizedPath)
		}

		console.log(`✅ Optimized: ${path.basename(imagePath)}`)
	}
}

async function generateMetadata() {
	const entries = glob.sync(path.join(__dirname, "../changelog/*.md"))
	const metadata = []

	for (const entry of entries) {
		const content = await fs.readFile(entry, "utf8")
		const { data } = matter(content)

		metadata.push({
			slug: data.slug,
			title: data.title,
			date: data.date,
			tags: data.tags,
			image: data.heroImage,
		})
	}

	// Save for build-time optimization
	await fs.writeJson(
		path.join(__dirname, "../.cache/changelog-metadata.json"),
		metadata,
		{ spaces: 2 },
	)
}

module.exports = { optimizeImages, generateMetadata }
```

### 6.7 Deployment Configuration

Create `scripts/deploy-changelog.sh`:

```bash
#!/bin/bash

# Pre-deployment checks
echo "🔍 Running pre-deployment checks..."

# Validate changelog
npm run changelog:validate
if [ $? -ne 0 ]; then
  echo "❌ Changelog validation failed"
  exit 1
fi

# Run tests
npm test -- tests/changelog
if [ $? -ne 0 ]; then
  echo "❌ Tests failed"
  exit 1
fi

# Build site
echo "🏗️  Building site..."
npm run build

# Optimize build
echo "🎯 Optimizing build..."
node scripts/optimize-changelog-build.js

# Check build size
BUILD_SIZE=$(du -sh build | cut -f1)
echo "📦 Build size: $BUILD_SIZE"

# Run lighthouse CI
echo "🏃 Running Lighthouse CI..."
npm run lhci:changelog

# Deploy to staging
echo "🚀 Deploying to staging..."
npm run deploy:staging

# Run smoke tests
echo "🧪 Running smoke tests..."
npm run test:e2e:staging

echo "✅ Deployment preparation complete!"
```

### 6.8 Monitoring Setup

Create `src/utils/changelog-analytics.ts`:

```typescript
interface ChangelogEvent {
	action: "view" | "search" | "filter" | "navigate"
	label: string
	value?: number
}

export function trackChangelogEvent(event: ChangelogEvent): void {
	// Google Analytics 4
	if (typeof gtag !== "undefined") {
		gtag("event", `changelog_${event.action}`, {
			event_category: "changelog",
			event_label: event.label,
			value: event.value,
		})
	}

	// Custom analytics endpoint
	fetch("/api/analytics/changelog", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			...event,
			timestamp: new Date().toISOString(),
			page: window.location.pathname,
		}),
	}).catch(console.error)
}

// Performance monitoring
export function monitorChangelogPerformance(): void {
	if ("PerformanceObserver" in window) {
		const observer = new PerformanceObserver(list => {
			for (const entry of list.getEntries()) {
				if (entry.name.includes("changelog")) {
					trackChangelogEvent({
						action: "performance",
						label: entry.name,
						value: Math.round(entry.duration),
					})
				}
			}
		})

		observer.observe({ entryTypes: ["navigation", "resource"] })
	}
}
```

### 6.9 Error Boundary

Create `src/components/changelog/ChangelogErrorBoundary.tsx`:

```typescript
import React from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallback from '@theme/Error';

interface Props {
  children: React.ReactNode;
}

function ChangelogErrorFallback({error, resetErrorBoundary}) {
  React.useEffect(() => {
    // Log to monitoring service
    console.error('Changelog Error:', error);

    // Track error
    if (typeof gtag !== 'undefined') {
      gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        error_type: 'changelog'
      });
    }
  }, [error]);

  return (
    <div className="changelog-error">
      <h2>Something went wrong</h2>
      <p>We're having trouble loading the changelog.</p>
      <button onClick={resetErrorBoundary}>Try Again</button>
      <a href="/docs/changelog">View Legacy Changelog</a>
    </div>
  );
}

export default function ChangelogErrorBoundary({children}: Props): JSX.Element {
  return (
    <ErrorBoundary
      FallbackComponent={ChangelogErrorFallback}
      onReset={() => window.location.reload()}
    >
      {children}
    </ErrorBoundary>
  );
}
```

### 6.10 CI/CD Pipeline

Create `.github/workflows/changelog-deploy.yml`:

```yaml
name: Changelog Deployment

on:
  push:
    branches: [main]
    paths:
      - "changelog/**"
      - "src/components/changelog/**"
      - "src/css/changelog/**"

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: "18"

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Run tests
        run: |
          pnpm test:changelog
          pnpm test:a11y

      - name: Build site
        run: pnpm build

      - name: Run Lighthouse
        uses: treosh/lighthouse-ci-action@v9
        with:
          urls: |
            http://localhost:3000/changelog
            http://localhost:3000/changelog/2025-01-20-example
          uploadArtifacts: true

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - uses: actions/checkout@v3

      - name: Deploy to production
        run: |
          pnpm build
          pnpm deploy
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

      - name: Notify team
        uses: 8398a7/action-slack@v3
        with:
          status: ${{ job.status }}
          text: "Changelog deployed to production"
        env:
          SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK }}
```

## Deployment Checklist

- [ ] All tests passing (unit, integration, a11y, performance)
- [ ] SEO validation complete
- [ ] Images optimized to WebP format
- [ ] Build size under 10MB
- [ ] Lighthouse score > 90 for all categories
- [ ] Error tracking configured
- [ ] Analytics implemented
- [ ] Staging deployment tested
- [ ] Rollback plan documented
- [ ] Team notified of deployment

## Post-Deployment Monitoring

1. **Performance Metrics**

   - Core Web Vitals monitoring
   - Real User Monitoring (RUM)
   - Error rate tracking

2. **User Engagement**

   - Page views and unique visitors
   - Search usage patterns
   - Tag filter popularity
   - Average time on page

3. **Technical Health**
   - 404 error monitoring
   - Redirect effectiveness
   - Build time trends
   - CDN cache hit rates

## Rollback Procedure

```bash
# Quick rollback to previous version
git revert HEAD
npm run build
npm run deploy

# Or restore from backup
npm run restore:backup --date=2025-01-20
```

## Success Criteria

- Zero runtime errors in first 24 hours
- Page load time < 2 seconds on 3G
- 100% of old URLs properly redirected
- Accessibility score maintains 100%
- Positive user feedback on new design
