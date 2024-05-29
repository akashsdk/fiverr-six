import React from "react";
import ProductCart from "../Cart/ProductCart";

import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

import Img1 from "../../Data/Img/Poster1.jpeg";
import Img2 from "../../Data/Img/Poster2.jpeg";
import Img3 from "../../Data/Img/Poster3.jpeg";
import Img4 from "../../Data/Img/Poster4.jpeg";
import Img7 from "../../Data/Img/Poster5.jpeg";
import Img8 from "../../Data/Img/Poster6.jpeg";
import Img9 from "../../Data/Img/Poster7.jpeg";

import Img5 from "../../Data/Img/Product-1.png";
import Img6 from "../../Data/Img/Product-2.png";

export default function NewArrivals() {
  return (
    <div className="w-full flex justify-center items-center mt-[20px] md:mt-[50px]">
      <div className="w-11/12">
        <p className="text-[35px]">New Arrivals😍</p>

        <div className="NewArrivals-Box">
          <div>
            <LeftCircleOutlined className="text-[40px] absolute z-10 ml-[-3%] opacity-50 hover:opacity-100 cursor-pointer" />
          </div>

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

          <ProductCart
            img={Img7}
            img2={Img5}
            img3={Img6}
            type="Poster"
            text="Poster 5"
            price="$44.50"
            discountPercentage="12"
            details="Product 5 Details"
            status="In Stock"
            sells="50"
            rating={2}
            code="Pos-5"
          />

          <ProductCart
            img={Img8}
            img2={Img5}
            img3={Img6}
            type="Poster"
            text="Poster 6"
            price="$34.50"
            discountPercentage="72"
            details="Product 6 Details"
            status="Out Stock"
            sells="5"
            rating={5}
            code="Pos-6"
          />

          <ProductCart
            img={Img9}
            img2={Img5}
            img3={Img6}
            type="Poster"
            text="Poster 7"
            price="$300"
            discountPercentage="100"
            details="Product 4 Details"
            status="Out Stock"
            sells="1"
            rating={5}
            code="Pos-7"
          />

          <div>
            <RightCircleOutlined className="text-[40px] absolute z-10  opacity-50 hover:opacity-100 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
