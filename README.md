# StudyAI - AI-Powered Education Platform

A comprehensive study platform with AI-powered tools, assessment features, and personalized learning experiences.

## 🚀 Quick Start

### 1. Setup Demo Accounts (First Time Only)

Visit `setup-demo.html` and click "Create Demo Accounts" to automatically set up:
- **Student Account:** student@demo.com / demo123456
- **Admin Account:** admin@demo.com / admin123456

### 2. Login & Explore

Go to `login.html` or the main page and login with either demo account.

---

## ✨ Features

### Authentication & User Management
- Separate login for students and admins
- First-time student onboarding survey
- Session management with Supabase

### Dashboard
- Personalized statistics (study hours, sessions, average score, streak)
- Weekly progress chart
- Today's schedule preview
- Quick access to all features

### Study Features

#### 📚 Study Session
- Timer-based study sessions
- Subject and topic selection
- Note-taking during sessions
- Sessions saved to database

#### 📝 Assessment
- Interactive quizzes
- Instant scoring and results
- Answer review with detailed explanations
- Results tracking in database

#### 🧠 Memory Room
- Interactive flip-card flashcards
- Mnemonic collection
- Create custom flashcards
- Save to library

#### 📅 Study Schedule
- Calendar-based planner
- Add/view scheduled sessions
- Upcoming sessions list
- Database persistence

#### 📖 My Library
- View all saved content
- Filter by type (flashcards, notes, mnemonics)
- Delete items
- Organized by subject

### AI Tools

1. **Clinical Case Simulator**
   - Interactive patient cases
   - Diagnosis practice
   - Detailed case presentations

2. **Drug Chart Creator**
   - Medication comparison tables
   - Side-by-side drug information
   - Printable charts

3. **OSCE Practice Partner**
   - Clinical examination checklists
   - Step-by-step guidance
   - Practice tracking

4. **Differential Diagnosis Generator**
   - Generate DDx lists from symptoms
   - Life-threatening conditions highlighted
   - Red flag warnings

5. **Exam Notes Condensor**
   - Summarize long notes into key points
   - Structured bullet points
   - Save to library

6. **Audio to Notes Converter**
   - Convert lecture recordings
   - Structured note output
   - Key concepts extraction

---

## 🗄️ Database Structure

### Tables (All with Row Level Security)

1. **user_profiles** - User information and roles
2. **student_surveys** - Student onboarding data
3. **study_sessions** - Study session tracking
4. **user_library** - Saved flashcards, notes, content
5. **assessments** - Quiz results and scores
6. **study_schedules** - Scheduled study sessions

---

## 🔒 Security

- Supabase authentication
- Row Level Security (RLS) on all tables
- User data isolation
- Secure session management

---

## 📁 Project Structure

```
studyai/
├── index.html              # Landing page (redirects to login)
├── login.html              # Login/Signup page
├── survey.html             # Student onboarding survey
├── dashboard.html          # Main dashboard
├── assessment.html         # Quiz/Assessment page
├── memory-room.html        # Flashcards & mnemonics
├── study-session.html      # Study session timer
├── schedule.html           # Study scheduler
├── library.html            # Content library
├── ai-tools.html           # AI tools hub
├── clinical-case-simulator.html
├── drug-chart-creator.html
├── osce-practice-partner.html
├── differential-diagnosis.html
├── exam-notes-condensor.html
├── audio-to-notes.html
├── auth.js                 # Authentication utilities
├── setup-demo.html         # Demo account setup
├── DEMO_CREDENTIALS.md     # Login credentials
└── supabase/
    └── migrations/         # Database migrations
```

---

## 🧪 Testing

1. Run `setup-demo.html` to create demo accounts
2. Login as student (student@demo.com / demo123456)
3. Test all features:
   - View dashboard statistics
   - Start a study session
   - Take an assessment
   - Browse memory room
   - Try AI tools
   - Check schedule
   - View library

4. Login as admin (admin@demo.com / admin123456)
   - Access admin features (if implemented)

---

## 🛠️ Technologies

- **Frontend:** HTML, Tailwind CSS, Vanilla JavaScript
- **Backend:** Supabase (PostgreSQL)
- **Authentication:** Supabase Auth
- **Database:** PostgreSQL with Row Level Security
- **Build Tool:** Vite

---

## 📝 Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

---

## 📄 License

All rights reserved.

---

## 👥 Support

For issues or questions, please contact the development team.

---

**Built with ❤️ for better learning experiences**
