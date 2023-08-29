import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const LoginButton = () => (
  <Link href="/login">
    <Button size="sm">ログイン</Button>
  </Link>
);
