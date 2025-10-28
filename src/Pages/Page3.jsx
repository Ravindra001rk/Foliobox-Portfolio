import React from "react";
import PageHeading from "../components/PageHeading";
import Page3Img from "../Page 3/Page3Img";

const Page3 = () => {
  const data = [
    {
      h1: "Intentional. Collaborative. Built to Last.",
      h2: "How I Approach Every Project",
      h3: "I design with clarity and purpose—blending strategy and style to build brands that look great and work everywhere.",
    },
  ];
  return (
    <div className="min-h-screen bg-[#0d0d0d] md:pt-1 lg:px-35 px-10 pb-20 rounded-b-[8%]">
      <div>
        <PageHeading data={data} showButton={false} />
      </div>
      <div>
        <Page3Img/>
      </div>
    </div>
  );
};

export default Page3;
