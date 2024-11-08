import React from "react";
import Features from "../components/Services";
import Header from "../components/Header";
import Contact from "../components/Contact";
import About from "../components/About";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";

function LandingPage() {
  return (
    <div className="App">
      <Header />
      <About />
      <Features />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;
