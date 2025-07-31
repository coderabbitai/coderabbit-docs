import { useEffect } from 'react';

export default function ChangelogPageEffect(): null {
  useEffect(() => {
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

  return null;
}