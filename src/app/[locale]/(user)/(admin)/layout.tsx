import { auth } from "@/lib/auth";
import { notFound } from "next/navigation";

type layoutProps = {
    params: {};
    children: React.ReactNode;
};

export default async function layout({ params, children }: layoutProps) {
    const user = await auth();
    // TODO: we can add roles to the user and check if the user has the role to access the admin page
    // if (user && user.email !== "misho") {
    //     notFound();
    // }

    return <>{children}</>;
}
