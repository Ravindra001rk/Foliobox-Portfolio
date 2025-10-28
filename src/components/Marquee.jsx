import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const Marquee = () => {
  const marqueeRef = useRef(null);

  useLayoutEffect(() => {
    const marquee = marqueeRef.current;

    const content = marquee.innerHTML;
    marquee.innerHTML += content;

    gsap.to(marquee, {
      xPercent: -50,
      repeat: -1,
      ease: "none",
      duration: 50,
    });
  }, []);

  return (

    <div className="overflow-hidden bg-[#141414] py-20 rounded-b-[12%]">
  <div
    ref={marqueeRef}
    className="flex gap-16  whitespace-nowrap w-max text-white">
    <img
      className="h-10" 
      src="https://framerusercontent.com/images/bzgGV9K5z80arAe2nvCcgqIE.png?scale-down-to=512"
      alt=""
    />
    <img
      className="h-10"
      src="https://framerusercontent.com/images/G52KkFH9TuCGO82TP1znRqIFiA.png?scale-down-to=512"
      alt=""
    />
    <img
      className="h-10"
      src="https://framerusercontent.com/images/LOorVZN8bgtC7Jiz0QnoigSGXXE.png?scale-down-to=512"
      alt=""
    />
    <img
      className="h-10"
      src="https://framerusercontent.com/images/jVhOtd9Pewely28YsU8yFHWyc.png?scale-down-to=512"
      alt=""
    />
    <img
      className="h-10"
      src="https://framerusercontent.com/images/Ldz8Lo702oafR9DUzr1LYYRMIM.png?scale-down-to=512"
      alt=""
    />
  </div>
</div>

  );
};

export default Marquee;
