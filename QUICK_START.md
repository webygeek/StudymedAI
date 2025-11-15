# StudyAI - Quick Start Guide

## 🚨 Important: Demo Account Setup

The demo accounts are **NOT pre-created**. Supabase requires manual user creation due to email confirmation requirements.

## 📋 Setup Process (Choose One Method)

### Method 1: Use Supabase Dashboard (Easiest)

1. **Open Supabase Dashboard:**
   - Go to https://supabase.com/dashboard
   - Select your project

2. **Disable Email Confirmation:**
   - Go to **Authentication** → **Settings**
   - Find "Email Auth" section
   - **Toggle OFF** "Enable email confirmations"
   - Click **Save**

3. **Create Demo Users:**
   - Go to **Authentication** → **Users**
   - Click **"Add User"** (or "Invite User")

   **For Student Account:**
   - Email: `student@demo.com`
   - Password: `demo123456`
   - ✅ Check "Auto Confirm User"
   - Click Create

   **For Admin Account:**
   - Email: `admin@demo.com`
   - Password: `admin123456`
   - ✅ Check "Auto Confirm User"
   - Click Create

4. **Login & Use:**
   - Go to your published URL or `login.html`
   - Login with either account
   - The student account will need to complete the survey on first login
   - Start exploring!

---

### Method 2: Use Signup Form

1. **Disable Email Confirmation** (same as above)

2. **Create Accounts via Signup:**
   - Open `login.html`
   - Click "Sign Up" tab

   **Create Student:**
   - Email: student@demo.com
   - Password: demo123456
   - Full Name: Demo Student
   - Role: Student
   - Complete the survey after signup

   **Create Admin:**
   - Email: admin@demo.com
   - Password: admin123456
   - Full Name: Demo Admin
   - Role: Admin

---

### Method 3: Create Your Own Account

Skip the demo credentials entirely:
1. Disable email confirmation in Supabase
2. Go to login page → Sign Up
3. Create your own account
4. Complete the survey (for students)
5. Start using the platform!

---

## 🔐 Demo Credentials

**After setup:**
- **Student:** student@demo.com / demo123456
- **Admin:** admin@demo.com / admin123456

---

## ✅ What to Test

### Student Features:
1. **Dashboard** - View stats, charts, and quick access
2. **Study Session** - Start timed study with subjects/topics
3. **Assessment** - Take quizzes with answer explanations
4. **Memory Room** - Flip-card flashcards and mnemonics
5. **AI Tools** - All 6 tools (Clinical Cases, Drug Charts, etc.)
6. **Schedule** - Plan study sessions
7. **Library** - View saved content

### All Pages Work:
- ✅ index.html (landing page)
- ✅ login.html (login/signup)
- ✅ survey.html (student onboarding)
- ✅ dashboard.html
- ✅ All feature pages
- ✅ All 6 AI tool pages

---

## 🐛 Troubleshooting

### "Invalid login credentials"
- Users don't exist yet → Create them in Supabase Dashboard

### "Email not confirmed"
- Disable email confirmation in Supabase Settings
- OR manually confirm users in Users table

### "Cannot create account" via signup
- Email confirmation is still enabled → Disable it
- Check Supabase Dashboard for errors

### Published URL shows blank/error
- All HTML files are now in dist folder after build
- Make sure to publish the dist folder
- Check browser console for errors

### "User has no profile"
- Profile is auto-created on first signup
- If missing, the app will redirect to login

---

## 📱 Testing on Published URL

1. After publishing, your URL will show the welcome page
2. Click "Setup Demo Accounts" to see instructions
3. Follow the Supabase Dashboard method above
4. Click "Go to Login" and use the credentials
5. Explore all features!

---

## 💡 Pro Tips

- The student account needs to complete the survey on first login
- All data persists in Supabase database
- Each user's data is isolated (RLS enabled)
- You can create multiple test accounts if needed
- Use browser DevTools console to debug issues

---

## 📚 Additional Resources

- `README.md` - Full documentation
- `MANUAL_SETUP.md` - Detailed setup instructions
- `TESTING_GUIDE.md` - Feature-by-feature testing
- `DEMO_CREDENTIALS.md` - Credentials reference

---

## 🎯 Summary

1. **Disable email confirmation in Supabase**
2. **Create users in Supabase Dashboard**
3. **Login at your published URL or login.html**
4. **Test all features!**

That's it! The platform is fully functional once users are created.
