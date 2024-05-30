"use client";
import React from "react";
import CategoriesCart from "../Cart/CategoriesCart";

export default function Categories() {
  return (
    <div className="w-full flex justify-center items-center mt-[20px] md:mt-[50px]">
      <div className="Categories-Box">
        <p className="md:text-[35px] text-[25px]">Featured Categories</p>
        <p className="md:text-[20px] opacity-60">Get your desired product from featured category</p>

        <div>
            <CategoriesCart />
        </div>
      </div>
    </div>
  );
}
