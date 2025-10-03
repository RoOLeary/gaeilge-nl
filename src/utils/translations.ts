import { getCollection } from 'astro:content';

type Locale = 'ga' | 'en' | 'nl';

export async function getTranslations(locale: Locale = 'ga'): Promise<Record<string, string>> {
  const translations = await getCollection('translations');
  const localeTranslations = translations.find(t => t.id === locale);
  
  if (!localeTranslations) {
    console.warn(`No translations found for locale: ${locale}`);
    // Fallback to Irish translations
    const fallback = translations.find(t => t.id === 'ga');
    return fallback?.data || {};
  }
  
  return localeTranslations.data;
}

export function getCurrentLocale(url: URL): Locale {
  const pathname = url.pathname;
  
  if (pathname.startsWith('/en')) return 'en';
  if (pathname.startsWith('/nl')) return 'nl';
  
  return 'ga'; // Default to Irish
}
