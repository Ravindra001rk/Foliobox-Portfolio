import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ClckToTop = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button when page is scrolled up to given distance
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <div
          onClick={scrollToTop}
          className="fixed z-50 right-[2%] p-2 rounded-xl bottom-[5%] text-white text-xl cursor-pointer bg-orange-600 hover:bg-orange-700 transition-all duration-300"
        >
          <FaArrowUp />
        </div>
      )}
    </>
  );
};

export default ClckToTop;
