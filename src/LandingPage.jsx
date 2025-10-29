import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const imgRef = useRef(null);

  useGSAP(() => {
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
            start: "100% 80%",
            // end: "170% 110%",
            scrub: true,
          },
        });
      },
    });
  });

  return (
    <div>
      <div className="bg-[#141414]">
        <div className="relative h-[80vh] w-full bg-black rounded-b-[8%] overflow-hidden">
          <img
            ref={imgRef}
            className="img opacity-80 object-cover h-full w-full rounded-b-[8%]"
            src="https://framerusercontent.com/images/E7mJxCh6LSDcubBZGfPuhE.webp?scale-down-to=2048"
            alt=""
          />
          <div className="absolute top-[35%] md:top-[6%] left-0 w-full h-full  md:px-35 px-10 text-white">
            <div className="flex flex-col md:justify-end w-full h-full ">
              <div className="flex mb-5 flex-col md:flex-row md:justify-between md:mt-[12%] mt-[45%] md:mb-35 md:items-center ">
                <div>
                  <h1 className="md:text-4xl font-semibold text-2xl text-orange-600">
                    Brand Designer
                  </h1>
                  <h1 className="md:text-9xl text-7xl mt-5 font-extrabold">
                    About
                  </h1>
                </div>
                <div>
                  <h1 className="md:text-4xl  font-semibold md:font-semibold">
                    The Person Behind the Work
                  </h1>
                  <p className="md:text-m text-[15px] md:mt-5 mt-8 text-gray-300 md:font-semibold">
                    Design rooted in strategy, driven by purpose.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
