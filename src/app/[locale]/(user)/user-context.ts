"use client"
import { Session } from 'next-auth';
import { createContext, useContext } from 'react';

export const UserContext = createContext<Session["user"] | null>(null);

export function useUser() {
    const user = useContext(UserContext);

    if (user === null) {
        throw new Error('useUserContext must be used with a UserContext');
    }

    return user;
}