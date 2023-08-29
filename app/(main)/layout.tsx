import Link from 'next/link';

import { AuthButtons } from './_components/AuthButtons';

export default function HeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="flex justify-between py-4">
        <Link href="/">ホーム</Link>

        <div>
          <AuthButtons />
        </div>
      </header>
      {children}
    </>
  );
}
