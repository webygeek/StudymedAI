/*
  # Create Study Features Tables

  1. New Tables
    - `study_sessions`
      - Session tracking for students
    - `user_library`
      - Saved flashcards, mnemonics, notes
    - `assessments`
      - Quiz and test records
    - `study_schedules`
      - Personalized study schedules

  2. Security
    - Enable RLS on all tables
    - Users can only access their own data
*/

-- Study Sessions Table
CREATE TABLE IF NOT EXISTS study_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  subject text NOT NULL,
  topic text NOT NULL,
  duration_minutes integer DEFAULT 0,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed')),
  notes text,
  started_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE study_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own sessions"
  ON study_sessions FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own sessions"
  ON study_sessions FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own sessions"
  ON study_sessions FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own sessions"
  ON study_sessions FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- User Library Table
CREATE TABLE IF NOT EXISTS user_library (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  item_type text NOT NULL CHECK (item_type IN ('flashcard', 'mnemonic', 'note', 'answer', 'quiz')),
  title text NOT NULL,
  content jsonb NOT NULL,
  tags text[] DEFAULT '{}',
  subject text,
  is_favorite boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE user_library ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own library"
  ON user_library FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert to own library"
  ON user_library FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own library"
  ON user_library FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete from own library"
  ON user_library FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Assessments Table
CREATE TABLE IF NOT EXISTS assessments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  title text NOT NULL,
  subject text NOT NULL,
  total_questions integer NOT NULL,
  correct_answers integer DEFAULT 0,
  score_percentage numeric(5,2),
  time_taken_minutes integer,
  questions jsonb NOT NULL,
  user_answers jsonb,
  completed boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  completed_at timestamptz
);

ALTER TABLE assessments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own assessments"
  ON assessments FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own assessments"
  ON assessments FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own assessments"
  ON assessments FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Study Schedules Table
CREATE TABLE IF NOT EXISTS study_schedules (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  date date NOT NULL,
  subject text NOT NULL,
  topic text NOT NULL,
  start_time time NOT NULL,
  end_time time NOT NULL,
  status text DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'in_progress', 'completed', 'missed')),
  notes text,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, date, start_time)
);

ALTER TABLE study_schedules ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own schedules"
  ON study_schedules FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own schedules"
  ON study_schedules FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own schedules"
  ON study_schedules FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own schedules"
  ON study_schedules FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);
