import type { Session } from 'next-auth';

import { TableCell, TableHead, TableRow } from '@/components/ui/table';

type UserTableProps = {
  title: string;
  session: Session | null;
};

export const TRow = ({ title, session }: UserTableProps) => (
  <TableRow>
    <TableHead>{title}</TableHead>
    <TableCell>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </TableCell>
  </TableRow>
);
