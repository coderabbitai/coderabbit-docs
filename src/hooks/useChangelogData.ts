import changelogData from '@site/src/data/changelog-entries.json';

export interface ChangelogEntry {
  id: string;
  filename: string;
  metadata: {
    title: string;
    date: string;
    slug: string;
    tags: string[];
    permalink: string;
    summary?: string;
    heroImage?: string;
    author?: string;
    authorImage?: string;
  };
}

export interface ChangelogData {
  entries: ChangelogEntry[];
}

export function useChangelogData(): ChangelogData {
  return changelogData as ChangelogData;
}