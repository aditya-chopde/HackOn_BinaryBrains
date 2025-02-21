import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GeneratePlanPage from './pages/GeneratePlanPage';
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SinglePlanPage from "./pages/SinglePlanPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/generate-plan" element={<GeneratePlanPage/>} />
        <Route path="/plan/:id" element={<SinglePlanPage/>} />
      </Routes>
    </Router>
  )
}

export default App
