import React from "react";
// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// pages or sections 
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";

const Portfolio = () => {

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <Navbar />
      {/* Hero Section */}
      <Home />
      {/* About Section */}
      <About />
      {/* Projects Section */}
      <Projects />
      {/* Articles Section */}
      <Articles />
      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;
