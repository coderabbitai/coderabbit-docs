import React, { useState } from 'react';
import { useChangelogData } from '@site/src/hooks/useChangelogData';
import ChangelogList from '../ChangelogList';
import styles from './styles.module.css';

const TAB_OPTIONS = [
  { value: 'all', label: 'All Updates', icon: '📋' },
  { value: 'feature', label: 'Features', icon: '✨' },
  { value: 'improvement', label: 'Improvements', icon: '🚀' },
  { value: 'bugfix', label: 'Bug Fixes', icon: '🐛' },
  { value: 'breaking', label: 'Breaking', icon: '⚠️' },
];

export default function ChangelogTabs(): JSX.Element {
  const [activeTab, setActiveTab] = useState('all');
  const { entries } = useChangelogData();
  
  const filteredEntries = activeTab === 'all' 
    ? entries 
    : entries.filter(entry => entry.metadata.tags.includes(activeTab));
  
  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabsList}>
        {TAB_OPTIONS.map(tab => {
          const count = tab.value === 'all' 
            ? entries.length 
            : entries.filter(e => e.metadata.tags.includes(tab.value)).length;
            
          return (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`${styles.tab} ${activeTab === tab.value ? styles.tabActive : ''}`}
            >
              <span className={styles.tabIcon}>{tab.icon}</span>
              <span className={styles.tabLabel}>{tab.label}</span>
              <span className={styles.tabCount}>{count}</span>
            </button>
          );
        })}
      </div>
      
      <div className={styles.tabContent}>
        {filteredEntries.length > 0 ? (
          <ChangelogList entries={filteredEntries} />
        ) : (
          <div className={styles.emptyState}>
            <p>No {TAB_OPTIONS.find(t => t.value === activeTab)?.label.toLowerCase()} found.</p>
          </div>
        )}
      </div>
    </div>
  );
}