import Link from "next/link";
import LogoutButton from "../_components/logout-button";
import LanguageSwitcher from "../_components/language-switcher";
import ExampleClientComponent from "./example-client-component";
import { auth } from "@/lib/auth";

type LoginPageProps = {
    params: {};
    searchParams: { [key: string]: string | string[] | undefined };
};

export default async function LoginPage({
    params,
    searchParams,
}: LoginPageProps) {
    const session = await auth();
    console.log("session", session);
    if (session) {
        return (
            <div>
                <LanguageSwitcher />
                <p>Already logged in as {session.user?.name}</p>
                <LogoutButton />
            </div>
        );
    }
    return (
        <div className="container">
            <LanguageSwitcher />
            <ExampleClientComponent />
            Not Logged in go to login page
            <Link href="/login">Login</Link>
        </div>
    );
}
