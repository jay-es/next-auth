'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const moveTo = async (callbackUrl: string): Promise<void> => {
  revalidatePath('/');
  redirect(callbackUrl);
};
