import type { Session } from 'next-auth';

type UserTableProps = {
  title: string;
  session: Session | null;
};

export const TRow = ({ title, session }: UserTableProps) => (
  <tr>
    <td>{title}:</td>
    <td>{JSON.stringify(session)}</td>
  </tr>
);
