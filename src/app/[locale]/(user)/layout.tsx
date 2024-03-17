import { notFound } from "next/navigation";
import Providers from "./providers";
import { auth } from "@/lib/auth";

type layoutProps = {
    params: {};
    children: React.ReactNode;
};

export default async function layout({ params, children }: layoutProps) {
    const session = await auth();

    if (!session) {
        notFound();
    }

    return <Providers user={session.user}>{children}</Providers>;
}
