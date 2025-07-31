import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from '@docusaurus/router';
import { useChangelogData } from '@site/src/hooks/useChangelogData';
import styles from './styles.module.css';

export default function ChangelogSearch(): JSX.Element {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const history = useHistory();
  const { entries } = useChangelogData();

  // Clear search when navigating
  useEffect(() => {
    setSearchQuery('');
    setIsSearching(false);
  }, [location.pathname]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setIsSearching(query.length > 0);
    
    if (query.length === 0) {
      // Show all items
      document.querySelectorAll('.menu__list-item').forEach(item => {
        (item as HTMLElement).style.display = '';
      });
      return;
    }

    const lowerQuery = query.toLowerCase();
    
    // Filter sidebar items based on search
    document.querySelectorAll('.menu__list-item').forEach(item => {
      const link = item.querySelector('.menu__link');
      if (link) {
        const text = link.textContent?.toLowerCase() || '';
        const shouldShow = text.includes(lowerQuery);
        (item as HTMLElement).style.display = shouldShow ? '' : 'none';
      }
    });

    // Also hide empty categories
    document.querySelectorAll('.menu__list-item--collapsed, .menu__list-item-collapsible').forEach(category => {
      const hasVisibleChildren = category.querySelector('.menu__list-item[style=""]') !== null;
      (category as HTMLElement).style.display = hasVisibleChildren ? '' : 'none';
    });
  };

  const searchResults = searchQuery.length > 2 
    ? entries.filter(entry => 
        entry.metadata.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.metadata.tags.some(tag => tag.includes(searchQuery.toLowerCase()))
      ).slice(0, 5)
    : [];

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Search changelog..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className={styles.searchInput}
        />
        {searchQuery && (
          <button
            className={styles.clearButton}
            onClick={() => handleSearch('')}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>
      
      {searchResults.length > 0 && (
        <div className={styles.searchResults}>
          <div className={styles.resultsHeader}>Quick results:</div>
          {searchResults.map(entry => (
            <a
              key={entry.id}
              href={entry.metadata.permalink}
              className={styles.resultItem}
              onClick={(e) => {
                e.preventDefault();
                history.push(entry.metadata.permalink);
                handleSearch('');
              }}
            >
              <div className={styles.resultTitle}>{entry.metadata.title}</div>
              <div className={styles.resultDate}>
                {new Date(entry.metadata.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}