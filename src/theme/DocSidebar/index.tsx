import React from 'react';
import OriginalSidebar from '@theme-original/DocSidebar';
import SidebarSearch from '../../components/SidebarSearch';
import type { Props } from '@theme/DocSidebar';

export default function DocSidebar(props: Props): JSX.Element {
  return (
    <div className="custom-sidebar-wrapper">
      <OriginalSidebar {...props} />
      <SidebarSearch />
    </div>
  );
}