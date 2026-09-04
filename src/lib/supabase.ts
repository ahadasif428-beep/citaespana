import { createClient } from "@supabase/supabase-js";

<<<<<<< HEAD
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Keep the module import-safe in local development when Supabase has not been configured yet.
// Real Supabase requests still require the proper environment variables.
const FALLBACK_URL = "https://placeholder.supabase.co";
const FALLBACK_KEY = "placeholder-anon-key";

export const supabase = createClient(
  supabaseUrl || FALLBACK_URL,
  supabaseKey || FALLBACK_KEY,
);

export const hasSupabaseConfig = Boolean(supabaseUrl && supabaseKey);
=======

const supabaseUrl =
process.env.NEXT_PUBLIC_SUPABASE_URL!;


const supabaseKey =
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;



export const supabase =
createClient(
supabaseUrl,
supabaseKey
);
>>>>>>> 67d67fc9d08bddbcbb307629d4f3a363edcd4823
