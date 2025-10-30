import React, { useState, useRef, useEffect } from "react";

const Faq = () => {
  const faqs = [
    "How long does a brand identity project take?",
    "Do you offer payment plans?",
    "Can you also design my website?",
    "Do you work with international clients?",
    "What do I need to get started?",
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const hoverTimeout = useRef(null);

  useEffect(() => {
    return () => {
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    };
  }, []);

  return (
    <section className="bg-[#0c0d0c] rounded-b-[8%]  text-white py-20 px-4 md:px-8 ">
      <div className="container  pt-20 mx-auto flex flex-col lg:flex-row items-start justify-between gap-12">
        <div className="flex-1 space-y-6">
          <p className="text-orange-500 font-semibold text-sm sm:text-base">
            Frequently Asked Questions
          </p>
          <h2 className="font-bold leading-tight text-[clamp(1.8rem,4vw,3rem)]">
            Answers to Common Questions
          </h2>
          <p className="text-gray-400 text-[clamp(0.9rem,1.2vw,1.1rem)] max-w-md">
            From timelines to process details, here are quick answers to the
            most frequent questions I get.
          </p>
        </div>

        <div className="flex-1 w-full space-y-4 ">
          {faqs.map((question, i) => (
            <div
              className="flex items-center justify-between  border px-5 py-4 rounded-2xl cursor-pointer transition-all duration-300 transform 
               bg-[#232323] shadow-lg hover:border hover:border-orange-600" 
            >
              <span className="text-lg sm:text-xl">{question}</span>
              <span
                className={`text-gray-400 text-2xl transition-transform duration-200 ${
                  activeIndex === i ? "rotate-45 text-amber-300" : ""
                }`}
              >
                +
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
