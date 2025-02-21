import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GeneratePlanPage from './pages/GeneratePlanPage';
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SinglePlan from "./components/SinglePlan";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/generate-plan" element={<GeneratePlanPage/>} />
        <Route path="/plan/:id" element={<SinglePlan/>} />
      </Routes>
    </Router>
  )
}

export default App
