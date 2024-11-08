import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import AboutImage1 from "./images/download.png";
import Features from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import LandingPage from "./pages/LandingPage"; // Create this component
import Login from "./pages/Login"; // Create this component
import SignUp from "./pages/SignUp"; // Create this component
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
    </Router>
  );
}

export default App;
