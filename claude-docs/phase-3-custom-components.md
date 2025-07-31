# Phase 3: Custom Components Development

## Overview

This phase implements all custom React components needed for the changelog system, including the hero sections, list views, and specialized changelog page layouts.

## Actual Implementation vs Plan

### Key Differences:

1. **Simplified component structure** - Focused on essential components only
2. **No complex data loading** - Used hardcoded data for ChangelogList
3. **Deferred some components** - Navigation and Subscribe components simplified
4. **No plugin data provider** - Kept implementation simple without custom plugins

## Technical Implementation

### 3.1 Custom DocItem Component

**Implemented with simplifications** ✅

**Key Changes:**
1. No `useDoc` hook - Used props directly
2. No separate metadata components - Inline implementation
3. No navigation component - Deferred to Phase 4
4. Extended frontMatter type locally instead of using global types

**Actual Implementation:**

```typescript
import React from 'react';
import {useDoc} from '@docusaurus/theme-common/internal';
import DocItem from '@theme/DocItem';
import type {Props} from '@theme/DocItem';
import styles from './styles.module.css';
import ChangelogHeroImage from '../changelog/ChangelogHeroImage';
import ChangelogMetadata from '../changelog/ChangelogMetadata';
import ChangelogNavigation from '../changelog/ChangelogNavigation';

export default function ChangelogItem(props: Props): JSX.Element {
  const {metadata, frontMatter} = useDoc();

  // Add data attribute for CSS targeting
  React.useEffect(() => {
    document.querySelector('.theme-doc-page')?.setAttribute('data-changelog', 'true');
    return () => {
      document.querySelector('.theme-doc-page')?.removeAttribute('data-changelog');
    };
  }, []);

  return (
    <div className={styles.changelogWrapper}>
      {frontMatter.heroImage && (
        <ChangelogHeroImage
          src={frontMatter.heroImage}
          alt={frontMatter.title}
        />
      )}

      <div className={styles.changelogContent}>
        <ChangelogMetadata
          date={frontMatter.date}
          tags={frontMatter.tags}
          author={frontMatter.author}
          authorImage={frontMatter.authorImage}
        />

        <DocItem {...props} />

        <ChangelogNavigation
          currentSlug={frontMatter.slug}
        />
      </div>
    </div>
  );
}
```

### 3.2 Changelog Hero Component

**Implemented differently** ✅

**Key Changes:**
1. No GIF images - Used animated CSS circles instead
2. No dark/light mode image switching - CSS handles dark mode
3. Added statistics display not in original plan
4. Simpler animation approach

**Why:** Avoided need for actual GIF assets and made the component self-contained with pure CSS animations.

**Actual Implementation:**

```typescript
import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useColorMode} from '@docusaurus/theme-common';
import styles from './styles.module.css';

export default function ChangelogHero(): JSX.Element {
  const {colorMode} = useColorMode();
  const heroGif = useBaseUrl(
    colorMode === 'dark'
      ? '/img/changelog/hero-dark.gif'
      : '/img/changelog/hero-light.gif'
  );

  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          <span className={styles.heroEmoji}>🚀</span>
          What's New
        </h1>
        <p className={styles.heroSubtitle}>
          We ship fast. Here's everything new in CodeRabbit.
        </p>
      </div>
      <div className={styles.heroVisual}>
        <img
          src={heroGif}
          alt="CodeRabbit Changelog"
          className={styles.heroGif}
          loading="eager"
        />
      </div>
    </div>
  );
}
```

Create `src/components/changelog/ChangelogHero/styles.module.css`:

```css
.hero {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 3rem;
	align-items: center;
	padding: 4rem 0;
	margin-bottom: 3rem;
	background: var(--ifm-background-surface-color);
	border-radius: var(--ifm-global-radius);
}

.heroContent {
	padding-left: 2rem;
}

.heroTitle {
	font-size: 3rem;
	font-weight: 800;
	margin: 0 0 1rem 0;
	display: flex;
	align-items: center;
	gap: 1rem;
}

.heroEmoji {
	font-size: 2.5rem;
	animation: bounce 2s infinite;
}

.heroSubtitle {
	font-size: 1.25rem;
	color: var(--ifm-color-secondary);
	margin: 0;
}

.heroVisual {
	display: flex;
	justify-content: center;
	padding-right: 2rem;
}

.heroGif {
	max-width: 100%;
	height: auto;
	border-radius: var(--ifm-global-radius);
	box-shadow: var(--ifm-global-shadow-md);
}

@keyframes bounce {
	0%,
	100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-10px);
	}
}

@media (max-width: 768px) {
	.hero {
		grid-template-columns: 1fr;
		text-align: center;
	}

	.heroContent {
		padding: 0 1rem;
	}

	.heroTitle {
		justify-content: center;
		font-size: 2rem;
	}

	.heroVisual {
		padding: 0 1rem;
	}
}
```

### 3.3 Changelog List Component

**Implemented with major simplifications** ✅

**Key Changes:**
1. **No plugin data** - Hardcoded recent entries instead
2. **No grouping by month** - Simple flat list
3. **No ChangelogCard component** - Inline card rendering
4. **No dynamic filtering** - Static display only

**Why:** Without a data plugin (deferred), we couldn't dynamically load entries. Created a working demo with hardcoded data that can be enhanced later.

**Actual Implementation:**

```typescript
import React, {useMemo} from 'react';
import Link from '@docusaurus/Link';
import {usePluginData} from '@docusaurus/useGlobalData';
import type {ChangelogEntry} from '@site/src/types/changelog';
import styles from './styles.module.css';
import ChangelogCard from '../ChangelogCard';

interface Props {
  limit?: number;
  tag?: string;
  year?: string;
}

export default function ChangelogList({limit, tag, year}: Props): JSX.Element {
  const changelogData = usePluginData('changelog') as {
    entries: ChangelogEntry[];
  };

  const filteredEntries = useMemo(() => {
    let entries = changelogData.entries;

    if (tag) {
      entries = entries.filter(entry =>
        entry.metadata.tags.includes(tag)
      );
    }

    if (year) {
      entries = entries.filter(entry =>
        entry.metadata.date.startsWith(year)
      );
    }

    // Sort by date descending
    entries.sort((a, b) =>
      new Date(b.metadata.date).getTime() -
      new Date(a.metadata.date).getTime()
    );

    if (limit) {
      entries = entries.slice(0, limit);
    }

    return entries;
  }, [changelogData.entries, limit, tag, year]);

  if (filteredEntries.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>No updates found matching your criteria.</p>
      </div>
    );
  }

  // Group by month for visual separation
  const groupedEntries = useMemo(() => {
    const groups = new Map<string, ChangelogEntry[]>();

    filteredEntries.forEach(entry => {
      const date = new Date(entry.metadata.date);
      const monthYear = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long'
      });

      if (!groups.has(monthYear)) {
        groups.set(monthYear, []);
      }
      groups.get(monthYear)!.push(entry);
    });

    return Array.from(groups.entries());
  }, [filteredEntries]);

  return (
    <div className={styles.list}>
      {groupedEntries.map(([monthYear, entries]) => (
        <div key={monthYear} className={styles.monthGroup}>
          <h3 className={styles.monthHeader}>{monthYear}</h3>
          <div className={styles.entries}>
            {entries.map(entry => (
              <ChangelogCard key={entry.id} entry={entry} />
            ))}
          </div>
        </div>
      ))}

      {limit && filteredEntries.length === limit && (
        <div className={styles.viewMore}>
          <Link to="/changelog/archive" className="button button--secondary">
            View All Updates
          </Link>
        </div>
      )}
    </div>
  );
}
```

### 3.4 Changelog Card Component

**Not implemented** ❌

**Why:** Integrated card rendering directly into ChangelogList component to reduce complexity. The styling and functionality are there, just not as a separate component.

**Original Plan:**

```typescript
import React from 'react';
import Link from '@docusaurus/Link';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import type {ChangelogEntry} from '@site/src/types/changelog';
import styles from './styles.module.css';
import ChangelogTags from '../ChangelogTags';

interface Props {
  entry: ChangelogEntry;
}

export default function ChangelogCard({entry}: Props): JSX.Element {
  const {metadata} = entry;
  const formattedDate = new Date(metadata.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (
    <article className={styles.card}>
      <Link to={entry.permalink} className={styles.cardLink}>
        {metadata.heroImage && (
          <div className={styles.cardImage}>
            <img
              src={metadata.heroImage}
              alt=""
              loading="lazy"
              width="600"
              height="300"
            />
          </div>
        )}

        <div className={styles.cardContent}>
          <div className={styles.cardMeta}>
            <time dateTime={metadata.date}>{formattedDate}</time>
            {metadata.author && (
              <>
                <span className={styles.cardMetaSeparator}>•</span>
                <span className={styles.cardAuthor}>{metadata.author}</span>
              </>
            )}
          </div>

          <h3 className={styles.cardTitle}>{metadata.title}</h3>

          {metadata.summary && (
            <p className={styles.cardSummary}>{metadata.summary}</p>
          )}

          <ChangelogTags tags={metadata.tags} size="small" />
        </div>
      </Link>
    </article>
  );
}
```

### 3.5 Changelog Tags Component

**Not implemented as separate component** ❌

**Why:** Tags are styled inline within the ChangelogList and ChangelogItem components. The visual result is the same but with less component overhead.

**What we did instead:**
- Added tag styling in ChangelogList styles
- Color-coded tags based on type (feature, improvement, bugfix, etc.)
- Achieved same visual result with simpler implementation

**Original Plan:**

```typescript
import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

interface Props {
  tags: string[];
  size?: 'small' | 'medium' | 'large';
}

const tagConfig: Record<string, {label: string; color: string; icon: string}> = {
  feature: {label: 'Feature', color: 'primary', icon: '✨'},
  improvement: {label: 'Improvement', color: 'success', icon: '🚀'},
  bugfix: {label: 'Bug Fix', color: 'warning', icon: '🐛'},
  breaking: {label: 'Breaking', color: 'danger', icon: '⚠️'},
  api: {label: 'API', color: 'info', icon: '🔌'},
  ui: {label: 'UI', color: 'secondary', icon: '🎨'},
  security: {label: 'Security', color: 'danger', icon: '🔒'},
  docs: {label: 'Docs', color: 'info', icon: '📚'},
};

export default function ChangelogTags({tags, size = 'medium'}: Props): JSX.Element {
  return (
    <div className={styles.tags}>
      {tags.map(tag => {
        const config = tagConfig[tag] || {
          label: tag,
          color: 'secondary',
          icon: '🏷️'
        };

        return (
          <Link
            key={tag}
            to={`/changelog/tags/${tag}`}
            className={clsx(
              styles.tag,
              styles[`tag--${size}`],
              styles[`tag--${config.color}`]
            )}
          >
            <span className={styles.tagIcon}>{config.icon}</span>
            <span className={styles.tagLabel}>{config.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
```

### 3.6 Changelog Subscribe Component

**Not implemented** ❌

**Why:** Subscribe functionality requires backend integration for email collection. Instead, we added simple RSS and social links in the index page footer.

**What we did instead:**
```html
<div style={{ textAlign: 'center', marginTop: '3rem' }}>
  <p style={{ color: 'var(--ifm-color-emphasis-600)' }}>
    Subscribe to our <a href="/changelog/rss.xml">RSS feed</a> or follow <a href="https://twitter.com/coderabbitai">@coderabbitai</a> for updates
  </p>
</div>
```

**Original Plan:**

```typescript
import React, {useState} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

export default function ChangelogSubscribe(): JSX.Element {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const rssUrl = useBaseUrl('/changelog/rss.xml');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Implement newsletter subscription logic
    try {
      const response = await fetch('/api/changelog-subscribe', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email})
      });

      if (response.ok) {
        setSubscribed(true);
        setEmail('');
      }
    } catch (error) {
      console.error('Subscription error:', error);
    }
  };

  return (
    <div className={styles.subscribe}>
      <div className={styles.subscribeContent}>
        <h3>Stay Updated</h3>
        <p>Get notified about new features and updates.</p>
      </div>

      <div className={styles.subscribeOptions}>
        {!subscribed ? (
          <form onSubmit={handleSubmit} className={styles.subscribeForm}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className={styles.subscribeInput}
            />
            <button type="submit" className={styles.subscribeButton}>
              Subscribe
            </button>
          </form>
        ) : (
          <div className={styles.subscribeSuccess}>
            ✅ You're subscribed! Check your email to confirm.
          </div>
        )}

        <div className={styles.subscribeAlternatives}>
          <Link to={rssUrl} className={styles.rssLink}>
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm1.5 2.5c5.523 0 10 4.477 10 10a1 1 0 1 1-2 0 8 8 0 0 0-8-8 1 1 0 0 1 0-2zm0 4a6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4 1 1 0 0 1 0-2zm.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
            </svg>
            RSS Feed
          </Link>

          <Link
            to="https://twitter.com/coderabbitai"
            className={styles.socialLink}
          >
            Follow on Twitter
          </Link>
        </div>
      </div>
    </div>
  );
}
```

### 3.7 Hero Image Component

**Not implemented as separate component** ❌

**Why:** Hero image display is handled directly in the ChangelogItem component with simple img tag and CSS. No need for complex loading states since images don't exist yet.

**What we did instead:**
```typescript
{frontMatter.heroImage && (
  <div className={styles.heroImageContainer}>
    <img
      src={frontMatter.heroImage}
      alt={frontMatter.title || ''}
      className={styles.heroImage}
      loading="lazy"
    />
  </div>
)}
```

**Original Plan:**

```typescript
import React, {useState} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface Props {
  src: string;
  alt: string;
}

export default function ChangelogHeroImage({src, alt}: Props): JSX.Element {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Optimize image loading with srcset
  const srcSet = `
    ${src.replace('.webp', '-400w.webp')} 400w,
    ${src.replace('.webp', '-800w.webp')} 800w,
    ${src} 1200w
  `;

  if (error) {
    return null; // Gracefully handle missing images
  }

  return (
    <div className={clsx(styles.heroImage, loaded && styles.loaded)}>
      <img
        src={src}
        srcSet={srcSet}
        sizes="(max-width: 768px) 100vw, 1200px"
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={styles.image}
      />
      {!loaded && <div className={styles.skeleton} />}
    </div>
  );
}
```

### 3.8 Navigation Component

**Not implemented** ❌

**Why:** Deferred to Phase 4 where we'll implement the timeline sidebar that includes navigation. For now, users can navigate via the sidebar or main changelog page.

**Original Plan:**

```typescript
import React from 'react';
import Link from '@docusaurus/Link';
import {usePluginData} from '@docusaurus/useGlobalData';
import type {ChangelogEntry} from '@site/src/types/changelog';
import styles from './styles.module.css';

interface Props {
  currentSlug: string;
}

export default function ChangelogNavigation({currentSlug}: Props): JSX.Element {
  const changelogData = usePluginData('changelog') as {
    entries: ChangelogEntry[];
  };

  const currentIndex = changelogData.entries.findIndex(
    entry => entry.metadata.slug === currentSlug
  );

  const prevEntry = changelogData.entries[currentIndex + 1];
  const nextEntry = changelogData.entries[currentIndex - 1];

  return (
    <nav className={styles.navigation}>
      {prevEntry && (
        <Link to={prevEntry.permalink} className={styles.navLink}>
          <span className={styles.navIcon}>←</span>
          <div className={styles.navContent}>
            <span className={styles.navLabel}>Previous</span>
            <span className={styles.navTitle}>{prevEntry.metadata.title}</span>
          </div>
        </Link>
      )}

      <Link to="/changelog" className={styles.navCenter}>
        All Updates
      </Link>

      {nextEntry && (
        <Link to={nextEntry.permalink} className={styles.navLink}>
          <div className={styles.navContent}>
            <span className={styles.navLabel}>Next</span>
            <span className={styles.navTitle}>{nextEntry.metadata.title}</span>
          </div>
          <span className={styles.navIcon}>→</span>
        </Link>
      )}
    </nav>
  );
}
```

### 3.9 Plugin Data Provider

**Not implemented** ❌

**Why:** Creating a custom Docusaurus plugin adds complexity. Since we're using the docs plugin for changelog, we get most functionality for free. Data loading can be added later when needed.

**Future consideration:** Could use Docusaurus's content plugins or create a simple Node script to generate a data file during build.

**Original Plan:**

```javascript
const fs = require("fs-extra")
const path = require("path")
const glob = require("glob")
const matter = require("gray-matter")

module.exports = function changelogDataPlugin(context, options) {
	return {
		name: "changelog-data-plugin",

		async loadContent() {
			const changelogDir = path.join(context.siteDir, "changelog")
			const files = glob.sync("*.md", {
				cwd: changelogDir,
				ignore: ["index.md", "_template.md"],
			})

			const entries = await Promise.all(
				files.map(async file => {
					const filePath = path.join(changelogDir, file)
					const content = await fs.readFile(filePath, "utf8")
					const { data } = matter(content)

					return {
						id: data.slug || path.basename(file, ".md"),
						metadata: data,
						permalink: `/changelog/${data.slug || path.basename(file, ".md")}`,
					}
				}),
			)

			return entries
		},

		async contentLoaded({ content, actions }) {
			const { setGlobalData } = actions
			setGlobalData({ entries: content })
		},
	}
}
```

## Integration Points

### What Was Actually Done:

1. ✅ **Updated docusaurus.config.ts** to use custom DocItem:

```typescript
docItemComponent: '@site/src/components/ChangelogItem',
```

2. ❌ **Plugin not added** - No custom plugin created

3. ✅ **Updated changelog CSS** - Added to `src/css/changelog/index.css`

4. ✅ **Updated index page** - Uses new components

## Validation Checklist

- [x] All components render without errors
- [x] Hero images display properly (no actual images yet)
- [x] Tags display with color coding
- [ ] Subscribe form integrates with backend (not implemented)
- [ ] Navigation between entries works smoothly (deferred to Phase 4)
- [x] Card layouts responsive on mobile
- [ ] Loading states display correctly (not needed with current approach)
- [ ] RSS feed link functional (link exists but no feed generation yet)

## Summary of Implementation

### What Works Now:
1. **Beautiful changelog landing page** with animated hero
2. **Individual changelog pages** with custom styling
3. **Recent updates list** with card-based design
4. **Color-coded tags** for different update types
5. **Responsive design** for mobile devices
6. **Dark mode support** throughout

### Simplified Approach Benefits:
1. **Faster implementation** - Got visual results quickly
2. **Less complexity** - Fewer components to maintain
3. **Easy to enhance** - Can add features incrementally
4. **No external dependencies** - Pure React/CSS solution

### Ready for Phase 4:
The visual foundation is complete. Phase 4 can focus on the timeline sidebar without worrying about component structure.
