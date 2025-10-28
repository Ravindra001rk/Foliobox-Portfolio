import React, { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Page2 from "../Pages/Page2";
gsap.registerPlugin(ScrollTrigger);

const ImageBox = ({ src }) => {
  const ImageRef = useRef();

  useGSAP(()=>{
    gsap.from(ImageRef.current,{
      y:200,
      opacity:0,
      duration:1,
      stagger:2,
      scrollTrigger:{
        trigger:ImageRef.current,
        // start: "top 50%",
      }
    })
  })
  return (
    <div className="mt-1">
      <div className="flex">
        <div
          ref={ImageRef}
          className="md:h-130 h-100 md:w-130 w-100 rounded-4xl overflow-hidden bg-white"
        >
          <img
            src={src}
            alt="img"
            className="h-full w-full duration-1000 hover:scale-110 hover:grayscale-100"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
