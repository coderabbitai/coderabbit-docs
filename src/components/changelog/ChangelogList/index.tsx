import React from 'react';
import Link from '@docusaurus/Link';
import {useChangelogData} from '@site/src/hooks/useChangelogData';
import type {ChangelogEntry} from '@site/src/hooks/useChangelogData';
import styles from './styles.module.css';

interface Props {
  limit?: number;
  entries?: ChangelogEntry[];
}

export default function ChangelogList({ limit = 10, entries: propEntries }: Props): JSX.Element {
  const { entries: allEntries } = useChangelogData();
  const entries = propEntries || allEntries;
  const entriesToShow = entries.slice(0, limit);

  return (
    <div className={styles.changelogList}>
      {entriesToShow.map((entry) => (
        <article key={entry.id} className={styles.changelogEntry}>
          <Link to={entry.metadata.permalink} className={styles.entryLink}>
            {entry.metadata.heroImage && (
              <div className={styles.entryImage}>
                <img 
                  src={entry.metadata.heroImage} 
                  alt={entry.metadata.title}
                  loading="lazy"
                />
              </div>
            )}
            <div className={styles.entryContent}>
              <div className={styles.entryHeader}>
                <h3 className={styles.entryTitle}>{entry.metadata.title}</h3>
                <time className={styles.entryDate} dateTime={entry.metadata.date}>
                  {new Date(entry.metadata.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </time>
              </div>
              
              {entry.metadata.summary && (
                <p className={styles.entrySummary}>{entry.metadata.summary}</p>
              )}
              
              <div className={styles.entryTags}>
                {entry.metadata.tags.map(tag => (
                  <span key={tag} className={`${styles.tag} ${styles[`tag--${tag}`]}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </article>
      ))}
      
      {entries.length > limit && (
        <div className={styles.viewAll}>
          <Link to="/changelog" className="button button--primary button--lg">
            View All {entries.length} Updates →
          </Link>
        </div>
      )}
    </div>
  );
}