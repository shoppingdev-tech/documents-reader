import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './en.json';

// the translations file path
// (tip: move them in a JSON file and import them)
const resources = {
  en: {
    translation: en,
  },
} as const;

// const currentLocale = i18n.currentLocale();

// export const isRTL = currentLocale.indexOf("nl") === 0 || currentLocale.indexOf("ar") === 0;

i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false, // react is already safe from xss
    },
  });

export default i18n;
