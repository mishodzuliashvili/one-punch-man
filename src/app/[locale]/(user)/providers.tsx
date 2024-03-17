"use client";
import { Session } from "next-auth";
import { UserContext } from "./user-context";

type ProvidersProps = {
    children: React.ReactNode;
    user: Session["user"] | null;
};

export default function Providers({ children, user }: ProvidersProps) {
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
