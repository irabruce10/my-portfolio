import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

export default async function PrivatePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  console.log('Success', data?.user);
  if (error || !data?.user) {
    redirect('/');
  }

  return (
    <div>
      <p>Welcome, {data.user?.email}</p>;
    </div>
  );
}
