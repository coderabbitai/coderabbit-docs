import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';
import changelogRedirects from '../../../changelog-redirects.json';

export default function ChangelogRedirect(): JSX.Element {
  const history = useHistory();

  useEffect(() => {
    // Get the hash from the URL
    const hash = window.location.hash?.substring(1);
    
    if (hash) {
      // Build a map of hash anchors to new URLs
      const redirectMap: Record<string, string> = {};
      
      changelogRedirects.forEach(redirect => {
        // Extract the hash from the old URL (e.g., "/docs/changelog#2025-07-23" -> "2025-07-23")
        const match = redirect.from.match(/#(.+)$/);
        if (match) {
          redirectMap[match[1]] = redirect.to;
        }
      });
      
      // Check if we have a redirect for this hash
      if (redirectMap[hash]) {
        // Redirect to the new URL
        history.replace(redirectMap[hash]);
      }
    }
  }, [history]);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <p>Redirecting to the new changelog location...</p>
      <p>If you're not redirected automatically, <a href="/changelog">click here</a>.</p>
    </div>
  );
}