"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

import IMG1 from "../../Data/Icon/SBC-Icon 1.png";
import IMG2 from "../../Data/Img/Product-2.png";
import IMG3 from "../../Data/Img/Product-1.png";
import IMG4 from "../../Data/Img/Product-3.png";
import IMG5 from "../../Data/Img/Product-4.png";
import IMG6 from "../../Data/Img/Product-5.png";
import IMG7 from "../../Data/Img/Product-6.png";
import IMG8 from "../../Data/Img/Product-7.png";

interface SBCcomponentProps {
  img: StaticImageData;
  text: string;
}

const SBCcomponent: React.FC<SBCcomponentProps> = ({ img, text }) => {
  return (
    <button className="h-[150px] w-[100px] flex-col justify-center items-center m-2 rounded-[10px] border-2 border-black border-opacity-30 hover:border-opacity-100 transition-all duration-300">
      <div className="h-[100px] w-full flex justify-center items-center">
        <Image alt="cart" src={img} height={60} />
      </div>
      <p className="text-center text-green-700">{text}</p>
    </button>
  );
};

export default function ShopByCategories() {
  return (
    <div className="w-full flex justify-center items-center mt-[20px] md:mt-[50px]">
      <div className="w-11/12">
        <p className="md:text-[35px] text-[25px] text-center">
          Shop By Categories
        </p>

        <div className="w-full flex flex-wrap justify-center md:justify-between items-center">
          <SBCcomponent img={IMG1} text="Woman's" />
          <SBCcomponent img={IMG2} text="Beauty" />
          <SBCcomponent img={IMG3} text="Product 1" />
          <SBCcomponent img={IMG4} text="Product 2" />
          <SBCcomponent img={IMG5} text="Product 3" />
          <SBCcomponent img={IMG6} text="Product 4" />
          <SBCcomponent img={IMG7} text="Product 5" />
          <SBCcomponent img={IMG8} text="Product 6" />
        </div>
      </div>
    </div>
  );
}
