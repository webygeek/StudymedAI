# Testing Guide - StudyAI

## Step 1: Setup Demo Accounts

**Visit:** `setup-demo.html`

Click the "Create Demo Accounts" button. This will automatically:
- Create student and admin accounts
- Add sample study data
- Set up the database

## Step 2: Login

**Visit:** `login.html` or `index.html`

### Student Login
- Email: `student@demo.com`
- Password: `demo123456`

### Admin Login  
- Email: `admin@demo.com`
- Password: `admin123456`

---

## What to Test

### ✅ Student Dashboard
After logging in as student, you should see:
- Welcome message with your name
- Study statistics (hours, sessions, score, streak)
- Weekly progress chart
- Today's schedule
- 6 feature cards for navigation

### ✅ Study Session
Click "Study Session" from dashboard:
1. Select subject (Physics, Chemistry, Math, Biology)
2. Enter topic name
3. Choose duration (25 or 50 minutes)
4. Click "Start Session"
5. Timer should count down
6. Add notes in the text area
7. Click "End Session" when done

### ✅ Assessment
Click "Assessment" from dashboard:
1. Read Question 1 about First Law of Thermodynamics
2. Select an answer (B is correct)
3. Click "Next"
4. Answer Question 2 (C is correct)
5. Click "Submit Assessment"
6. View your score and results
7. Review answers with explanations
   - Correct answers show in green
   - Incorrect answers show in red with correct answer
   - Each has a detailed explanation

### ✅ Memory Room
Click "Memory Room" from dashboard:
1. See 3 flashcards (click to flip)
2. Front shows question
3. Back shows answer with difficulty buttons
4. Switch to "Mnemonics" tab
5. View mnemonic examples
6. Click "+ Create Flashcard"
7. Fill form and create new flashcard

### ✅ AI Tools
Click "AI Tools" from dashboard:

**Clinical Case Simulator:**
- Read patient case presentation
- Review vital signs and history
- Select diagnosis
- Submit and see if correct

**Drug Chart Creator:**
- Enter drug names
- Generate comparison table
- View side-by-side information

**OSCE Practice Partner:**
- View clinical examination scenario
- Check off each step of examination
- Complete practice session

**Differential Diagnosis:**
- Enter chief complaint
- Add symptoms and age
- Generate DDx list
- View life-threatening conditions highlighted

**Exam Notes Condensor:**
- Paste long notes
- Click "Condense"
- View key points extracted
- Save to library

**Audio to Notes:**
- Upload audio file (demo shows example output)
- Convert to structured notes
- Save to library

### ✅ Study Schedule
Click "Schedule" from dashboard:
1. View upcoming sessions
2. Click "+ Add Schedule"
3. Fill in date, subject, topic, times
4. Save
5. See new session in list

### ✅ My Library
Click "My Library" from dashboard:
1. View all saved content
2. Filter by type (All, Flashcards, Notes, etc.)
3. See sample flashcard from demo data
4. Delete items if needed

---

## Expected Sample Data

After setup, student account should have:
- 1 completed study session (Physics - Thermodynamics)
- 1 flashcard (Krebs Cycle)
- 1 upcoming schedule (Chemistry tomorrow)

---

## Common Issues

### "File not found" errors
- Make sure you're viewing through a web server, not opening HTML files directly
- Use `npm run dev` to start the development server

### Cannot create demo accounts
- Accounts may already exist
- Just login with the credentials directly

### Data not persisting
- Check browser console for errors
- Verify Supabase connection in `.env` file
- Make sure you're logged in

### Features not loading
- Check that auth.js is accessible
- Verify all HTML files are in project root
- Clear browser cache and reload

---

## Testing Checklist

- [ ] Setup demo accounts successfully
- [ ] Login as student
- [ ] View dashboard with stats
- [ ] Start and complete study session
- [ ] Take assessment and see results
- [ ] View and create flashcards
- [ ] Test all 6 AI tools
- [ ] Add schedule item
- [ ] View library items
- [ ] Logout
- [ ] Login as admin
- [ ] Verify separate access

---

## Notes

- All data persists in Supabase
- Each user can only see their own data (RLS)
- Logout from nav bar to switch accounts
- Demo data helps test features immediately
