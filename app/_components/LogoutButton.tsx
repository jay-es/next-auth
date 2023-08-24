'use client';
import { signOut } from 'next-auth/react';

import { Button } from '@/components/ui/button';

export const LogoutButton = () => (
  <Button size="sm" variant="outline" onClick={() => signOut()}>
    ログアウト
  </Button>
);
