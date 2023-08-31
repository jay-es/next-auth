import Link from 'next/link';

import { AuthButtons } from './_components/AuthButtons';

type Props = {
  children: React.ReactNode;
};

export default function HeaderLayout({ children }: Props) {
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
