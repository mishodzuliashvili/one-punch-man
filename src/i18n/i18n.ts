import * as fs from 'fs';
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import i18nConfig from './i18nConfig';

export default getRequestConfig(async ({ locale }) => {
    if (!i18nConfig.locales.includes(locale as any)) notFound();

    return {
        messages: (await import(`./locales/${locale}.json`)).default
    };
});