import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
const Button = ({text}) => {
  return (
    <div className="flex font-semibold cursor-pointer bg-white text-black  items-center gap-2 rounded-3xl py-2 px-4 relative justify-center md:justify-start">
      <button className="cursor-pointer">{text}</button>
      <div className="bg-orange-500 rounded-[50%] p-2 text-white ">
        <FaLongArrowAltRight />
      </div>
    </div>
  );
};

export default Button;
