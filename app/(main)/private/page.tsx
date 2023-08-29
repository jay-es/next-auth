import { Table, TableBody } from '@/components/ui/table';

import { ClientSession } from './_components/ClientSession';
import { ServerSession } from './_components/ServerSession';

export default async function Private() {
  return (
    <main>
      <h1>会員専用ページ</h1>

      <Table className="border-y">
        <TableBody>
          <ServerSession />
          <ClientSession />
        </TableBody>
      </Table>
    </main>
  );
}
