"use client";
import Image from "next/image";
import React from "react";

import Img1 from "../../Data/Img/Poster-1.jpeg";
import Img2 from "../../Data/Img/Poster-2.png";

function Poster() {
  return (
    <div className="w-full flex justify-center items-center mt-[20px] md:mt-[50px]">
      <div className="w-11/12">
        <div className="md:flex">
          <Image
            alt=""
            src={Img1}
            className="h-[200px] md:h-[250px] w-full md:w-[48%] cursor-pointer"
          />
          <Image
            alt=""
            src={Img2}
            className="h-[200px] md:h-[250px] w-full md:w-[48%] mt-[20px] md:mt-0 md:ml-[4%] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Poster;
