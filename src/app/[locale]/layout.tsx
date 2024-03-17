import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Providers from "./providers";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";
import i18nConfig from "@/i18n/i18nConfig";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { useMessages } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default async function RootLayout({
    params: { locale },
    children,
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    if (!i18nConfig.locales.includes(locale)) {
        notFound();
    }
    const messages = await getMessages({
        locale,
    });
    const session = await getServerSession(authOptions);

    return (
        <html lang={locale}>
            <body className={inter.className}>
                <Providers
                    locale={locale}
                    messages={messages}
                    session={session}
                >
                    {children}
                </Providers>
            </body>
        </html>
    );
}
