import GoogleProvider from "next-auth/providers/google"
import NextAuth, { NextAuthConfig } from "next-auth"
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";

const authOptions: NextAuthConfig = {
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
    adapter: FirestoreAdapter({
        credential: cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n")
        }),
    }),
}

export default authOptions

export const {
    handlers: { GET, POST },
    auth,
} = NextAuth(authOptions)