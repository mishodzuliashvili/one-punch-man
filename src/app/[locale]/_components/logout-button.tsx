"use client";
import { signOut } from "next-auth/react";

type LogoutButtonProps = {};

export default function LogoutButton({}: LogoutButtonProps) {
    return <button onClick={() => signOut()}>Sign out</button>;
}
