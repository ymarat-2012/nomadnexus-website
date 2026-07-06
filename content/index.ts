import type { Locale } from './site';
import type { Dictionary } from './types';
import en from './en';
import ru from './ru';

const dictionaries: Record<Locale, Dictionary> = { en, ru };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export * from './site';
export * from './types';
