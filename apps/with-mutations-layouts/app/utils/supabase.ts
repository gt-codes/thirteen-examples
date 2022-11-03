import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sqotbyxtyltpchqgmzov.supabase.co';
const supabaseKey =
	process.env.SUPABASE_KEY ??
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxb3RieXh0eWx0cGNocWdtem92Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NzQ5NTk0OCwiZXhwIjoxOTgzMDcxOTQ4fQ.7nXaHism84asrJT5sQb0syQJfz2dla-4VoNqOV_wNZM';

export const supabase = createClient(supabaseUrl, supabaseKey);
