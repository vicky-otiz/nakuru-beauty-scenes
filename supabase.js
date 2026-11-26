import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://rglofywyoobmtrmcqmop.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_srOsqfhA8LYoNQCp2y00Jw__2SDWSAW';

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);