"use client";
import React from "react";
import CategoriesCart from "../Cart/CategoriesCart";

import Img1 from "../../Data/Img/Categories-1.png";
import Img2 from "../../Data/Img/Categories-2.png";

export default function Categories() {
  return (
    <div className="w-full flex justify-center items-center mt-[20px] md:mt-[50px]">
      <div className="Categories-Box">
        <p className="md:text-[35px] text-[25px]">Featured Categories</p>
        <p className="md:text-[20px] opacity-60">Get your desired product from featured category</p>

        <div className="flex">
            <CategoriesCart img={Img1} text="Personal Care" />
            <CategoriesCart img={Img2} text="Chocolate"/>
        </div>
      </div>
    </div>
  );
}
