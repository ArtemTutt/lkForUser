import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import ExpertProfile from './ExpertProfile'
import MySessions from './MySessions'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExpertProfile />} />
        <Route path="/sessions" element={<MySessions />} />
      </Routes>
    </Router>
  )
}

export default App