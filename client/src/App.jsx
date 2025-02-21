import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GeneratePlanPage from './pages/GeneratePlanPage';
import Dashboard from "./pages/Dashboard";
import SinglePlanPage from "./pages/SinglePlanPage";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/generate-plan" element={<GeneratePlanPage/>} />
        <Route path="/plan/:id" element={<SinglePlanPage/>} />
      </Routes>
    </Router>
  )
}

export default App
