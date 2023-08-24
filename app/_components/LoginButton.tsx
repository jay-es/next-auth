'use client';
import { signIn } from 'next-auth/react';

import { Button } from '@/components/ui/button';

export const LoginButton = () => (
  <Button size="sm" onClick={() => signIn()}>
    ログイン
  </Button>
);
