import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login"; 
import SignUp from "./pages/SignUp";
import NavBar from "./components/NavBar";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
    </Router>
  );
}

export default App;
