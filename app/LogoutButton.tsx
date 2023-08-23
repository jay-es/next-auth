'use client';
import { signOut } from 'next-auth/react';

export const LogoutButton = () => (
  <button onClick={() => signOut()}>ログアウト</button>
);
