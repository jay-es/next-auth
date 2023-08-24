/**
 * 最初のユーザーを作る
 * npx dotenv -e .env.local -- node ./migrations/create-user.mjs
 */

// @ts-check

import process from 'node:process';

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const users = await prisma.user.count();

if (users > 0) {
  process.exit(0);
}

const salt = await bcrypt.genSalt();
const password = await bcrypt.hash('password', salt);

const user = await prisma.user.create({
  data: {
    name: 'John Doe',
    email: 'john@example.com',
    password,
  },
});

console.log(user);
