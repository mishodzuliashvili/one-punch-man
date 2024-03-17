"use client";
import { signIn } from "next-auth/react";

type LoginButtonProps = {};

export default function LoginButton({}: LoginButtonProps) {
    return (
        <button onClick={() => signIn("google")}>Sign in with Google</button>
    );
}
