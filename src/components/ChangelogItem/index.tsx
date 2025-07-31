import React from 'react';
import DocItem from '@theme/DocItem';
import type {Props} from '@theme/DocItem';
import ChangelogPagination from '@site/src/components/changelog/ChangelogPagination';
import styles from './styles.module.css';

// Extend the frontMatter type for changelog-specific fields
interface ChangelogFrontMatter {
  heroImage?: string;
  date?: string;
  tags?: string[];
  title?: string;
  slug?: string;
  [key: string]: any;
}

export default function ChangelogItem(props: Props): JSX.Element {
  const { content } = props;
  const frontMatter = content.frontMatter as ChangelogFrontMatter;

  // Add data attribute for CSS targeting to hide ToC
  React.useEffect(() => {
    const docPage = document.querySelector('.theme-doc-page');
    if (docPage) {
      docPage.setAttribute('data-changelog', 'true');
    }
    return () => {
      const docPage = document.querySelector('.theme-doc-page');
      if (docPage) {
        docPage.removeAttribute('data-changelog');
      }
    };
  }, []);

  return (
    <div className={styles.changelogWrapper} data-changelog="true">
      {frontMatter.heroImage && (
        <div className={styles.heroImage}>
          <img src={frontMatter.heroImage} alt={frontMatter.title || ''} />
        </div>
      )}
      
      <DocItem {...props} />
      
      <ChangelogPagination currentSlug={frontMatter.slug || ''} />
    </div>
  );
}