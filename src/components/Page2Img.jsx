import React from "react";
import ImageBox from "./ImageBox";

const Page2Img = () => {
  return (
    <div className="mt-40">
      <div className="grid gap-5 md:grid-cols-3 grid-cols-1 flex-wrap content-center">
        <ImageBox
          src={
            "https://framerusercontent.com/images/hQ6XzXBgqVuEI8ZXtTLutVTQI.png?scale-down-to=1024"
          }
        />
        <ImageBox
          src={
            "https://framerusercontent.com/images/PdVnZymDIiku8ywz3BUxAbly3U.png?scale-down-to=1024"
          }
        />
        <ImageBox
          src={
            "https://framerusercontent.com/images/r85m7an5rDej3aRCBBRPmMZP9k.png?scale-down-to=1024"
          }
        />
      </div>
    </div>
  );
};

export default Page2Img;
