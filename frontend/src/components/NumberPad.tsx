/**
 * NumberPad - Touch-friendly number input (0-9)
 *
 * TODO: Implement number pad component
 * Props:
 * - onNumberClick: (number: number) => void
 * - onClear: () => void
 * - onSubmit: () => void
 * - disabled?: boolean (during feedback animation)
 *
 * Requirements:
 * - Large buttons (minimum 60px x 60px, consider 80-100px for iPad)
 * - Clear visual feedback on press (scale, color change)
 * - Grid layout: 3 columns, 4 rows
 *   1 2 3
 *   4 5 6
 *   7 8 9
 *   C 0 ✓  (C = clear, ✓ = submit)
 * - Bright, engaging colors
 * - Clear labels
 *
 * Accessibility:
 * - Touch targets at least 44x44pt (iOS HIG recommendation)
 * - High contrast
 * - Consider haptic feedback (if possible on web)
 */

interface NumberPadProps {
  onNumberClick: (number: number) => void
  onClear: () => void
  onSubmit: () => void
  disabled?: boolean
}

export default function NumberPad(props: NumberPadProps) {
  // TODO: Implement
  return (
    <div>
      
    </div>
  )
}
