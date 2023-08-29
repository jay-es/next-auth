'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle, Loader2 } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { moveTo } from '../action';

const formSchema = z.object({
  email: z.string().email({
    message: '正しいメールアドレスを入力してください',
  }),
  password: z.string().min(6, {
    message: 'パスワードは6文字以上で入力してください',
  }),
});

export const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // オートコンプリート後のフォーカスでエラーになるのを防止
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await signIn('credentials', {
      redirect: false, // これがないとレスポンスがなく、ログインページに遷移してしまう
      email: values.email,
      password: values.password,
    });

    if (!res || res.error) {
      form.setError('root', {
        message: 'ログインできませんでした。入力内容を確認してください',
      });
      return;
    }

    const callbackUrl = searchParams.get('callbackUrl') ?? '/';
    await moveTo(callbackUrl);
  }

  const loading =
    form.formState.isSubmitting || form.formState.isSubmitSuccessful;

  return (
    <Form {...form}>
      <form action={() => form.handleSubmit(onSubmit)()} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>メールアドレス</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>パスワード</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-x-4">
          <Button type="submit" className="w-24" disabled={loading}>
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              'ログイン'
            )}
          </Button>
          <Button
            type="button"
            variant="outline"
            disabled={loading}
            onClick={router.back}
          >
            戻る
          </Button>
        </div>

        {form.formState.errors.root?.message && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              {form.formState.errors.root.message}
            </AlertDescription>
          </Alert>
        )}
      </form>
    </Form>
  );
};
