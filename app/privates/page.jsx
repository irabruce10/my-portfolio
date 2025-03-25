import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

export default async function PrivatePage() {
  const supabase = await createClient();
  const { data: session } = await supabase.auth.getSession();

  console.log('Session', session);

  if (!session) {
    throw new Error('No active session found');
  }

  console.log('Creating', supabase);

  const { data, error } = await supabase.auth.getUser();
  console.log('Success', data, error);
  // if (error || !data?.user) {
  //   redirect('/login');
  // }

  return <p>Hello {data.user?.email}</p>;
}
