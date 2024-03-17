"use client";

import LoginButton from "../../_components/login-button";

type LoginPageProps = {
    params: {};
    searchParams: { [key: string]: string | string[] | undefined };
};

export default function LoginPage({ params, searchParams }: LoginPageProps) {
    return (
        <div>
            <LoginButton />
        </div>
    );
}
