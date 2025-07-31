import React from 'react';
import styles from './styles.module.css';

export default function ChangelogHero(): JSX.Element {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          <span className={styles.heroEmoji}>🚀</span>
          What's New at CodeRabbit
        </h1>
        <p className={styles.heroSubtitle}>
          We ship fast. Track all the latest features, improvements, and fixes as we continuously enhance your code review experience.
        </p>
        <div className={styles.heroStats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>Weekly</span>
            <span className={styles.statLabel}>Release Cycle</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>Updates This Year</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>24/7</span>
            <span className={styles.statLabel}>Continuous Improvement</span>
          </div>
        </div>
      </div>
      <div className={styles.heroVisual}>
        <div className={styles.animatedBg}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
        </div>
      </div>
    </div>
  );
}