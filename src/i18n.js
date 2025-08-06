import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation files
import enTranslations from './locales/en/translation.json';
import frTranslations from './locales/fr/translation.json';

const resources = {
  en: {
    translation: enTranslations,
  },
  fr: {
    translation: frTranslations,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr'], // Explicitly define supported languages
    load: 'languageOnly', // Ignore region codes like 'en-US' -> 'en'
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    
    detection: {
      order: ['localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'sessionStorage'],
      lookupLocalStorage: 'i18nextLng',
      lookupSessionStorage: 'i18nextLng',
      excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)
      
      // Chrome-specific fixes
      checkWhitelist: true,
      checkForSimilar: true
    },
    
    // Ensure immediate language change
    react: {
      useSuspense: false
    }
  })
  .then(() => {
    // Chrome debugging - log current language state
    if (process.env.NODE_ENV === 'development') {
      console.log('i18n initialized');
      console.log('Current language:', i18n.language);
      console.log('Detected languages:', i18n.languages);
      console.log('localStorage i18nextLng:', localStorage.getItem('i18nextLng'));
    }
  });

export default i18n;
