"use client";
import React from "react";
import CategoriesCart from "../Cart/CategoriesCart";

import Img1 from "../../Data/Img/Categories-1.png";
import Img2 from "../../Data/Img/Categories-2.png";
import Img3 from "../../Data/Img/Categories-3.png";
import Img4 from "../../Data/Img/Categories-4.png";
import Img5 from "../../Data/Img/Categories-5.png";
import Img6 from "../../Data/Img/Categories-6.png";
import Img7 from "../../Data/Img/Categories-7.png";

export default function Categories() {
  return (
    <div className="w-full flex justify-center items-center mt-[20px] md:mt-[50px]">
      <div className="Categories-Box">
        <p className="md:text-[35px] text-[25px]">Featured Categories</p>
        <p className="md:text-[20px] opacity-60">Get your desired product from featured category</p>

        <div className="flex">
            <CategoriesCart img={Img1} text="Personal Care" />
            <CategoriesCart img={Img2} text="Chocolate"/>
            <CategoriesCart img={Img3} text="Silk Saree" />
            <CategoriesCart img={Img4} text="Poster"/>
            <CategoriesCart img={Img5} text="T-Shirts - Woman"/>
            <CategoriesCart img={Img6} text="T-Shirts - Men"/>
            <CategoriesCart img={Img7} text="Cotton Cap"/>
        </div>
      </div>
    </div>
  );
}
