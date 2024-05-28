import React from "react";
import Navlink from "../components/Navlink";
import CustomSlider from "../components/CustomSlider";

import Img1 from "../../Data/Img/Product-1.png";
import Img2 from "../../Data/Img/Product-2.png";
import Img3 from "../../Data/Img/Product-3.png";
import Img4 from "../../Data/Img/Product-4.png";
import Img5 from "../../Data/Img/Product-5.png";
import Img6 from "../../Data/Img/Product-6.png";
import Img7 from "../../Data/Img/Product-7.png";

const slides = [
  { src: Img1, alt: "Product 1", details: "Product Details 1", percentage: 60 },
  { src: Img2, alt: "Product 2", details: "Product Details 2", percentage: 65 },
  { src: Img3, alt: "Product 3", details: "Product Details 3", percentage: 12 },
  { src: Img4, alt: "Product 4", details: "Product Details 4", percentage: 50 },
  { src: Img5, alt: "Product 5", details: "Product Details 5", percentage: 10 },
  { src: Img6, alt: "Product 6", details: "Product Details 6", percentage: 30 },
  { src: Img7, alt: "Product 7", details: "Product Details 7", percentage: 0 },
];

export default function Index() {
  return (
    <div className="Index-Body">
      <div className="w-full md:w-[50%]">
        <p
          className="text-[35px] md:text-[80px] mt-[30px] md:mt-[0px] font-bold text-red-500 ml-10"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Find your,
        </p>

        <p
          className="text-[35px] md:text-[80px] font-bold text-green-700 ml-10"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Best one!
        </p>
        <p className="md:text-[20px] text-[18px] ml-10 mt-[5vh] md:mt-[15vh] text-opacity-60">
          Step into style, comfort and confidence
          <br />- Discover the perfect pair today!🤗
        </p>

        <Navlink
          activeClasses="active-red"
          className="h-[40px] w-[180px] ml-10 mt-[20px] flex justify-center items-center  text-[20px] font-bold text-green-700 hover:text-white rounded-[5px] border-2 border-green-700 hover:bg-green-700"
          href="/shop"
          text="Shop Now"
        />
      </div>
      {/* right - side*/}
      <div className="w-full md:w-[50%] mt-[30px] md:mt-[0px] flex-col justify-center items-center">
        <CustomSlider slides={slides} />
      </div>
    </div>
  );
}
