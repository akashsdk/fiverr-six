import React from "react";
import ProductCart from "../Cart/ProductCart";

import Img1 from "../../Data/Img/Poster1.jpeg";
import Img2 from "../../Data/Img/Poster2.jpeg";
import Img3 from "../../Data/Img/Poster3.jpeg";
import Img4 from "../../Data/Img/Poster4.jpeg";

import Img5 from "../../Data/Img/Product-1.png";
import Img6 from "../../Data/Img/Product-2.png";

export default function NewArrivals() {
  return (
    <div className="w-full flex justify-center items-center mt-[20px] md:mt-[50px]">
      <div className="w-11/12">
        <p className="text-[35px]">New Arrivals😍</p>

        <div className="NewArrivals-Box">
          <ProductCart
            img={Img1}
            img2={Img5}
            img3={Img6}
            type="Poster"
            text="Poster 1"
            price="$23.50"
            discountPercentage="2"
            details="Product 1 Details Product 1 Details Product 1 Details Product 1 Details Product 1 Details Product 1 Details"
            status="Out Stock"
            sells="20"
            rating={3}
            code="Pos-1"
          />

          <ProductCart
            img={Img2}
            img2={Img5}
            img3={Img6}
            type="Poster"
            text="Poster 2"
            price="$20.00"
            discountPercentage="25"
            details="Product 2 Details"
            status="In Stock"
            sells="0"
            rating={0}
            code="Pos-2"
          />

          <ProductCart
            img={Img3}
            img2={Img5}
            img3={Img6}
            type="Poster"
            text="Poster 3"
            price="$100.00"
            discountPercentage="10"
            details="Product 3 Details"
            status="In Stock"
            sells="10"
            rating={4}
            code="Pos-3"
          />

          <ProductCart
            img={Img4}
            img2={Img5}
            img3={Img6}
            type="Poster"
            text="Poster 4"
            price="$34.50"
            discountPercentage="12"
            details="Product 4 Details"
            status="In Stock"
            sells="50"
            rating={2}
            code="Pos-4"
          />
        </div>
      </div>
    </div>
  );
}
