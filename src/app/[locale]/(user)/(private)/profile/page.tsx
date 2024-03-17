import { getServerUser } from "@/lib/auth";

type ProfilePageProps = {
    params: {};
    searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ProfilePage({
    params,
    searchParams,
}: ProfilePageProps) {
    const user = await getServerUser();
    return <>Hello {user?.email}</>;
}
