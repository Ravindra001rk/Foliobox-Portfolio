import React from "react";
import PageHeading from "../components/PageHeading";
import { WorkCards } from "./WorkCards";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const data = [
    {
      h1: "Recent Work",
      h2: "Latest Projects & Collaborations",
      h3: "A look at what I've been working on lately—designs, stories, and creative partnerships.",
    },
  ];

  useGSAP(() => {
    gsap.from(".work-card", {
      y: 200,
      duration: 1,
      stagger: 0.2, // adds delay between each animation
      opacity: 0,
      scrollTrigger: {
        trigger: ".work-cards-container",
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div>
      <div className="min-h-screen overflow-hidden w-full bg-[#0d0c0c] lg:py-30 lg:px-32 px-8">
        <PageHeading data={data} showButton={false} />
        <div className="mt-40 flex gap-6 flex-col-reverse lg:flex-col work-cards-container">
          {WorkCards.map((item, index) => {
            return (
              <div
                key={index}
                className="work-card hover:bg-[#302f2f7e]  w-full gap-4 bg-[#141414] p-13 rounded-4xl flex justify-between items-center"
              >
                <div>
                  <h1 className="text-orange-500  pb-3 font-semibold text-xl">
                    {item.Type}
                  </h1>
                  <h1 className="text-white pb-3 font-bold text-4xl">
                    {item.Brand}
                  </h1>
                  <h1 className="text-[#687575]">{item.Para}</h1>
                </div>
                <div>
                  <h1 className="text-white bg-[#313131] py-2 px-4 rounded-4xl font-bold">
                    {item.year}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Works;
