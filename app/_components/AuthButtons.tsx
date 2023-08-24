import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth/authOptions';

import { LogoutButton } from './LogoutButton';
import { LoginButton } from './LoginButton';

export const AuthButtons = async () => {
  const session = await getServerSession(authOptions);

  return <>{session?.user ? <LogoutButton /> : <LoginButton />}</>;
};
