import { getServerUser } from "@/lib/auth";
import { notFound } from "next/navigation";

type layoutProps = {
    params: { locale: string };
    children: React.ReactNode;
};

export default async function layout({
    params: { locale },
    children,
}: layoutProps) {
    const user = await getServerUser();
    if (user) {
        notFound();
    }

    return <>{children}</>;
}
