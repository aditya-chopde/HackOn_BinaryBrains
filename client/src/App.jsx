import GeneratePlan from './components/GeneratePlan'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<GeneratePlan />} />
      </Routes>
    </Router>
  )
}

export default App
