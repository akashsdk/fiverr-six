"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

interface CategoriesCartProps {
  text: string;
  img: StaticImageData;
}

const CategoriesCart: React.FC<CategoriesCartProps> = ({ text, img }) => {
  return (
    <div className="h-[220px] w-[150px] flex flex-col justify-center items-center rounded-[5px] p-[5px] border-2 cursor-pointer md:hover:shadow-lg">
      <Image alt="cart" src={img} width={80} height={80} />
      <p className="text-center text-[18px] mt-2 opacity-90 text-green-700">
        {text}
      </p>
    </div>
  );
};

export default CategoriesCart;
