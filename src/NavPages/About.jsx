import React, { useRef } from "react";
import AboutPage1 from "../About-Page/AboutPage1";
import LandingPage from "../LandingPage";
import Card from "../Page 3/Card";
import Works from "../About-Page/Works";
import Testing11 from "../components/Testing11"
const About = () => {
  return (
    <div>
      <LandingPage />
      <AboutPage1 />
      <Card />
      <Works />
      {/* <Testing11 /> */}
    </div>
  );
};

export default About;
