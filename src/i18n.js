import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',

    ns: ['common', 'home-hero', 'about', 'projects', 'feedback', 'contact', 'about_page', "ourcompany_page", "financial_plan", "social"],
    defaultNS: 'common',

    // Preload the most critical namespaces to avoid initial loading flicker
    preload: ['common', 'hero'],

    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    }
  });

export default i18n;