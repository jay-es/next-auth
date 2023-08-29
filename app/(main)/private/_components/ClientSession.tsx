'use client';
import { SessionProvider } from 'next-auth/react';
import { useSession } from 'next-auth/react';

import { TRow } from './TRow';

const ClientSessionInner = () => {
  const { data: session } = useSession();

  return <TRow title="useSession" session={session} />;
};

export const ClientSession = () => (
  <SessionProvider>
    <ClientSessionInner />
  </SessionProvider>
);
