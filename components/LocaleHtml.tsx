'use client';

import { useEffect } from 'react';

export function LocaleHtml({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    try {
      window.localStorage.setItem('nn-locale', locale);
    } catch {
      // localStorage can throw in private-browsing modes; not persisting is fine.
    }
  }, [locale]);

  return null;
}
