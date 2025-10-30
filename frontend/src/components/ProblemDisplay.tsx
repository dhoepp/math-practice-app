/**
 * ProblemDisplay - Shows the current math problem
 *
 * TODO: Implement problem display component
 * Props:
 * - operand1: number
 * - operand2: number
 * - operator: '+' | '-'
 * - showAnswer?: boolean (for feedback state)
 * - correctAnswer?: number (for showing correct answer if wrong)
 *
 * Requirements:
 * - Very large, readable numbers
 * - Clear operator symbol
 * - Proper spacing for readability
 * - Consider: visual representations (dots/blocks) for numbers?
 *
 * Example layout:
 *   5
 * + 3
 * ___
 *  ?
 *
 * Or horizontal: 5 + 3 = ?
 */

interface ProblemDisplayProps {
  operand1: number
  operand2: number
  operator: '+' | '-'
  showAnswer?: boolean
  correctAnswer?: number
}

export default function ProblemDisplay(props: ProblemDisplayProps) {
  // TODO: Implement
  return (
    <div>
      <p>TODO: Implement ProblemDisplay component</p>
    </div>
  )
}
