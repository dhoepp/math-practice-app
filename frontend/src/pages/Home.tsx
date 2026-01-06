/**
 * Home page - Mode selection
 *
 * TODO: Implement mode selection UI
 * Requirements:
 * - Large, touch-friendly buttons for Addition and Subtraction
 * - Maybe a "Mixed" mode option for future
 * - Simple, colorful design appealing to 6-year-olds
 * - Navigation to /practice with selected mode
 * - Consider: show brief instructions or demo?
 *
 * UI Components needed:
 * - ModeButton component (large, colorful, with icon)
 * - Header with app title
 * - Footer with "Made for learning" message?
 *
 * State management:
 * - Selected mode (addition/subtraction)
 * - Optional: difficulty level (max number range)
 * - Store in localStorage or pass to practice session
 */
import React from 'react'
import { useNavigate } from "react-router-dom"

export default function Home() {
  // TODO: Implement

  const navigate = useNavigate()
  const [maxNumber, setMaxNumber] = React.useState('10')
  const handleModeSelection = (mode : 'addition' | 'subtraction' ) => {
    navigate(`/practice?mode=${mode}&maxNumber=${maxNumber}`)
  }

  return (
    <div className="p-8 text-center">
      <h1>Mode Selection</h1>
      {/* <p>TODO: Implement home page</p> */}
      <div>
        <button onClick={() => handleModeSelection('addition')}>add</button>
        <button onClick={() => handleModeSelection('subtraction')}>sub</button>
      </div>
      <input type="text" value={maxNumber} onChange={(e) => setMaxNumber(e.target.value)}/>

    </div>
  )
}
