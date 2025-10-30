import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// TODO: Import pages once created
// import Home from './pages/Home'
// import PracticeSession from './pages/PracticeSession'
// import SessionComplete from './pages/SessionComplete'

function App() {
  // TODO: Set up routing for different pages
  // - Home page: Mode selection (addition/subtraction)
  // - Practice session page: Show problems, collect answers
  // - Session complete page: Show summary and restart option

  return (
    <Router>
      <div className="App">
        {/* TODO: Add routes once pages are implemented */}
        <Routes>
          <Route path="/" element={<div className="p-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Math Practice App</h1>
            <p className="text-gray-600">
              TODO: Implement pages and routing
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Backend status check: Open browser console and check for API connection
            </p>
          </div>} />
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/practice" element={<PracticeSession />} /> */}
          {/* <Route path="/complete" element={<SessionComplete />} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
