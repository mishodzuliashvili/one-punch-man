"use client";

import { useTranslations } from "next-intl";

export default function ExampleClientComponent() {
    const t = useTranslations("home");
    return (
        <h3>
            {t("title")} {t("description")}
        </h3>
    );
}
