"use client";
import { useCollection } from "react-firebase-hooks/firestore";
import { useTranslations } from "next-intl";
import { collection, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function ExampleClientComponent() {
    const t = useTranslations("home");
    const [users, loading, error] = useCollection(
        query(collection(db, "users"))
    );
    return (
        <h3>
            {JSON.stringify({
                users: users?.docs.map((doc) => doc.data()),
                loading,
                error,
            })}
            Ara
            {t("title")} {t("description")}
        </h3>
    );
}
