import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_API_URL
const supabaseApiKey = import.meta.env.VITE_SUPABASE_API_KEY
const supabase = createClient(url, supabaseApiKey)

export default supabase