import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { splitLang } from './lang';

// Bundled (not fetched) so pages can be prerendered with real text for crawlers.
const files = import.meta.glob('./locales/*/*.json', { eager: true, import: 'default' });
const resources = {};
for (const [path, data] of Object.entries(files)) {
  const [, lng, ns] = path.match(/locales\/(\w+)\/(.+)\.json$/);
  (resources[lng] ??= {})[ns] = data;
}

i18n.use(initReactI18next).init({
  resources,
  lng: typeof window === 'undefined' ? 'en' : splitLang(window.location.pathname)[0],
  fallbackLng: 'en',
  defaultNS: 'common',
  initAsync: false,
  interpolation: { escapeValue: false },
});

export default i18n;
