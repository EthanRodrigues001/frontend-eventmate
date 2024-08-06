import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId:
        "105913551673-8vnp2pr69915j7juih5n3jpsf6h7udco.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email, image } = user;
        //logic while every auth
      }

      console.log("user logged:", user);
      return true;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
