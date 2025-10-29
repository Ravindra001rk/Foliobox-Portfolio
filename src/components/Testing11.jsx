import React, { useState } from "react";

const HoverDisappear = () => {
  const [hoverStates, setHoverStates] = useState(new Array(5).fill(false));

  const handleMouseEnter = (index) => {
    setHoverStates((prev) => {
      const newStates = [...prev];
      newStates[index] = true;
      return newStates;
    });

    setTimeout(() => {
      setHoverStates((prev) => {
        const newStates = [...prev];
        newStates[index] = false;
        return newStates;
      });
    }, 300);
  };

  return (
    <div className="h-screen flex-col overflow-hidden gap-7 flex items-center justify-center bg-[#111]">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          className={`w-1/2 h-10 flex items-center justify-center text-white rounded-xl transition-all duration-500 ${
            hoverStates[index]
              ? "border-orange-500 border"
              : "border-orange-500"
          }`}
        >
         <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, veritatis.</h1>
        </div>
      ))}
    </div>
  );
};

export default HoverDisappear;
