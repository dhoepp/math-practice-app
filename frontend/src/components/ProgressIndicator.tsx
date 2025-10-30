/**
 * ProgressIndicator - Shows current progress in session
 *
 * TODO: Implement progress indicator component
 * Props:
 * - current: number (current problem number, 1-indexed)
 * - total: number (total problems in session)
 *
 * Requirements:
 * - Clear visual representation of progress
 * - Options:
 *   1. Simple text: "Problem 5 of 10"
 *   2. Progress bar
 *   3. Dots/circles (filled vs unfilled)
 * - Should be encouraging, not stressful
 * - Consider: green/positive colors as progress increases
 *
 * Design considerations:
 * - For 1st graders, simple text might be clearest
 * - Progress bar good for visual learners
 * - Avoid countdown timers (adds stress)
 */

interface ProgressIndicatorProps {
  current: number
  total: number
}

export default function ProgressIndicator(props: ProgressIndicatorProps) {
  // TODO: Implement
  return (
    <div>
      <p>TODO: Implement ProgressIndicator component</p>
    </div>
  )
}
