import { supabase } from '$lib/supabase';

export const handle = async ({ event, resolve }) => {
  const { data: { session } } = await supabase.auth.getSession();
  event.locals.user = session?.user || null;

  return resolve(event);
};
