import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LandingPage from "../LandingPage";

const Projects = () => {
  return (
    <div className="home">
      <LandingPage
        imageUrl={
          "https://framerusercontent.com/images/c9bQrXGGanXaAH6XnZU2N16W5N0.webp?scale-down-to=2048"
        }
        BrandName={"Selected Work"}
        para1={"Real brands, real results"}
        para2={
          "Take a closer look at how strategy and design come together to build brands that connect and endure."
        }
      />
      <div className="h-screen w-full bg-black"></div>
    </div>
  );
};

export default Projects;
