/*
  # Create User Profiles and Authentication Schema

  1. New Tables
    - `user_profiles`
      - `id` (uuid, primary key, references auth.users)
      - `email` (text)
      - `full_name` (text)
      - `role` (text) - 'student' or 'admin'
      - `has_completed_survey` (boolean)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `student_surveys`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references user_profiles)
      - `exam_type` (text)
      - `target_date` (date)
      - `study_hours_per_day` (integer)
      - `weak_subjects` (text array)
      - `strong_subjects` (text array)
      - `learning_style` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Users can read their own profile
    - Users can update their own profile
    - Only authenticated users can access data
*/

-- Create user_profiles table
CREATE TABLE IF NOT EXISTS user_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  full_name text NOT NULL,
  role text NOT NULL DEFAULT 'student' CHECK (role IN ('student', 'admin')),
  has_completed_survey boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON user_profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON user_profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON user_profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Create student_surveys table
CREATE TABLE IF NOT EXISTS student_surveys (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  exam_type text NOT NULL,
  target_date date,
  study_hours_per_day integer,
  weak_subjects text[] DEFAULT '{}',
  strong_subjects text[] DEFAULT '{}',
  learning_style text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE student_surveys ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own surveys"
  ON student_surveys FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own surveys"
  ON student_surveys FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own surveys"
  ON student_surveys FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
