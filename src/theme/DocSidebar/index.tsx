import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';
import type DocSidebarType from '@theme/DocSidebar';
import type { WrapperProps } from '@docusaurus/types';
import { useLocation } from '@docusaurus/router';
import ChangelogSearch from '@site/src/components/changelog/ChangelogSearch';

type Props = WrapperProps<typeof DocSidebarType>;

export default function DocSidebarWrapper(props: Props): JSX.Element {
  const location = useLocation();
  const isChangelogSection = location.pathname.startsWith('/changelog');

  return (
    <>
      {isChangelogSection && (
        <div className="changelog-search-mobile">
          <ChangelogSearch />
        </div>
      )}
      <DocSidebar {...props} />
    </>
  );
}