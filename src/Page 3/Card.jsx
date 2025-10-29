import React, { useRef } from "react";
import LandingPage from "../LandingPage";
import PageHeading from "../components/PageHeading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Card = () => {
  const data = [
    {
      h1: "Let’s Work Together",
      h2: "Ready to Build a Brand That Feels Like You?",
      h3: "If you’re looking for thoughtful design and a collaborative process, I’d love to hear from you. Let’s create something that lasts.",
    },
  ];
  const cardRef = useRef();
  useGSAP(() => {
    gsap.from(cardRef.current, {
      y: 100,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: cardRef.current,
      },
    });
  });
  return (
    <div className="h-screen flex items-center overflow-hidden lg:py-10 lg:px-32 px-8  justify-center w-full bg-[#0d0c0c]">
      <div
        ref={cardRef}
        className="h-full  relative w-full w rounded-4xl"
      >
        <div className="overflow-hidden rounded-4xl h-full w-full">
          <img
            src="https://framerusercontent.com/images/FKIkQv4bbSWUets5AOyxmyq8CU.webp?scale-down-to=2048"
            alt=""
            className="object-cover h-full w-full opacity-65"
          />
        </div>
        <div className="absolute lg:bottom-[21%] bottom-[7%] px-12">
          <PageHeading data={data} showButton={false} />
        </div>
      </div>
    </div>
  );
};

export default Card;
