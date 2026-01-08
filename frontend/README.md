# Math Practice App - Frontend

React + TypeScript frontend for the 1st grade math practice application.

## Setup

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install
```

## Running the App

### Development Mode
```bash
npm run dev
```

The app will be available at http://localhost:3000

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Project Structure

```
frontend/
├── src/
│   ├── components/       # Reusable React components
│   │   ├── ProblemDisplay.tsx
│   │   ├── NumberPad.tsx
│   │   ├── ProgressIndicator.tsx
│   │   └── FeedbackAnimation.tsx
│   ├── pages/            # Page components
│   │   ├── Home.tsx
│   │   ├── PracticeSession.tsx
│   │   └── SessionComplete.tsx
│   ├── services/         # API client and storage
│   │   ├── api.ts
│   │   └── storage.ts
│   ├── hooks/            # Custom React hooks
│   │   ├── useSession.ts
│   │   └── useProblemGenerator.ts
│   ├── utils/            # Helper functions
│   │   └── helpers.ts
│   ├── App.tsx           # Main app component with routing
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles with Tailwind
├── public/               # Static assets
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── tailwind.config.js    # Tailwind CSS configuration
```

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## Development Notes

### Design Principles
- **Mobile-first**: Design for iPad first, desktop second
- **Large touch targets**: Minimum 60px buttons, consider 80-100px for kids
- **High contrast**: Easy to read for young eyes
- **Positive feedback**: Always encouraging, never punishing
- **Simple navigation**: Minimal steps between pages

### Testing on iPad
Since the target users are 6-year-olds on iPads, test frequently on actual devices:
1. After starting backend server, run dev server with `npm run dev`
2. Find your computer's IP address (e.g., `192.168.1.x`)
3. On iPad Safari, go to `http://YOUR_IP:3000`
4. Test touch interactions, font sizes, button sizes

### Key Components to Implement First
1. **NumberPad** - Core input mechanism
2. **ProblemDisplay** - Shows math problems clearly
3. **PracticeSession** page - Main user flow
4. Test with actual 6-year-old!

### LocalStorage Strategy (MVP)
For MVP, store session data in browser localStorage instead of backend:
- Current session progress
- Recent session results
- User preferences (mode, difficulty)

This keeps MVP simple and privacy-friendly (no accounts needed).

### Future Enhancements (Post-MVP)
- Sound effects for feedback
- More visual rewards (stars, badges)
- Progress tracking over time
- Parent dashboard
- More math operations (multiplication, word problems)
- Reading practice mode
