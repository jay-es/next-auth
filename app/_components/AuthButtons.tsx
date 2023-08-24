import { getServerSession } from 'next-auth/next';

import { authOptions } from '@/lib/auth/authOptions';

import { LoginButton } from './LoginButton';
import { LogoutButton } from './LogoutButton';

export const AuthButtons = async () => {
  const session = await getServerSession(authOptions);

  return <>{session?.user ? <LogoutButton /> : <LoginButton />}</>;
};
