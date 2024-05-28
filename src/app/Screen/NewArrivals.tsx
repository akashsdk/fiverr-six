import React from "react";
import ProductCart from "../Cart/ProductCart";

import Img1 from "../../Data/Img/Poster1.jpeg";
import Img2 from "../../Data/Img/Poster2.jpeg";
import Img3 from "../../Data/Img/Poster3.jpeg";
import Img4 from "../../Data/Img/Poster4.jpeg";

export default function NewArrivals() {
  return (
    <div className="w-full flex justify-center items-center mt-[20px] md:mt-[50px]">
      <div className="w-11/12">
        <p className="text-[35px]">New Arrivals😍</p>

        <div className="w-full flex items-center justify-between">
          <ProductCart
            img={Img1}
            type="Poster"
            text="Poster 1"
            price="$23.50"
            discountPercentage="2"
            details="Product 1 Details"
          />

          <ProductCart
            img={Img2}
            type="Poster"
            text="Poster 2"
            price="$20.00"
            discountPercentage="2.5"
            details="Product 2 Details"
          />

          <ProductCart
            img={Img3}
            type="Poster"
            text="Poster 3"
            price="$13.00"
            discountPercentage="20"
            details="Product 3 Details"
          />

          <ProductCart
            img={Img4}
            type="Poster"
            text="Poster 4"
            price="$34.50"
            discountPercentage="12"
            details="Product 4 Details"
          />
        </div>
      </div>
    </div>
  );
}
