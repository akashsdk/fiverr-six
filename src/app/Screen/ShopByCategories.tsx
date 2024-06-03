"use client";

import React from 'react';
import Image, { StaticImageData } from 'next/image'; 

import IMG1 from "../../Data/Icon/SBC-Icon 1.png";
import IMG2 from "../../Data/Img/Product-2.png";

interface SBCcomponentProps {
  img: StaticImageData; 
  text: string;
}

const SBCcomponent: React.FC<SBCcomponentProps> = ({ img, text }) => {
  return (
    <div className="text-center m-4">
      <Image alt="cart" src={img} className="w-full h-auto" />
      <p>{text}</p>
    </div>
  );
};

export default function ShopByCategories() {
  return (
    <div className="w-full flex justify-center items-center mt-[20px] md:mt-[50px]">
      <div className="w-11/12">
        <p className="md:text-[35px] text-[25px] text-center">Shop By Categories</p>

        <div className='flex justify-center items-center'>
          <SBCcomponent img={IMG1} text="Woman's & Girl's Fashion" />
          <SBCcomponent img={IMG2} text="Health & Beauty" />
          <SBCcomponent img={IMG2} text="" />
          <SBCcomponent img={IMG2} text="" />
          <SBCcomponent img={IMG2} text="" />
          <SBCcomponent img={IMG2} text="Health & Beauty" />
          <SBCcomponent img={IMG2} text="Health & Beauty" />
          <SBCcomponent img={IMG2} text="Health & Beauty" />
        </div>
      </div>
    </div>
  );
}
