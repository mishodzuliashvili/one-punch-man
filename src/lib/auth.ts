import GoogleProvider from "next-auth/providers/google"

import { AuthOptions, getServerSession } from "next-auth"

const authOptions: AuthOptions = {
    callbacks: {
        redirect({ }) {
            return "/";
        },
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
}

export async function getServerUser() {
    const session = await getServerSession(authOptions);
    return session?.user || null;
}

export default authOptions