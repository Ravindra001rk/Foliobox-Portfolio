import React, { useRef } from "react";
import Button from "./Button";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const PageHeading = ({ data, showButton = true }) => {
  const HeadRef = useRef();
  useGSAP(() => {
    gsap.from(HeadRef.current, {
      y: 50,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: HeadRef.current,
        start: "50% 100%",
        end: "top 100%",
      },
    });
  });
  const { h1, h2, h3, h4 } = data[0];
  return (
    <div ref={HeadRef}>
      <div className="grid md:grid-cols-2 items-center justify-between md:gap-17 gap-10">
        <div>
          <h2 className="text-[#ff5e00] font-font1 md:text-3xl text-2xl font-bold">
            {h1}
          </h2>
          <h1 className="text-white mt-7 font-bold tracking-tighter text-5xl md:text-6xl">
            {h2}
          </h1>
        </div>

        <div className="text-white grid md:grid-cols-1 gap-4">
          <h2 className="text-white md:mt-7 leading-[1.5]  font-semibold text-[3.8vw] md:text-3xl">
            {h3}
          </h2>
          <div
            className={`grid ${
              showButton ? "md:grid-cols-2" : ""
            } items-center`}
          >
            <p className="text-[#687575]">{h4}</p>
            {showButton && (
              <div className="md:w-max md:mt-0 mt-4">
                <Button text="Get in Touch" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeading;
