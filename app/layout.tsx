import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { NextAuthProvider } from './NextAuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className + ' px-4'}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
