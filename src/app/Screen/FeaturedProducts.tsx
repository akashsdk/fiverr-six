"use client";
import React from "react";

export default function FeaturedProducts() {
  return (
    <div className="w-full flex justify-center items-center mt-[20px] md:mt-[50px]">
      <div className="Categories-Box w-11/12">
        <p className="md:text-[35px] text-[25px] text-center">
          Featured Products
        </p>
        <div>
            <button>BEST DEALS</button>
            <button>BEST SELLERS</button>
        </div>
        
      </div>
    </div>
  );
}
