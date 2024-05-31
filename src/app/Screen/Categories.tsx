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
      <div className="Categories-Box w-11/12">
        <p className="md:text-[35px] text-[25px] text-center">
          Featured Categories
        </p>
        <p className="md:text-[20px] text-[16px] opacity-60 text-center mb-4">
          Get your desired product from featured category
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 justify-items-center">
          <CategoriesCart img={Img1} text="Personal Care" />
          <CategoriesCart img={Img2} text="Chocolate" />
          <CategoriesCart img={Img3} text="Silk Saree" />
          <CategoriesCart img={Img4} text="Poster" />
          <CategoriesCart img={Img5} text="T-Shirts - Woman" />
          <CategoriesCart img={Img6} text="T-Shirts - Men" />
          <CategoriesCart img={Img7} text="Cotton Cap" />

          <CategoriesCart img={Img1} text="Personal Care 2" />
          <CategoriesCart img={Img2} text="Chocolate 2" />
          <CategoriesCart img={Img3} text="Silk Saree 2" />
          <CategoriesCart img={Img4} text="Poster 2" />
          <CategoriesCart img={Img5} text="T-Shirts - Woman 2" />
          <CategoriesCart img={Img6} text="T-Shirts - Men 2" />
          <CategoriesCart img={Img7} text="Cotton Cap 2" />
        </div>
      </div>
    </div>
  );
}
