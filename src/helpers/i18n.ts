import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

export interface I18nOptions {
  initialLocale: string;
  ns?: string[];
}

export function initI18n({ initialLocale, ns = [] }: I18nOptions) {
  if (i18n.isInitialized) return i18n;

  i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
      lng: initialLocale,
      fallbackLng: 'ru',
      supportedLngs: ['kk', 'ru'],
      ns: ['common', ...ns],
      keySeparator: '.',
      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json'
      },
      interpolation: {
        escapeValue: false
      },
      partialBundledLanguages: true,
      saveMissing: false
    });

  return i18n;
}
