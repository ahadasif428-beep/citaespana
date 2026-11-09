
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Safe fallback for local development without Supabase configuration.
const FALLBACK_URL = "https://placeholder.supabase.co";
const FALLBACK_KEY = "placeholder-anon-key";

export const hasSupabaseConfig = Boolean(supabaseUrl && supabaseKey);

export const supabase = createClient(
  supabaseUrl || FALLBACK_URL,
  supabaseKey || FALLBACK_KEY
);
