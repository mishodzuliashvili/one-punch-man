"use client";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";

type ProvidersProps = {
    children: React.ReactNode;
    session: Session | null;
    locale: string;
    messages: AbstractIntlMessages;
};

export default function Providers({
    children,
    session,
    locale,
    messages,
}: ProvidersProps) {
    return (
        <NextIntlClientProvider
            timeZone="Asia/Tbilisi"
            locale={locale}
            messages={messages}
        >
            <SessionProvider session={session}>{children}</SessionProvider>
        </NextIntlClientProvider>
    );
}
