'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '~/lib/supabase/server';

import { env } from '~/env';

export const login = async () => {
  const supabase = createClient();

  const res = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${env.NEXT_PUBLIC_DEPLOYED_URL}/auth/callback`,
    },
  });
  if (res.error) {
    console.error(res.error);
  }
  if (res.data.url) {
    redirect(res.data.url);
  }
};

export const signout = async () => {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error(error);
  }
  revalidatePath('/generate');
  redirect('/');
};
