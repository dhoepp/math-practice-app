/**
 * Session Complete page - Results summary
 *
 * TODO: Implement session completion UI
 * Requirements:
 * - Show total problems attempted
 * - Show number correct
 * - Calculate and display percentage/score
 * - Celebration message/animation (always positive!)
 * - "Practice Again" button (return to home or start new session)
 * - "Try Different Mode" button (return to home)
 * - Consider: show which problems were missed? (maybe too negative for 1st grader)
 *
 * Components needed:
 * - ScoreSummary (displays stats in kid-friendly way)
 * - CelebrationAnimation (confetti, stars, etc.)
 * - ActionButtons (practice again, try different mode)
 *
 * State management:
 * - Session results (from previous page or localStorage)
 * - problems_attempted
 * - problems_correct
 *
 * Design considerations:
 * - ALWAYS positive messaging, even if score is low
 * - "You tried 10 problems! Great job!"
 * - "You got 7 correct! You're learning!"
 * - Avoid negative language like "You missed 3"
 */

export default function SessionComplete() {
  // TODO: Implement
  return (
    <div>
      <h1>Session Complete</h1>
      <p>TODO: Implement session complete page</p>
    </div>
  )
}
