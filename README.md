# Math Practice App

Educational web app for 1st grade math practice. A clean, focused learning tool without distractions.

## Current Status: MVP Development

**What's working:**
- Project structure scaffolded ✓
- Backend API stub (FastAPI) ✓
- Frontend app stub (React + TypeScript + Tailwind) ✓

**What's next:**
- Implement problem generation
- Build UI components
- Test with real 6-year-old

## Quick Start

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Visit http://localhost:8000/docs for API documentation.

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

Visit http://localhost:3000 to see the app.

## MVP Feature Set

**Practice Modes:**
- Addition (0-10)
- Subtraction (0-10)

**User Experience:**
- Large, touch-friendly number pad
- Immediate feedback on answers
- Simple visual rewards
- Progress indicator
- Session summary screen

**Tech Stack:**
- Backend: Python 3.11+ with FastAPI
- Frontend: React 18+ with TypeScript (Vite)
- Database: SQLite (MVP)
- Styling: Tailwind CSS
- Target Device: iPad Safari

## Development Philosophy

1. **Ship over perfect** - Working features beat beautiful code for MVP
2. **Simple over clever** - Readable code over smart code
3. **Mobile-first** - Must work great on iPad for 6-year-olds
4. **No feature creep** - Check INSTRUCTIONS.md before adding features

See GUIDELINES.md for detailed development principles.

## Project Structure

```
math-practice-app/
├── backend/              # FastAPI Python backend
│   ├── app/
│   │   ├── models/       # Database models
│   │   ├── routes/       # API endpoints
│   │   ├── services/     # Business logic
│   │   └── utils/        # Helper functions
│   └── tests/
├── frontend/             # React TypeScript frontend
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API client
│   │   ├── hooks/        # Custom hooks
│   │   └── utils/        # Helper functions
│   └── public/
├── docs/                 # Documentation
├── INSTRUCTIONS.md       # Detailed project specs
├── GUIDELINES.md         # Development principles
└── README.md             # This file
```

## Documentation

- **INSTRUCTIONS.md** - Full project requirements and specifications
- **GUIDELINES.md** - Development principles and decision-making guide
- **CLAUDE.md** - Context for AI assistants working on this project
- **backend/README.md** - Backend setup and API documentation
- **frontend/README.md** - Frontend setup and component guide

## What's NOT in MVP

- Reading practice (Phase 2)
- User accounts/authentication
- Parent dashboard
- Adaptive difficulty
- Multiplayer features
- Sound effects

Focus on getting one thing working really well: simple math practice that a 6-year-old can use independently.

## Testing

Manual testing with real kids > automated tests for MVP.

Test checklist:
- [ ] Works on iPad Safari
- [ ] 6-year-old can use without help
- [ ] Touch targets are big enough
- [ ] Feedback is encouraging, never punishing
- [ ] Can complete a full session without bugs

## Contributing

This is a personal learning project, but feedback and suggestions welcome! Open an issue if you have ideas.

## License

TBD - Will choose an open source license before public release.

## Contact

Built with ❤️ by homeschooling parents.
