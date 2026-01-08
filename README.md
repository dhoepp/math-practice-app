# Math Practice App

Educational web app for 1st grade math practice. A clean, focused learning tool without distractions.

## Current Status: MVP Deployed

### Deployment Info:

- Live app: [https://math-practice-app-eta.vercel.app/]
- Backend: Hosted on Railway
- Frontend: Hosted on Vercel

## Quick Start

### Backend Setup

```bash
./start.sh
```

Visit <http://localhost:8000/docs> for API swagger documentation.

### Frontend Setup

```bash
./startfrontend.sh
```

Visit <http://localhost:3000> to see the app.

## MVP Feature Set

**Practice Modes:**

- Addition (0-10)
- Subtraction (0-10) (allow_negative coming soon)
- Adaptive difficulty (custom max number)

**User Experience:**

- Large, touch-friendly number pad
- Immediate feedback on answers
- Simple visual rewards (coming soon)
- Progress indicator (coming soon)
- Session summary screen (coming soon)

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

```plain
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
- Multiplayer features
- Sound effects

Focus on getting one thing working really well: simple math practice that a 6-year-old can use independently.

## Testing

Test checklist:

- [x] Works on iPad Safari
- [x] 6-year-old can use without help
- [x] Touch targets are big enough
- [x] Feedback is encouraging, never punishing
- [x] Can complete a full session without bugs

## Contributing

This is a personal learning project, but feedback and suggestions welcome! Open an issue if you have ideas.

## Contact

Built with ❤️ by homeschooling parents.
