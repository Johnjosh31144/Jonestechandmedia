/*
  # Create messages table for contact form submissions

  1. New Tables
    - `messages`
      - `id` (integer, primary key, auto-incrementing)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text, optional)
      - `service` (text, required)
      - `message` (text, required)
      - `read` (boolean, default false)
      - `created_at` (timestamp with timezone, default now())

  2. Security
    - Enable RLS on `messages` table
    - Add policy for authenticated users to read messages
    - Add policy for public users to insert messages
*/

CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service TEXT NOT NULL,
  message TEXT NOT NULL,
  read BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Allow public to insert messages (contact form submissions)
CREATE POLICY "Anyone can submit messages"
  ON messages
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow authenticated users to read messages
CREATE POLICY "Authenticated users can read messages"
  ON messages
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users to update messages (mark as read)
CREATE POLICY "Authenticated users can update messages"
  ON messages
  FOR UPDATE
  TO authenticated
  USING (true);

-- Allow authenticated users to delete messages
CREATE POLICY "Authenticated users can delete messages"
  ON messages
  FOR DELETE
  TO authenticated
  USING (true);