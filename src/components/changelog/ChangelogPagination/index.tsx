import React from 'react';
import Link from '@docusaurus/Link';
import { useChangelogData } from '@site/src/hooks/useChangelogData';
import styles from './styles.module.css';

interface Props {
  currentSlug: string;
}

export default function ChangelogPagination({ currentSlug }: Props): JSX.Element {
  const { entries } = useChangelogData();
  const currentIndex = entries.findIndex(e => e.metadata.slug === currentSlug);
  
  const prevEntry = currentIndex > 0 ? entries[currentIndex - 1] : null;
  const nextEntry = currentIndex < entries.length - 1 ? entries[currentIndex + 1] : null;
  
  return (
    <nav className={styles.pagination}>
      {prevEntry && (
        <Link to={prevEntry.metadata.permalink} className={`${styles.paginationLink} ${styles.paginationPrev}`}>
          <span className={styles.paginationLabel}>← Previous</span>
          <span className={styles.paginationTitle}>{prevEntry.metadata.title}</span>
        </Link>
      )}
      
      <Link to="/changelog" className={styles.paginationCenter}>
        All Updates
      </Link>
      
      {nextEntry && (
        <Link to={nextEntry.metadata.permalink} className={`${styles.paginationLink} ${styles.paginationNext}`}>
          <span className={styles.paginationLabel}>Next →</span>
          <span className={styles.paginationTitle}>{nextEntry.metadata.title}</span>
        </Link>
      )}
    </nav>
  );
}