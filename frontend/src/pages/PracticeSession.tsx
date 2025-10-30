/**
 * Practice Session page - Main problem-solving interface
 *
 * TODO: Implement practice session UI
 * Requirements:
 * - Display current problem (e.g., "5 + 3 = ?")
 * - Large number pad (0-9) for answer input
 * - Submit button (or auto-submit when answer entered)
 * - Progress indicator (e.g., "Problem 5 of 10")
 * - Immediate feedback on answer (checkmark/X animation)
 * - Show correct answer if wrong
 * - "Next problem" button after feedback
 * - Handle session completion (navigate to /complete)
 *
 * Components needed:
 * - ProblemDisplay (shows the math problem)
 * - NumberPad (0-9 buttons + delete/clear)
 * - ProgressBar or counter
 * - FeedbackAnimation (celebrate correct answers)
 * - AnswerDisplay (shows what user typed)
 *
 * State management:
 * - Current problem index
 * - List of problems for this session
 * - User's answer for current problem
 * - Feedback state (correct/incorrect/pending)
 * - Session stats (attempted, correct)
 *
 * Interactions:
 * 1. Load or generate problems on mount
 * 2. User enters answer via number pad
 * 3. On submit, validate answer
 * 4. Show feedback animation
 * 5. After delay, move to next problem
 * 6. When all problems done, navigate to /complete
 */

export default function PracticeSession() {
  // TODO: Implement
  return (
    <div>
      <h1>Practice Session</h1>
      <p>TODO: Implement practice session page</p>
    </div>
  )
}
