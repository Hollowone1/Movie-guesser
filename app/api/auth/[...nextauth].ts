import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    // Vous pouvez ajouter d'autres fournisseurs ici
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user = {
          ...session.user,
          id: token.id as string,
          name: session.user.name,
          email: session.user.email,
          image: session.user.image,
        } as { id: string; name?: string | null | undefined; email?: string | null | undefined; image?: string | null | undefined; };
      }
      return session;
    },
  },

  pages: {
    signIn: "/auth/signin",
    // signOut: "/auth/signout",
    // error: "/auth/error",
  },

  debug: process.env.NODE_ENV === "development",
};

export default NextAuth(authOptions);
