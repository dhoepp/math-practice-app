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
import React from 'react'
import { generateProblem, submitAnswer, type Problem } from '../services/api'

export default function PracticeSession() {
  // TODO: Implement
  const [problem, setProblem] = React.useState<Problem | null>(null)
  const [userAnswer, setUserAnswer] = React.useState('')
  const [feedbackMessage, setFeedback] = React.useState<string | null>(null)

  const handleSubmit = async () => {
    const answerInt = (Number(userAnswer))
    const isCorrect = answerInt === problem?.answer
    const feedbackMessage = isCorrect ? 'Correct!' : `Incorrect. The correct answer is ${problem?.answer}.`
    setFeedback(feedbackMessage)
    console.log('Submitting answer:', answerInt)
    console.log('Your answer is: ', answerInt === problem?.answer)
    
  }
  React.useEffect(() => {
    // fetch and store in state
    async function fetchProblem() {
      const newProblem = await generateProblem('addition', 10)
      setProblem(newProblem)
    }
    fetchProblem()
    }, [])
    
  return (
    <div className="p-8 text-center">
      {problem ? (
        <div>
          <h2>Solve the problem:</h2>
          <p>{problem.operand1} {problem.operator} {problem.operand2} = ?</p>
          <input type="text" value={userAnswer}  onChange={(e) => setUserAnswer(e.target.value)}  placeholder="Your answer here" />
          <button onClick={handleSubmit}>Submit</button>
          {/* <p>You typed: {userAnswer}</p> */}
          <p>{feedbackMessage}</p> 
          
    </div>
      ) : (
        <p>Loading problem...</p>
      )}
    

    </div>
  )
}
