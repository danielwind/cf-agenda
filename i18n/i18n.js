import i18n from "i18n-js"
import * as Localization from 'expo-localization';
import en_locale from './locales/en'
import es_locale from './locales/es'

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
    en: en_locale,
    es: es_locale,
  };

  // Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
//i18n.locale = 'en_US'
//i18n.locale = 'es'
i18n.fallbacks = true;

export default i18n;