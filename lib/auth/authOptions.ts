import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
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
};
