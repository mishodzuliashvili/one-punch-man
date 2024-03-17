import { auth } from "@/lib/auth";
import { notFound } from "next/navigation";

type layoutProps = {
    params: { locale: string };
    children: React.ReactNode;
};

export default async function layout({
    params: { locale },
    children,
}: layoutProps) {
    const session = await auth();
    if (session?.user) {
        notFound();
    }

    return <>{children}</>;
}
