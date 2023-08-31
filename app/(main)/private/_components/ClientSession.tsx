'use client';
import { useSession } from 'next-auth/react';

import { TRow } from './TRow';

export const ClientSession = () => {
  const { data: session } = useSession();

  return <TRow title="useSession" session={session} />;
};
