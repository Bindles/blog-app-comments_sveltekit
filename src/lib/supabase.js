import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cuqbzwrviugxrpostohy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1cWJ6d3J2aXVneHJwb3N0b2h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI0OTk2NDksImV4cCI6MjA0ODA3NTY0OX0._l0h78oZLTHiglzW0U62QDSnUdMbMWzx6xZhtnvWbvM';

export const supabase = createClient(supabaseUrl, supabaseKey);
