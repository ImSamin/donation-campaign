import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      id: "donation-campaign",
      name: "Credentials",
      type: "credentials",

      credentials: {
        email: { label: "email", type: "email", placeholder: "Your email..." },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req): Promise<any> {
        try {
          const res = await fetch(
            `https://donation-campaign-backend.vercel.app/api/v1/auth/login`,
            {
              method: "POST",
              body: JSON.stringify(credentials),
              headers: { "Content-Type": "application/json" },
            }
          );
          const { data } = await res.json();
          //console.log(data);

          // If no error and we have user data, return it
          if (res.ok && data) {
            return {
              ...data,
            };
          }
        } catch (err: any) {
          throw new Error(err.message);
        }

        // Return null if user data could not be retrieved
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      // console.log(token.role);
      // Persist the OAuth access_token and or the user id to the token right after signin

      return {
        ...token,
        ...user,
      };
    },
    async session({ session, token }: { session: any; token: any }) {
      session.user.id = token.id;
      session.user.role = token.role;
      //   console.log(token, session);

      return {
        ...session,
        ...token,
      };
    },
  },
  secret: "abcde",
};
