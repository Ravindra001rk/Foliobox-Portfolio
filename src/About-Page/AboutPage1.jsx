import React from "react";
import PageHeading from "../components/PageHeading";

const AboutPage1 = () => {
  const data = [
    {
      h1: "Who I Am",
      h2: "Design with Purpose and Personality",
      h3: "Shaping meaningful brands through strategy, creativity, and collaboration.",
      h4: "I’m a brand designer with a passion for building visual identities that feel as good as they look. My approach blends strategy and creativity to help brands show up with clarity, confidence, and meaning. I believe that design is more than decoration—it's a tool for communication, connection, and growth",
    },
  ];
  return <div className=" w-full bg-[#141414] md:pt-35 pt-18 md:px-35 px-10 lg:pb-40 pb-20">
    <PageHeading data={data} showButton={false}/>
  </div>;
};

export default AboutPage1;
