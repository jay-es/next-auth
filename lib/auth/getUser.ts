import { PrismaClient } from '@prisma/client';
import { compare } from 'bcrypt';
import type { User as AuthUser } from 'next-auth';

export const getUser = async (
  email: string,
  rawPassword: string,
): Promise<AuthUser | null> => {
  const prisma = new PrismaClient();
  const user = await prisma.user.findUnique({ where: { email } });

  // 見つからなければ終了
  if (!user) {
    return null;
  }

  // パスワード照合
  const matched = await compare(rawPassword, user.password);

  // 合わなければ終了
  if (!matched) {
    return null;
  }

  return {
    id: user.id.toString(),
    name: user.name,
    email: user.email,
  } satisfies AuthUser;
};
