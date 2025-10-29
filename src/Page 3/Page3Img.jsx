import React from "react";

const Page3Img = () => {
  return (
    <section className="bg-[#0f0f0f] text-white md:p-10 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 1. Strategy First */}
        <div className="md:col-span-2 bg-gradient-to-r from-[#12131a] to-[#f36b2b33] rounded-2xl overflow-hidden relative">
          <img
            src="https://framerusercontent.com/images/1P4qFSTOGVmViBHTCBKx8ilI.png?scale-down-to=2048"
            alt="Smartwatch"
            className="w-full h-64 md:h-130 object-cover opacity-90"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
            <div className="h-[4px] bg-orange-500 w-full lg:mb-3 mb-2"></div>
            <h2 className="lg:text-3xl text-xl font-semibold">
              Strategy First
            </h2>
            <p className="lg:text-m text-sm text-gray-300">
              Every design decision is rooted in a clear brand strategy. No
              guesswork.
            </p>
          </div>
        </div>

        {/* 2. Design That Resonates */}
        <div className="bg-gradient-to-r from-[#12131a] to-[#f36b2b33] rounded-2xl overflow-hidden relative">
          <img
            src="https://framerusercontent.com/images/0d1CDuvxe6hZQNQi5IBSKmCisI.webp?scale-down-to=512"
            alt="Smartwatch"
            className="w-full h-64 md:h-130 object-cover opacity-90"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
            <div className="h-[4px] bg-orange-500 w-full lg:mb-3 mb-2"></div>
            <h2 className="lg:text-3xl text-xl font-semibold">
              Design That Resonates
            </h2>
            <p className="lg:text-m text-sm text-gray-300">
              Visuals that connect emotionally and communicate clearly.
            </p>
          </div>
        </div>

        {/* 3. Future-Proof Systems */}
        <div className="bg-gradient-to-r from-[#12131a] to-[#f36b2b33] rounded-2xl overflow-hidden relative">
          <img
            src="https://framerusercontent.com/images/imo5feZgjIu0xhIvhNpunyM6BWc.png?scale-down-to=1024"
            alt="Smartwatch"
            className="w-full h-64 md:h-130 object-cover opacity-90"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
            <div className="h-[4px] bg-orange-500 w-full lg:mb-3 mb-2"></div>
            <h2 className="lg:text-3xl text-xl font-semibold">
              Future-Proof Systems
            </h2>
            <p className="lg:text-m text-sm text-gray-300">
              Design that’s flexible, scalable, and easy to use.
            </p>
          </div>
        </div>

        {/* 4. Consistency Across Touchpoints */}
        <div className="md:col-span-2 bg-[#0e0e0e] rounded-2xl overflow-hidden relative">
          <img
            src="https://framerusercontent.com/images/c9bQrXGGanXaAH6XnZU2N16W5N0.webp?scale-down-to=2048"
            alt="Motocross"
            className="w-full h-64 md:h-130 object-cover opacity-90"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
            <div className="h-[4px] bg-orange-500 w-full mb-3"></div>
            <h2 className="lg:text-3xl text-xl font-semibold">
              Consistency Across Touchpoints
            </h2>
            <p className="text-m text-gray-300">
              From logo to social templates, I help you stay on-brand
              everywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page3Img;
