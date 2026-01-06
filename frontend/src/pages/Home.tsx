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
      <div className="flex gap-4 justify-center">
        <button 
          onClick={() => handleModeSelection('addition')}
          className='w-[30%] h-48 border-4 border-red-500 rounded-lg flex flex-col items-center justify-center'
        >
            <div className="text-xl font-bold">ADD</div>
            <div className="text-4xl">+</div>
            <div className="text-sm">addition</div>
        </button>
        <button 
          onClick={() => handleModeSelection('subtraction')}
          className='w-[30%] h-48 border-4 border-blue-500 rounded-lg flex flex-col items-center justify-center'
        >
            <div className="text-xl font-bold">SUB</div>
            <div className="text-4xl">-</div>
            <div className="text-sm">subtraction</div>
        </button>
      </div>
      <div>Max Number:</div>
      <input className='border-2' type="number" value={maxNumber} onChange={(e) => setMaxNumber(e.target.value)}/>

    </div>
  )
}
