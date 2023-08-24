import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth/authOptions';
import { TRow } from './TRow';

export const ServerSession = async () => {
  const session = await getServerSession(authOptions);

  return <TRow title="getServerSession" session={session} />;
};
