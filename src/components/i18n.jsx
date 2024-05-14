import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from '../components/Data.json';
import translationHI from '../components/Data.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  hi: {
    translation: translationHI
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
