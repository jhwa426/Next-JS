import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { connectToDB } from "@utils/database";


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],

    async session({ session }) {

    },

    async sign({ profile }) {
        try {
            // serverless -> Lambda -> dynamic
            await connectToDB();

            // check if user already exists



            // if not, create a new document and save user in MongoDB



            return true

        } catch (error) {
            console.log("Error checking if user exists: ", error.message);
            return false
        }
    },
});



export { handler as GET, handler as POST }