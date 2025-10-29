import React from "react";
import ImageBox from "./ImageBox";

const Page2Img = () => {
  return (
    <div className="mt-40">
      <div className="grid gap-5 md:grid-cols-3 grid-cols-1 flex-wrap content-center">
        <ImageBox
          src={
            "https://framerusercontent.com/images/m8TLrvbthZj392tf0fc3oPWPdZM.png?scale-down-to=2048"
          }
        />
        <ImageBox
          src={
            "https://framerusercontent.com/images/JEq0RKaEAd63bBZdjzTcG0LZaM.png"
          }
        />
        <ImageBox
          src={
            "https://framerusercontent.com/images/dAio0KHRY7lHrZi8wg3eNt62sQk.png?scale-down-to=512"
          }
        />
      </div>
    </div>
  );
};

export default Page2Img;
