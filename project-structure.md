# StudyAI - Project Structure

## File Organization

### Core Files
- `index.html` - Main dashboard page with progress tracking and overview
- `assessment.html` - AI-powered test generation and assessment center
- `memory-room.html` - Three-tier memory classification system
- `ai-tools.html` - AI-powered study tools and utilities
- `main.js` - Core JavaScript functionality and interactions

### Resources Directory
- `resources/hero-studyai.png` - Main hero image for landing
- `resources/subject-icons.png` - Subject-specific icons and symbols
- `resources/ai-brain.png` - AI visualization graphics
- `resources/dashboard-mockup.png` - Dashboard interface examples

### Documentation
- `interaction.md` - Detailed interaction design specifications
- `design.md` - Complete design style guide and visual standards
- `project-structure.md` - This file, outlining project organization

## Page Breakdown

### Index.html - Main Dashboard
**Purpose:** Central hub for student progress and quick actions
**Key Sections:**
- Hero area with animated AI neural network background
- Progress overview with circular indicators
- Today's study schedule with session status
- Quick action buttons (Start Study, Take Test, View Memory Room)
- Recent achievements and study streak
- AI-generated insights and recommendations

**Interactive Components:**
- Circular progress rings with hover details
- Quick start study session modal
- Achievement badge carousel
- Real-time study streak counter

### Assessment.html - Test Center
**Purpose:** AI-powered test generation and assessment management
**Key Sections:**
- Test configuration panel (subjects, topics, difficulty)
- AI generation interface with loading states
- Active test interface with timer
- Results analysis with detailed breakdown
- Performance tracking and memory room updates

**Interactive Components:**
- Dynamic test generator with real-time preview
- Timer-based test interface
- Question navigation and bookmarking
- Results visualization with charts
- Performance classification system

### Memory-room.html - Memory Management
**Purpose:** Three-tier memory classification and review system
**Key Sections:**
- Memory tier overview (Long Term, Half Memory, Dead Memory)
- Topic filtering and search functionality
- Individual topic progress tracking
- Study session initiation from memory room
- Memory statistics and analytics

**Interactive Components:**
- Drag-and-drop topic classification
- Search and filter system
- Progress tracking visualizations
- Direct study session launch
- Memory strength indicators

### Ai-tools.html - AI Utilities
**Purpose:** Collection of AI-powered study tools
**Key Sections:**
- AI Flashcard Generator
- AI Mnemonics Generator
- AI Answer Generator
- Clinical Case Simulator
- Drug Chart Creator
- OSCE Practice Partner

**Interactive Components:**
- Tool selection interface
- Input forms with AI suggestions
- Real-time generation with previews
- Export and sharing functionality
- Usage statistics and history

## Technical Implementation

### Core Technologies
- **HTML5** - Semantic markup and structure
- **CSS3** - Advanced styling with Tailwind CSS
- **JavaScript ES6+** - Modern JavaScript features
- **Animation Libraries** - Anime.js, p5.js, Pixi.js
- **Data Visualization** - ECharts.js for charts and graphs
- **Text Effects** - Typed.js for typewriter animations

### JavaScript Architecture
**Main.js Structure:**
```javascript
// Core application state management
const StudyAI = {
    user: { /* User data and preferences */ },
    progress: { /* Progress tracking */ },
    assessments: { /* Test data and results */ },
    memory: { /* Memory room classifications */ },
    ai: { /* AI tool configurations */ }
};

// Module organization
const Dashboard = { /* Dashboard functionality */ };
const Assessment = { /* Test generation and management */ };
const MemoryRoom = { /* Memory classification system */ };
const AITools = { /* AI utility functions */ };
const Animations = { /* Animation controllers */ };
```

### Data Management
**Local Storage Structure:**
- User preferences and settings
- Progress tracking data
- Assessment results and history
- Memory room classifications
- AI tool usage statistics

**Sample Data Generation:**
- Mock assessment questions for each subject
- Pre-populated progress data
- Sample memory room classifications
- Achievement and milestone data

### Responsive Design
**Mobile-First Approach:**
- Flexible grid layouts
- Touch-friendly interface elements
- Optimized navigation patterns
- Performance-conscious animations

**Breakpoint Strategy:**
- Mobile: Single column, stacked elements
- Tablet: Two-column layouts, condensed navigation
- Desktop: Full multi-column layouts, expanded features

## Content Strategy

### Educational Content
- **JEE Preparation:** Mathematics, Physics, Chemistry questions
- **NEET Preparation:** Biology, Chemistry, Physics content
- **Sample Questions:** Multiple choice, numerical, descriptive
- **Study Materials:** Key concepts, formulas, definitions

### Visual Content
- **Progress Visualizations:** Charts, graphs, progress rings
- **Subject Icons:** Consistent iconography for each subject
- **Achievement Graphics:** Badges, certificates, milestones
- **AI Visualizations:** Neural networks, data flow, processing

### Interactive Elements
- **Assessment Engine:** Question randomization, timing, scoring
- **Progress Tracking:** Real-time updates, historical data
- **Memory System:** Classification algorithms, review scheduling
- **AI Tools:** Generation engines, content processing

## Performance Optimization

### Loading Strategy
- Critical CSS inlined
- Progressive image loading
- Lazy loading for non-critical content
- Efficient animation frame management

### Data Efficiency
- Local storage for user data
- Efficient data structures
- Minimal API calls (simulated)
- Optimized asset delivery

### Animation Performance
- Hardware acceleration where possible
- Efficient DOM manipulation
- Smooth 60fps animations
- Reduced motion preferences support

## Accessibility Considerations

### WCAG Compliance
- Proper color contrast ratios
- Keyboard navigation support
- Screen reader compatibility
- Alternative text for images

### Inclusive Design
- Multiple input methods
- Clear visual hierarchy
- Consistent navigation patterns
- Error prevention and recovery

## Future Enhancements

### Planned Features
- Real-time collaboration
- Advanced AI tutoring
- Video content integration
- Offline functionality
- Advanced analytics

### Integration Points
- Learning Management Systems
- Educational content providers
- Exam conducting bodies
- Career counseling services