import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./NavPages/About";
import Projects from "./NavPages/Projects";
import ClckToTop from "./components/ClckToTop";

const App = () => {
  return (
    <div className="overflow-x-hidden bg-black ">
      <ClckToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    
    </div>
  );
};

export default App;
