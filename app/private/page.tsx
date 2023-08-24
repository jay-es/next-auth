import { ClientSession } from './_components/ClientSession';
import { ServerSession } from './_components/ServerSession';

export default async function Private() {
  return (
    <main>
      <h1>会員専用ページ</h1>

      <table>
        <tbody>
          <ServerSession />
          <ClientSession />
        </tbody>
      </table>
    </main>
  );
}
