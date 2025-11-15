# Manual Demo Account Setup

Since Supabase requires email confirmation by default for new signups, follow these steps to create working demo accounts:

## Option 1: Use Signup Form (Recommended)

1. **Disable Email Confirmation in Supabase** (One-time setup):
   - Go to your Supabase Dashboard
   - Navigate to Authentication → Settings
   - Under "Email Auth", toggle OFF "Enable email confirmations"
   - Save changes

2. **Create Accounts via Signup**:
   - Go to `login.html`
   - Click "Sign Up" tab
   - Create student account:
     - Email: `student@demo.com`
     - Password: `demo123456`
     - Name: `Demo Student`
     - Select: Student
   - Create admin account:
     - Email: `admin@demo.com`
     - Password: `admin123456`
     - Name: `Demo Admin`
     - Select: Admin

## Option 2: Direct Database Insert

If you have direct database access, run this SQL:

```sql
-- Note: You'll need to create the auth users in Supabase Dashboard first
-- Go to Authentication → Users → Add User

-- After creating the auth users, insert profiles:
INSERT INTO user_profiles (id, email, full_name, role, has_completed_survey)
VALUES
  ('STUDENT_USER_ID', 'student@demo.com', 'Demo Student', 'student', true),
  ('ADMIN_USER_ID', 'admin@demo.com', 'Demo Admin', 'admin', false);

-- Add sample data for student:
INSERT INTO student_surveys (user_id, exam_type, target_date, study_hours_per_day, weak_subjects, strong_subjects, learning_style)
VALUES ('STUDENT_USER_ID', 'neet', '2025-05-15', 6, ARRAY['physics', 'chemistry'], ARRAY['biology'], 'visual');

INSERT INTO study_sessions (user_id, subject, topic, duration_minutes, status, started_at, completed_at)
VALUES ('STUDENT_USER_ID', 'Physics', 'Thermodynamics', 45, 'completed', NOW() - INTERVAL '1 day', NOW() - INTERVAL '1 day' + INTERVAL '45 minutes');

INSERT INTO user_library (user_id, item_type, title, subject, content, tags)
VALUES ('STUDENT_USER_ID', 'flashcard', 'Krebs Cycle', 'Biology',
  '{"question": "What is the Krebs Cycle?", "answer": "A series of chemical reactions used by aerobic organisms to generate energy"}',
  ARRAY['biochemistry', 'metabolism']);
```

## Option 3: Quick Supabase Dashboard Method

1. **Create Users in Supabase Dashboard**:
   - Go to Authentication → Users
   - Click "Add User" (or "Invite User")
   - For Student:
     - Email: student@demo.com
     - Password: demo123456
     - Check "Auto Confirm User"
   - For Admin:
     - Email: admin@demo.com
     - Password: admin123456
     - Check "Auto Confirm User"

2. **The profiles will be auto-created** when users first log in via the signup function

3. **Complete the survey** for student account after first login

## Testing After Setup

1. Go to `login.html`
2. Login with:
   - Student: `student@demo.com` / `demo123456`
   - Admin: `admin@demo.com` / `admin123456`
3. If using student account for the first time, complete the survey
4. Explore all features

## Troubleshooting

### "Invalid login credentials"
- Users may not exist in Supabase auth yet
- Create them in Supabase Dashboard → Authentication → Users

### "Email not confirmed"
- In Supabase Dashboard → Authentication → Settings
- Disable "Enable email confirmations"
- OR manually confirm users in the Users table

### "User has no profile"
- The profile should auto-create on signup
- If not, manually insert into user_profiles table

### Published URL not working
- Make sure environment variables are set correctly
- Check that .env file has correct Supabase credentials
- Verify all HTML files are included in the build

## Alternative: Test with Your Own Account

You can also just create your own account:
1. Go to login page
2. Click "Sign Up"
3. Enter your email and password
4. Complete the survey (for student)
5. Start testing!

This way you can test the full signup flow as well.
