import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: '名前' },
        password: { label: 'パスワード', type: 'password' },
      },
      async authorize(credentials) {
        if (credentials?.username === '001') {
          return {
            id: '001',
            name: 'John Doe',
          };
        }

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
