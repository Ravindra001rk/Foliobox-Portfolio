import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./NavPages/About";
import Projects from "./NavPages/Projects";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import ClckToTop from "./components/ClckToTop";

const App = () => {
  return (
    <div className="overflow-x-hidden">
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
