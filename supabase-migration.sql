-- Create the early_access table in Supabase
-- Run this SQL in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS early_access (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_early_access_email ON early_access(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_early_access_created_at ON early_access(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE early_access ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for the signup form)
CREATE POLICY "Allow public inserts" ON early_access
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow service role to read all
CREATE POLICY "Allow service role to read all" ON early_access
  FOR SELECT
  TO service_role
  USING (true);
