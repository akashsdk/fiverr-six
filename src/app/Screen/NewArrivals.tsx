"use client";

import React, { useState, useEffect } from "react";
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

const NewArrivals = () => {
  const products = [
    {
      img: Img1,
      img2: Img5,
      img3: Img6,
      type: "Poster",
      text: "Poster 1",
      price: "$23.50",
      discountPercentage: "2",
      details: "Product 1 Details Product 1 Details Product 1 Details Product 1 Details Product 1 Details Product 1 Details",
      status: "Out Stock",
      sells: "20",
      rating: 3,
      code: "Pos-1",
    },
    {
      img: Img2,
      img2: Img5,
      img3: Img6,
      type: "Poster",
      text: "Poster 2",
      price: "$20.00",
      discountPercentage: "25",
      details: "Product 2 Details",
      status: "In Stock",
      sells: "0",
      rating: 0,
      code: "Pos-2",
    },
    {
      img: Img3,
      img2: Img5,
      img3: Img6,
      type: "Poster",
      text: "Poster 3",
      price: "$100.00",
      discountPercentage: "10",
      details: "Product 3 Details",
      status: "In Stock",
      sells: "10",
      rating: 4,
      code: "Pos-3",
    },
    {
      img: Img4,
      img2: Img5,
      img3: Img6,
      type: "Poster",
      text: "Poster 4",
      price: "$34.50",
      discountPercentage: "12",
      details: "Product 4 Details",
      status: "In Stock",
      sells: "50",
      rating: 2,
      code: "Pos-4",
    },
    {
      img: Img7,
      img2: Img5,
      img3: Img6,
      type: "Poster",
      text: "Poster 5",
      price: "$44.50",
      discountPercentage: "12",
      details: "Product 5 Details",
      status: "In Stock",
      sells: "50",
      rating: 2,
      code: "Pos-5",
    },
    {
      img: Img8,
      img2: Img5,
      img3: Img6,
      type: "Poster",
      text: "Poster 6",
      price: "$34.50",
      discountPercentage: "72",
      details: "Product 6 Details",
      status: "Out Stock",
      sells: "5",
      rating: 5,
      code: "Pos-6",
    },
    {
      img: Img9,
      img2: Img5,
      img3: Img6,
      type: "Poster",
      text: "Poster 7",
      price: "$300",
      discountPercentage: "91",
      details: "Product 4 Details",
      status: "Out Stock",
      sells: "1",
      rating: 5,
      code: "Pos-7",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(2);
      } else {
        setItemsToShow(4);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - itemsToShow + products.length) % products.length);
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + itemsToShow) % products.length);
  };

  const displayedProducts = products.slice(activeIndex, activeIndex + itemsToShow).concat(
    products.slice(0, Math.max(0, (activeIndex + itemsToShow) - products.length))
  );

  return (
    <div className="w-full flex justify-center items-center mt-[20px] md:mt-[50px]">
      <div className="w-11/12">
        <p className="md:text-[35px] text-[25px]">New Arrivals😍</p>

        <div className="NewArrivals-Box relative flex items-center justify-center">
          <LeftCircleOutlined
            className="md:text-[40px] text-[30px] absolute left-[-3%] z-10 opacity-50 hover:opacity-100 cursor-pointer"
            onClick={prevSlide}
          />

          <div className="w-full flex">
            {displayedProducts.map((product, index) => (
              <ProductCart key={index} {...product} />
            ))}
          </div>

          <RightCircleOutlined
            className="md:text-[40px] text-[30px] absolute right-[-3%] z-10 opacity-50 hover:opacity-100 cursor-pointer"
            onClick={nextSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
