"use client";
import React from "react";
import CategoriesCart from "../Cart/CategoriesCart";

import Img1 from "../../Data//Icon/SBC-Icon 1.png";
import Img2 from "../../Data/Icon/icon-2.png";
import Img3 from "../../Data/Icon/icon-3.png";
import Img4 from "../../Data/Icon/icon-4.png";
import Img5 from "../../Data/Icon/icon-5.png";
import Img6 from "../../Data/Icon/icon-6.png";
import Img7 from "../../Data/Icon/icon-7.png";
import Img8 from "../../Data/Icon/icon-8.png";
import Img9 from "../../Data/Icon/icon-9.png";
import Img10 from "../../Data/Icon/icon-10.png";
import Img11 from "../../Data/Icon/icon-11.png";
import Img12 from "../../Data/Icon/icon-12.png";
import Img13 from "../../Data/Icon/icon-13.png";

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
          <CategoriesCart img={Img1} text="Women's & Girls' Fashion" />
          <CategoriesCart img={Img2} text="Beauty" />
          <CategoriesCart img={Img3} text="Watches, Bags, Jewellery" />
          <CategoriesCart img={Img4} text="Health & Care" />
          <CategoriesCart img={Img5} text="Men's & Boys' Fashion" />
          <CategoriesCart img={Img6} text="Mother & Baby" />
          <CategoriesCart img={Img7} text="Electronics Device" />
          <CategoriesCart img={Img8} text="TV & Home Appliances" />
          <CategoriesCart img={Img9} text="Electronic Accessories" />
          <CategoriesCart img={Img10} text="Groceries & Pets" />
          <CategoriesCart img={Img11} text="Home & Lifestyle" />
          <CategoriesCart img={Img12} text="Sports & Outdoors" />
          <CategoriesCart img={Img13} text="Automotive & Motorbike" />
        </div>
      </div>
    </div>
  );
}
