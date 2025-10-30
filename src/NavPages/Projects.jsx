import React from "react";
import LandingPage from "../LandingPage";
import Faq from "../ProjectPage/Faq";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import AnimBtn from "../components/AnimBtn";
const Projects = () => {
  return (
    <div className="home relative overflow-hidden">
      <LandingPage
        imageUrl={
          "https://framerusercontent.com/images/c9bQrXGGanXaAH6XnZU2N16W5N0.webp?scale-down-to=2048"
        }
        BrandName={"Selected Work"}
        para1={"Real brands, real results"}
        para2={
          "Take a closer look at how strategy and design come together to build brands that connect and endure."
        }
        Page={"Projects"}
      />
      <div className="w-full bg-[#141515] ">
        <Faq />
      </div>
    
      <div>
        <div className="overflow-hidden">
          <div className="w-full bg-[#141414] overflow-hidden md:px-35  px-10  min-h-[60vh] text-white py-16">
            <div className="w-full gap-6 lg:gap-0 justify-between flex flex-col md:flex-row  ">
              <div className=" space-y-6">
                <Link to="/" className="text-3xl font-bold">
                  Folioblox
                </Link>
                <h2 className="text-xl font-semibold">
                  Great design should feel invisible.
                </h2>
                <p className="text-gray-400 max-w-sm">
                  I'm a product designer focused on building clean, intuitive
                  interfaces that solve real-world problems.
                </p>
                <div className="w-41">
                  <Button text="Get in Touch" />
                </div>
                <p className="text-gray-500 text-sm">© 2025 Copyright</p>
              </div>

              <div className="">
                <h3 className="text-orange-500 font-semibold mb-4">Menu</h3>
                <ul className="space-y-2 text-xl text-gray-200">
                  <li className="hover:text-orange-500 cursor-pointer">Home</li>
                  <li className="hover:text-orange-500 cursor-pointer">
                    Services
                  </li>
                  <li className="hover:text-orange-500 cursor-pointer">
                    About
                  </li>
                  <li className="hover:text-orange-500 cursor-pointer">
                    Projects
                  </li>
                  <li className="hover:text-orange-500 cursor-pointer">
                    Pricing
                  </li>
                </ul>
              </div>

              <div className="">
                <h3 className="text-orange-500 font-semibold mb-4">Social</h3>
                <div className="flex flex-col gap-3 text-gray-200">
                  <a
                    href="https://www.facebook.com/ravindra9949"
                    className="flex items-center gap-2 hover:text-white"
                  >
                    <FaFacebook /> Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/_ravindrakushwaha/"
                    className="flex items-center gap-2 hover:text-white"
                  >
                    <FaInstagram /> Instagram
                  </a>
                  <a
                    href="https://github.com/Ravindra001rk"
                    className="flex items-center gap-2 hover:text-white"
                  >
                    <FaGithub /> Github
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:text-[#0d0d0d]  absolute -bottom-8 lg:-bottom-55 w-full">
            <h1 className="text-[17vw] font-extrabold text-center">
              Folioblox®
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
