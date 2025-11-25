/**
 * API client for backend communication
 *
 * TODO: Implement API client functions
 *
 * Consider using:
 * - fetch API (built-in, simple)
 * - axios (more features, easier error handling)
 *
 * Base URL should point to backend (e.g., http://localhost:8000)
 * In production, configure via environment variables
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

// TODO: Add TypeScript interfaces for API requests/responses
export interface Problem {
  id?: number
  operand1: number
  operand2: number
  operator: '+' | '-'
  answer?: number  // Not exposed to frontend until validation
}

interface SessionData {
  mode: 'addition' | 'subtraction'
  max_number: number
  problems_count: number
}

interface Session {
  id?: number
  mode: string
  max_number: number
  problems_count: number
  started_at?: string
  completed_at?: string
  problems: Problem[]
  problems_attempted: number
  problems_correct: number
}

/**
 * Health check
 * TODO: Implement health check call
 */
export async function checkHealth(): Promise<{ status: string }> {
  // Example:
  // const response = await fetch(`${API_BASE_URL}/health`)
  // return response.json()
  throw new Error('Not implemented')
}

/**
 * Generate a single problem
 * TODO: Implement problem generation
 */
export async function generateProblem(
  mode: 'addition' | 'subtraction',
  maxNumber: number = 10,
): Promise<Problem> {
  const url = `${API_BASE_URL}/api/problems/generate?mode=${mode}&max_number=${maxNumber}`
  const response = await fetch(url, { method: 'POST' })
  const data = await response.json()
  return data
}

/**
 * Validate an answer
 * TODO: Implement answer validation
 */
export async function validateAnswer(
  problem: Problem,
  userAnswer: number
): Promise<{ is_correct: boolean; correct_answer: number }> {
  throw new Error('Not implemented')
}

/**
 * Create a practice session
 * TODO: Implement session creation
 */
export async function createSession(sessionData: SessionData): Promise<Session> {
  throw new Error('Not implemented')
}

/**
 * Submit an answer for a problem in the session
 * TODO: Implement answer submission
 */
export async function submitAnswer(
  sessionId: number,
  problemIndex: number,
  userAnswer: number
): Promise<Session> {
  throw new Error('Not implemented')
}

/**
 * Complete a session
 * TODO: Implement session completion
 */
export async function completeSession(sessionId: number): Promise<Session> {
  throw new Error('Not implemented')
}

// TODO: Add error handling wrapper
// Consider creating a wrapper function that handles common errors:
// - Network errors
// - Server errors (500)
// - Validation errors (400)
// - CORS issues
// Show user-friendly error messages
