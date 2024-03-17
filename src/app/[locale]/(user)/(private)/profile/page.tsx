import { auth } from "@/lib/auth";

type ProfilePageProps = {
    params: {};
    searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ProfilePage({
    params,
    searchParams,
}: ProfilePageProps) {
    const session = await auth();
    return <>Hello {session?.user}</>;
}
