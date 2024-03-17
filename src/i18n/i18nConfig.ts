import { Config } from "next-i18n-router/dist/types";

const i18nConfig: Config = {
    locales: ['ka', 'en'],
    defaultLocale: 'ka',
    prefixDefault: true,
    localeDetector: false,
};

export default i18nConfig;