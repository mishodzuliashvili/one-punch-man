import { getServerUser } from "@/lib/auth";
import Link from "next/link";
import LogoutButton from "../_components/logout-button";
import LanguageSwitcher from "../_components/language-switcher";
import ExampleClientComponent from "./example-client-component";

type LoginPageProps = {
    params: {};
    searchParams: { [key: string]: string | string[] | undefined };
};

export default async function LoginPage({
    params,
    searchParams,
}: LoginPageProps) {
    const user = await getServerUser();
    if (user) {
        return (
            <div>
                <LanguageSwitcher />
                <p>Already logged in as {user.name}</p>
                <LogoutButton />
            </div>
        );
    }
    return (
        <div>
            <LanguageSwitcher />
            <ExampleClientComponent />
            Not Logged in go to login page
            <Link href="/login">Login</Link>
        </div>
    );
}
