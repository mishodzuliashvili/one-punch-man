import { Config } from "next-i18n-router/dist/types";

const i18nConfig: Config = {
    locales: ['ka', 'en'],
    defaultLocale: 'ka',
    prefixDefault: true,
    localeDetector: false,
};

type LocalName = {
    locale: string;
    name: string;
};

export const localeNames: LocalName[] = [
    { locale: "ka", name: "ქართული" },
    { locale: "en", name: "English" },
]

export default i18nConfig;