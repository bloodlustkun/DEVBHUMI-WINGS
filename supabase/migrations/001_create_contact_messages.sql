-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'new' -- new, read, replied
);

-- Create index on email for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages(email);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at);

-- Enable RLS (Row Level Security)
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (anyone can submit a contact form)
CREATE POLICY "Allow inserts for contact messages" ON contact_messages
  FOR INSERT WITH CHECK (true);

-- Create policy to allow selects only for authenticated users (admin)
CREATE POLICY "Allow selects for authenticated users" ON contact_messages
  FOR SELECT USING (auth.role() = 'authenticated');
