import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface Props {
  date: string;
  title: string;
}

export default function ChangelogDateDisplay({ date, title }: Props): JSX.Element {
  // Handle invalid or missing dates
  if (!date) {
    return null;
  }
  
  const dateObj = new Date(date);
  
  // Check if date is valid
  if (isNaN(dateObj.getTime())) {
    return null;
  }
  
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const dayOfWeek = dateObj.toLocaleDateString('en-US', {
    weekday: 'long'
  });
  
  return (
    <div className={styles.dateDisplay}>
      <div className={styles.dateWrapper}>
        <div className={styles.datePrimary}>
          <span className={styles.dateMonth}>
            {dateObj.toLocaleDateString('en-US', { month: 'short' })}
          </span>
          <span className={styles.dateDay}>
            {dateObj.getDate()}
          </span>
        </div>
        <div className={styles.dateSecondary}>
          <span className={styles.dateYear}>{dateObj.getFullYear()}</span>
          <span className={styles.dateDayOfWeek}>{dayOfWeek}</span>
        </div>
      </div>
      
      <div className={styles.timeline}>
        <div className={styles.timelineDot} />
        <div className={styles.timelineLine} />
      </div>
      
      <nav className={styles.navigation}>
        <Link to="/changelog" className={styles.navLink}>
          ← All Updates
        </Link>
      </nav>
    </div>
  );
}