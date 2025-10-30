/**
 * Utility helper functions
 *
 * TODO: Add utility functions as needed
 */

/**
 * Calculate percentage score
 * TODO: Implement
 */
export function calculateScore(correct: number, total: number): number {
  // return Math.round((correct / total) * 100)
  throw new Error('Not implemented')
}

/**
 * Format time duration (for session timing if we add it)
 * TODO: Implement if needed
 */
export function formatDuration(seconds: number): string {
  throw new Error('Not implemented')
}

/**
 * Get encouraging message based on score
 * TODO: Implement
 *
 * Always return positive messages!
 * Examples:
 * - "Amazing work!"
 * - "You're learning so much!"
 * - "Great job trying!"
 * - "Keep practicing!"
 */
export function getEncouragingMessage(correct: number, total: number): string {
  throw new Error('Not implemented')
}

/**
 * Debounce function (for any user input handling)
 * TODO: Implement if needed
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  throw new Error('Not implemented')
}
