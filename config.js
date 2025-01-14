const { createClient } = supabase;
const supabaseUrl = "https://mwsxbcqokebhikchltyq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13c3hiY3Fva2ViaGlrY2hsdHlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4NzY3OTAsImV4cCI6MjA1MjQ1Mjc5MH0.0JjxAJni4Fx2A0gFU9E2PoYUvZVhS8iv2MXBy167YJ0";
const supabaseClient = createClient(supabaseUrl, supabaseKey);

window.supabase = supabaseClient;
