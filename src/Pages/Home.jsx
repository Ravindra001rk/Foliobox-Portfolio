import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "../components/Marquee";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Footer from "./Footer";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.from(".home", {
      opacity: 0,
      duration: 0.8,
    });
    gsap.from(imgRef.current, {
      y: 80,
      scale: 1.2,
      delay: 0.1,
      duration: 1.1,
      opacity: 0,
      onComplete: () => {
        gsap.to(imgRef.current, {
          opacity: 0,
          scale: 1.5,
          ease: "none",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "90% 80%",
            end: "150% 90%",
            scrub: true,
          },
        });
      },
    });
  });

  return (
    <div>
      <div className="home  bg-[#141414] overflow-hidden">
        <div className="relative h-screen w-full bg-black rounded-b-[8%] overflow-hidden">
          <img
            ref={imgRef}
            className="img object-cover h-full w-full rounded-b-[8%]"
            src="https://framerusercontent.com/images/YaidatC1hCLAp4hEizcWOaMednw.png?scale-down-to=2048"
            alt=""
          />
          <div className="absolute top-[21%] md:top-[6%] left-0 w-full h-full  md:px-35 px-10 text-white">
            <div className="flex flex-col md:justify-end w-full h-full ">
              <div className="flex mb-5 flex-col md:flex-row md:justify-between md:mt-[12%] mt-[45%] md:mb-35 md:items-center ">
                <div>
                  <h1 className="md:text-5xl text-2xl">Hey, I'm a</h1>
                  <h1 className="md:text-8xl text-7xl mt-5 font-extrabold">
                    Creative Director
                  </h1>
                </div>
                <div>
                  <h1 className="md:text-3xl md:w-[70%] font-semibold md:font-semibold">
                    Great design should feel invisible.
                  </h1>
                  <p className="md:text-xl text-[15px] md:mt-5 mt-8 text-gray-300 md:font-semibold">
                    From logo to language, I build brands that connect and
                    convert.
                  </p>
                </div>
              </div>
              <div className="grid md:mt-0 mt-10 md:grid-cols-4 grid-cols-2 gap-y-6 md:gap-x-20 md:mb-35">
                <div>
                  <h1 className="font-bold">
                    <span className="text-orange-600">#</span>01
                  </h1>
                  <h1 className="md:text-xl text-[15p]">Brand Strategy</h1>
                </div>
                <div>
                  <h1 className="font-bold">
                    <span className="text-orange-600">#</span>02
                  </h1>
                  <h1 className=" md:text-xl text-[15p]">
                    Brand Identity Design
                  </h1>
                </div>
                <div>
                  <h1 className="font-bold">
                    <span className="text-orange-600">#</span>03
                  </h1>
                  <h1 className=" md:text-xl text-[15p]">Packaging Design</h1>
                </div>
                <div>
                  <h1 className="font-bold">
                    <span className="text-orange-600">#</span>04
                  </h1>
                  <h1 className=" md:text-xl text-[15p]">Creative Direction</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full bg-[#0d0d0d]">
          <Marquee />
        </div>
        <Page2 />
        <Page3 />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
