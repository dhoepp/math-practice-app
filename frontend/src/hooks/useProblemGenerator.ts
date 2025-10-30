/**
 * Custom hook for client-side problem generation
 *
 * TODO: Implement useProblemGenerator hook
 *
 * For MVP, we might generate problems client-side to avoid backend dependency.
 * This hook encapsulates the problem generation logic.
 *
 * Later, we can swap this out for API calls without changing components.
 */

import { useState, useCallback } from 'react'

interface Problem {
  operand1: number
  operand2: number
  operator: '+' | '-'
  answer: number
}

export function useProblemGenerator() {
  // TODO: Implement problem generation logic

  /**
   * Generate a single problem
   * TODO: Implement
   */
  const generateProblem = useCallback(
    (mode: 'addition' | 'subtraction', maxNumber: number = 10): Problem => {
      // For addition:
      // operand1 = random(0, maxNumber)
      // operand2 = random(0, maxNumber)
      // answer = operand1 + operand2

      // For subtraction:
      // operand1 = random(0, maxNumber)
      // operand2 = random(0, operand1)  // ensure non-negative
      // answer = operand1 - operand2

      throw new Error('Not implemented')
    },
    []
  )

  /**
   * Generate multiple unique problems
   * TODO: Implement
   */
  const generateProblemSet = useCallback(
    (
      mode: 'addition' | 'subtraction',
      count: number,
      maxNumber: number = 10
    ): Problem[] => {
      // Generate 'count' unique problems
      // Track (operand1, operand2, operator) tuples to avoid duplicates
      // If can't generate unique after N attempts, allow duplicates

      throw new Error('Not implemented')
    },
    []
  )

  /**
   * Validate an answer
   * TODO: Implement
   */
  const validateAnswer = useCallback((problem: Problem, userAnswer: number): boolean => {
    // Compare userAnswer with problem.answer
    return false  // TODO
  }, [])

  return {
    generateProblem,
    generateProblemSet,
    validateAnswer,
  }
}
