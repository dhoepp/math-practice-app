# Architecture Overview

## System Design

Simple client-server architecture optimized for MVP speed.

```
┌─────────────────────────────────────────┐
│           Frontend (React)              │
│  ┌──────────────────────────────────┐   │
│  │  Pages: Home, Practice, Complete │   │
│  └──────────────────────────────────┘   │
│  ┌──────────────────────────────────┐   │
│  │  Components: NumberPad, Problem  │   │
│  └──────────────────────────────────┘   │
│  ┌──────────────────────────────────┐   │
│  │  Services: API, LocalStorage     │   │
│  └──────────────────────────────────┘   │
└───────────────┬─────────────────────────┘
                │ HTTP/REST API
┌───────────────▼─────────────────────────┐
│        Backend (FastAPI)                │
│  ┌──────────────────────────────────┐   │
│  │  Routes: /problems, /sessions    │   │
│  └──────────────────────────────────┘   │
│  ┌──────────────────────────────────┐   │
│  │  Services: Problem Generation    │   │
│  └──────────────────────────────────┘   │
│  ┌──────────────────────────────────┐   │
│  │  Database: SQLite (MVP)          │   │
│  └──────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

## Data Flow

### Practice Session Flow

1. **User selects mode** (Home page)
   - Choose: Addition or Subtraction
   - Optional: Difficulty level (max number)

2. **Session creation** (PracticeSession page)
   - Frontend: Call API or generate problems locally
   - Generate N problems (default: 10)
   - Store session in localStorage (MVP) or backend (future)

3. **Problem solving loop**
   - Display problem
   - User enters answer via NumberPad
   - Validate answer (client-side or API)
   - Show feedback animation
   - Record result
   - Move to next problem

4. **Session completion** (SessionComplete page)
   - Calculate stats (attempted, correct)
   - Show encouraging summary
   - Option to practice again

## MVP Simplifications

### LocalStorage vs Database
**MVP:** Use localStorage for session data
- No backend persistence needed
- Privacy-friendly (no accounts)
- Fast to implement
- Good enough for single-device usage

**Future:** Backend database for:
- Cross-device sync
- Progress tracking over time
- Parent dashboard

### Client-Side vs Server-Side Problem Generation
**MVP:** Generate problems client-side
- Faster (no API calls)
- Works offline
- Simple logic (addition/subtraction)

**Future:** Server-side for:
- More complex problem types
- Adaptive difficulty
- Quality control

## Component Hierarchy

```
App
├── Router
│   ├── Home
│   │   └── ModeButton (TODO: create this)
│   ├── PracticeSession
│   │   ├── ProgressIndicator
│   │   ├── ProblemDisplay
│   │   ├── NumberPad
│   │   └── FeedbackAnimation
│   └── SessionComplete
│       ├── ScoreSummary (TODO: create this)
│       └── ActionButtons (TODO: create this)
```

## State Management

**MVP:** React hooks only (useState, useEffect, useContext if needed)
- No Redux/MobX for MVP
- Keep it simple
- Custom hooks for shared logic (useSession, useProblemGenerator)

**State locations:**
- Session state: useSession hook
- Current problem: Derived from session state
- User input: Local component state (NumberPad)
- Preferences: localStorage + React Context (if needed)

## API Design (Stubbed for MVP)

### Endpoints

**Health Check:**
- `GET /` - Basic health check
- `GET /health` - Detailed health check

**Problems:**
- `POST /api/problems/generate` - Generate a problem
- `POST /api/problems/validate` - Validate answer

**Sessions:**
- `POST /api/sessions` - Create session
- `GET /api/sessions/{id}` - Get session
- `POST /api/sessions/{id}/submit` - Submit answer
- `POST /api/sessions/{id}/complete` - Complete session

*Note: For MVP, might not use these endpoints. Problems could be generated client-side.*

## Database Schema (Future)

```sql
-- Problems table (optional for MVP)
CREATE TABLE problems (
    id INTEGER PRIMARY KEY,
    operand1 INTEGER NOT NULL,
    operand2 INTEGER NOT NULL,
    operator VARCHAR(1) NOT NULL,
    answer INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sessions table
CREATE TABLE sessions (
    id INTEGER PRIMARY KEY,
    mode VARCHAR(20) NOT NULL,
    max_number INTEGER DEFAULT 10,
    problems_count INTEGER DEFAULT 10,
    problems_attempted INTEGER DEFAULT 0,
    problems_correct INTEGER DEFAULT 0,
    started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP NULL
);

-- Session problems (tracks each attempt)
CREATE TABLE session_problems (
    id INTEGER PRIMARY KEY,
    session_id INTEGER REFERENCES sessions(id),
    problem_index INTEGER NOT NULL,
    operand1 INTEGER NOT NULL,
    operand2 INTEGER NOT NULL,
    operator VARCHAR(1) NOT NULL,
    correct_answer INTEGER NOT NULL,
    user_answer INTEGER NULL,
    is_correct BOOLEAN NULL,
    attempted_at TIMESTAMP NULL
);
```

## Deployment Architecture (Future)

```
┌──────────────────┐
│   CDN/Vercel     │  ← Frontend static files
└──────────────────┘

┌──────────────────┐
│  Railway/Render  │  ← Backend API
└──────────────────┘

┌──────────────────┐
│   PostgreSQL     │  ← Database (post-SQLite)
└──────────────────┘
```

## Performance Considerations

**MVP priorities:**
1. Fast initial load (< 3 seconds)
2. Instant feedback on answers (< 100ms)
3. Smooth animations (60fps)

**Not priorities yet:**
- Code splitting
- Image optimization (no images in MVP)
- Service workers/offline mode
- Advanced caching strategies

## Security Considerations

**MVP:**
- CORS configured properly
- Input validation (number ranges)
- No sensitive data stored

**Future (if adding accounts):**
- Authentication (JWT or session-based)
- Password hashing
- HTTPS only
- Rate limiting
- CSRF protection

## Accessibility

**Must haves:**
- Large touch targets (60px minimum)
- High contrast colors
- Clear, readable fonts
- Simple navigation

**Nice to haves (future):**
- Keyboard navigation
- Screen reader support
- Reduced motion option
- Voice feedback

## Browser Support

**Target:** iPad Safari (primary)
**Test:** Chrome, Firefox (secondary)
**Don't worry about:** IE11, old browsers

## Monitoring & Logging (Future)

For MVP, console.log is fine. Later add:
- Error tracking (Sentry)
- Usage analytics (privacy-friendly)
- Performance monitoring
