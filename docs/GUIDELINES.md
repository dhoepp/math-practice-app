# Development Guidelines

## Core Principles
1. **Ship over perfect** - Working > Beautiful for MVP
2. **Simple over clever** - Readable code > Smart code
3. **User-focused** - What helps a 6-year-old learn?
4. **No dark patterns** - Ever.

## When to Ask for Help

### Simplification Check
Use this prompt when you think code is getting complex:
```
Review this code and tell me if it's overcomplicated for an MVP. 
Suggest simpler alternatives. Remember: this is a learning project 
and needs to ship quickly.
```

### Feature Creep Check
Use this when tempted to add features:
```
I want to add [feature]. Does this belong in MVP or Phase 2? 
Check against INSTRUCTIONS.md scope.
```

### Kid-Friendly UX Check
Use this for UI decisions:
```
I'm building [component] for 6-year-olds. What usability issues 
do you see? Consider: touch targets, cognitive load, frustration points.
```

## Code Quality Rules

### Python Backend
- Use type hints everywhere
- Keep functions small (<20 lines)
- No clever one-liners if they're hard to read
- Comment the "why" not the "what"

### React Frontend
- Functional components only
- Custom hooks for logic extraction
- Props interfaces for TypeScript
- One component per file

### Database
- SQLite for MVP is fine
- Write migrations from day 1
- Don't worry about optimization yet

## What "Done" Looks Like
A feature is done when:
- [ ] It works on iPad Safari
- [ ] A 6-year-old could use it without help
- [ ] Code has basic error handling
- [ ] You can explain it to someone else
- [ ] It's committed to git

## Red Flags
Stop and reconsider if you're:
- Adding dependencies without clear need
- Spending >1 hour on visual polish
- Building for "future flexibility" 
- Implementing features not in INSTRUCTIONS.md
- Copying code you don't understand

## Testing Philosophy
For MVP:
- Manual testing with your son > Automated tests
- Test happy path first
- Add tests when bugs appear
- Don't write tests for code that will change

Later:
- Add integration tests for critical paths
- Unit test business logic
- E2E tests for core user flows

## Time Budgets
If you spend more than this, reassess:
- Initial setup: 2-4 hours
- Single feature: 4-8 hours
- Bug fix: 30 minutes to 2 hours
- Refactoring: 1-2 hours max per session

## Deployment Checklist
Before first deploy:
- [ ] Environment variables configured
- [ ] CORS properly set up
- [ ] Error handling doesn't leak internals
- [ ] Basic monitoring/logging
- [ ] Works on actual iPad

## When to Ship
Ship MVP when:
- Addition practice works end-to-end
- UI is usable on iPad
- No critical bugs
- You've tested with your son

Don't wait for:
- Perfect design
- All features complete
- Comprehensive tests
- Performance optimization
