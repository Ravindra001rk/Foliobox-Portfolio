import React from "react";
import PageHeading from "../components/PageHeading";
import ImageBox from "../components/ImageBox";
import Page2Img from "../components/Page2Img";

const Page2 = () => {
  const data = [
    {
      h1: "Behind the Designs",
      h2: "Shaping Experiences That Make Life Simpler",
      h3: "I'm a product designer focused on building clean, intuitive interfaces that solve real-world problems.",
      h4: "Let’s Build Something Meaningful Together",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] md:pt-35 pt-18 md:px-35 px-10 lg:pb-40 pb-20">
      <PageHeading data={data} />
      <Page2Img />
      <div className=" mt-20 h-[4px] w-full bg-black/20 border-s-amber-50"></div>
    </div>
  );
};

export default Page2;
