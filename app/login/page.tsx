import { revalidatePath } from 'next/cache';
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

  async function redirectTo(callbackUrl: string): Promise<void> {
    'use server';
    revalidatePath('/');
    redirect(callbackUrl);
  }

  return (
    <main className="flex flex-col items-center pt-20">
      <Card className=" w-full max-w-xl">
        <CardHeader>
          <CardTitle>ログイン</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm action={redirectTo} />
        </CardContent>
      </Card>
    </main>
  );
}
