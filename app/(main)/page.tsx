import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Link href="/public" className="underline">
        公開ページ
      </Link>
      <Link href="/private" className="underline">
        会員専用ページ
      </Link>
    </main>
  );
}
