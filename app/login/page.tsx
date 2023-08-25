import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { authOptions } from '@/lib/auth/authOptions';

import { LoginForm } from './_components/LoginForm';

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/');
  }

  return (
    <main className="flex flex-col items-center">
      <Card className=" w-full max-w-xl">
        <CardHeader>
          <CardTitle>ログイン</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </main>
  );
}
