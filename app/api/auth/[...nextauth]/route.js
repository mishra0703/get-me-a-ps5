
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import connectDB from "@/db/connectDb";
import User from "@/app/models/User";




export const authoptions = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
  async signIn({ user, account, email}) {
    if (account.provider === "google" || account.provider === "github") {
      await connectDB();

      const userExists = await User.findOne({ email: email });
      if (!userExists) {
        const newUser = await User.create({
          email: user.email,
          username: user.email.split("@")[0],
        });
      }
      return true
    }
  },
  async session({ session }) {
    const dbUser = await User.findOne({email: session.user.email});
    console.log(dbUser);
    session.user.name = dbUser.username;
    return session
  }
}
});

export { authoptions as GET, authoptions as POST };
