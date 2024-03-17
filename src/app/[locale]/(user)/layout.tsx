import { getServerUser } from "@/lib/auth";
import { notFound } from "next/navigation";
import Providers from "./providers";

type layoutProps = {
    params: {};
    children: React.ReactNode;
};

export default async function layout({ params, children }: layoutProps) {
    const user = await getServerUser();

    if (!user) {
        notFound();
    }

    return <Providers user={user}>{children}</Providers>;
}
