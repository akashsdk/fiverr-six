"use client";

import React, { useState, useEffect } from "react";
import ProductCart from "../Cart/ProductCart";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

export default function ReadyForOrder() {
  return (
    <div className="w-full flex justify-center items-center mt-[20px] md:mt-[50px]">
    <div className="w-11/12">
      <p className="md:text-[35px] text-[25px]">Ready for Order 🔥</p>

      <div className="NewArrivals-Box relative flex items-center justify-center">
        <LeftCircleOutlined
          className="md:text-[40px] text-[30px] absolute left-[-3%] z-10 opacity-50 hover:opacity-100 cursor-pointer"
          
        />

        <div className="w-full flex">
          {/* {displayedProducts.map((product, index) => (
            <ProductCart key={index} {...product} />
          ))} */}
        </div>

        <RightCircleOutlined
          className="md:text-[40px] text-[30px] absolute right-[-3%] z-10 opacity-50 hover:opacity-100 cursor-pointer"
          
        />
      </div>
    </div>
  </div>
  )
}
