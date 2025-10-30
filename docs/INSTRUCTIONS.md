# MathReading Practice App - Project Instructions

## Project Overview
Educational web app for 1st grade math practice. Built by homeschooling parents who are tired of predatory edu-apps. No ads, no dark patterns, no manipulation - just learning.

**Current Phase:** MVP - 1st Grade Math Only
**Timeline Goal:** Ship something usable in 4-6 weeks

## Tech Stack
- **Backend:** Python 3.11+ with FastAPI
- **Frontend:** React 18+ with TypeScript (responsive web, iPad-friendly)
- **Database:** SQLite for MVP (migrate to PostgreSQL later)
- **Styling:** Tailwind CSS (simple, fast, no framework bloat)
- **Deployment:** TBD (Railway/Render/Vercel)

## Project Structure Requirements
Create a monorepo structure:
```
math-practice-app/
├── backend/              # FastAPI Python backend
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py      # FastAPI app entry point
│   │   ├── models/      # Database models
│   │   ├── routes/      # API endpoints
│   │   ├── services/    # Business logic
│   │   └── utils/       # Helper functions
│   ├── tests/
│   ├── requirements.txt
│   └── README.md
├── frontend/            # React frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── services/    # API client
│   │   ├── hooks/       # Custom React hooks
│   │   └── utils/       # Helper functions
│   ├── public/
│   ├── package.json
│   └── README.md
├── docs/                # Documentation
├── INSTRUCTIONS.md      # This file
├── GUIDELINES.md        # Development principles
└── README.md            # Project overview
```

## MVP Feature Set - 1st Grade Math

### Core Features (Must Have)
1. **Practice Modes:**
   - Addition (single digit: 0-10)
   - Subtraction (single digit: 0-10)
   - Number recognition/counting

2. **Problem Generation:**
   - Random problem generation within selected mode
   - Configurable difficulty (number ranges)
   - No duplicate problems in same session

3. **User Experience:**
   - Large, touch-friendly number pad
   - Immediate feedback (correct/incorrect)
   - Simple visual rewards (checkmark, confetti animation)
   - Progress indicator (5/10 problems complete)
   - Session complete screen with summary

4. **Progress Tracking (Minimal):**
   - Local storage only for MVP
   - Track problems attempted/correct per session
   - No accounts, no login (privacy-first)

### Explicitly NOT in MVP
- ❌ Reading practice (Phase 2)
- ❌ User accounts/authentication
- ❌ Parent dashboard
- ❌ Adaptive difficulty
- ❌ Multiplayer/social features
- ❌ Sound effects (can add later)

## Scaffolding Instructions for Claude Code

**DO:**
- Create the full directory structure
- Set up basic FastAPI server with CORS
- Create React app with Vite (faster than CRA)
- Add stub files with clear TODO comments
- Include basic API endpoint examples (health check)
- Set up Tailwind CSS configuration
- Create initial database models (Problem, Session)
- Add requirements.txt and package.json with dependencies
- Include .gitignore for Python and Node
- Write README files explaining how to run each part

**DO NOT:**
- Implement the actual problem generation logic
- Build complete React components
- Write database query logic
- Implement the UI/UX design
- Add testing infrastructure yet (we'll add it as we go)

**STUB CODE STYLE:**
Use detailed comments to guide implementation, like:
```python
# TODO: Implement problem generation
# Requirements:
# - Generate random addition problem with operands 0-10
# - Ensure answer is also 0-10 (no negative results for subtraction)
# - Return as dict with format: {"operand1": int, "operand2": int, "operator": str, "answer": int}
def generate_problem(mode: str, max_number: int = 10) -> dict:
    pass
```

## Development Principles
- Keep it simple - this is a learning project
- Mobile-first responsive design
- No premature optimization
- Write code you can understand in 6 months
- Test with real kid (my son) early and often

## First Steps After Scaffolding
1. Get backend server running locally
2. Get frontend dev server running
3. Connect frontend to backend (test with health check)
4. Implement one complete feature end-to-end (addition practice)
5. Test with actual 1st grader

## Questions to Answer During Development
- How many problems per session? (Start with 10)
- What makes a session "complete"? (All problems attempted)
- How should we handle wrong answers? (Show correct answer, move on)
- Retry logic? (No retries in MVP - learn from mistakes)

---

**Ready to scaffold when you are. Run from project root.**
