# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context
Educational web app for 1st grade math practice. Built by homeschooling parents focused on no ads, no dark patterns - just learning. Current phase is MVP with single-digit addition/subtraction only.

## Learning Project - Guidance First Approach
**IMPORTANT:** This is a learning project for the developer. Unless explicitly requested otherwise:

- **Provide guidance, hints, and documentation** - Point to relevant docs, explain concepts, suggest approaches
- **Do NOT provide explicit code solutions** - Help them figure it out, don't do it for them
- **Act as a context-aware knowledge base** - Answer questions about the stack, best practices, and how things work
- **Only implement when explicitly asked** - Wait for clear signals like "I give up, help me with this specific implementation" or "please implement this for me"

The goal is learning through building, not having Claude build it for them.

## Tech Stack
- **Backend:** Python 3.11+ with FastAPI
- **Frontend:** React 18+ with TypeScript (Vite)
- **Database:** SQLite (MVP), PostgreSQL (later)
- **Styling:** Tailwind CSS

## Project Structure
Monorepo with `backend/` (FastAPI) and `frontend/` (React) directories. See INSTRUCTIONS.md for detailed structure.

## Development Commands

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload  # Run dev server
```

### Frontend
```bash
cd frontend
npm install
npm run dev  # Run dev server
```

## Development Philosophy
1. **Ship over perfect** - MVP prioritizes working over beautiful
2. **Simple over clever** - Readable code over smart code
3. **Mobile-first** - Must work on iPad Safari for 6-year-olds
4. **No feature creep** - Check INSTRUCTIONS.md for what's NOT in MVP

## Code Style
- **Python:** Type hints everywhere, functions <20 lines, comment "why" not "what"
- **React:** Functional components only, custom hooks for logic, one component per file
- **Testing:** Manual testing with real kid > automated tests for MVP

## Key Constraints
- Large touch-friendly targets (6-year-old users)
- No user accounts/authentication in MVP
- Local storage only for progress tracking
- Session-based practice (10 problems default)

## Reference Files
- `INSTRUCTIONS.md` - Full project specs and requirements
- `GUIDELINES.md` - Development principles and decision-making prompts
