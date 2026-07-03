'use client';

import { useEffect } from 'react';
import { DEFAULT_LOCALE, type Locale } from '@/content/site';

export default function RootRedirect() {
  useEffect(() => {
    let target: Locale = DEFAULT_LOCALE;
    try {
      const saved = window.localStorage.getItem('nn-locale');
      if (saved === 'en' || saved === 'ru') {
        target = saved;
      } else if (navigator.language?.toLowerCase().startsWith('ru')) {
        target = 'ru';
      }
    } catch {
      // localStorage can throw in private-browsing modes; default locale still applies.
    }
    window.location.replace(`/${target}/`);
  }, []);

  return (
    <main style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <noscript>
        <a href="/en/" className="link-arrow">
          Continue to Nomad Nexus →
        </a>
      </noscript>
    </main>
  );
}
