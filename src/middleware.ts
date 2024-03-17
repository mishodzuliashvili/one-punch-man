import { i18nRouter } from 'next-i18n-router';
import i18nConfig from './i18n/i18nConfig';
import type { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['ka', 'en'],
    defaultLocale: 'ka',
});

export const config = {
    matcher: '/((?!api|static|.*\\..*|_next).*)'
};