"use client";

import React, { useState, useEffect } from "react";
import Timer from "../components/Timer";
import ProductCart from "../Cart/ProductCart";

import Img1 from "../../Data/Img/Product-2.png";
import Img2 from "../../Data/Img/Product-3.png";
import Img3 from "../../Data/Img/Product-4.png";

// Timer
const calculateInitialEndTime = () => {
  const storedEndTime = localStorage.getItem("flashSaleEndTime");
  if (storedEndTime) {
    return parseInt(storedEndTime, 10);
  } else {
    const newEndTime =
      new Date().getTime() + 23 * 60 * 60 * 1000 + 12 * 60 * 1000; // 12 hours, 12 minutes from now
    localStorage.setItem("flashSaleEndTime", newEndTime.toString());
    return newEndTime;
  }
};

export default function FlashSale() {
  const [initialEndTime, setInitialEndTime] = useState<number | null>(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    setInitialEndTime(calculateInitialEndTime());
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (initialEndTime && new Date().getTime() >= initialEndTime) {
        const newEndTime =
          new Date().getTime() + 23 * 60 * 60 * 1000 + 12 * 60 * 1000;
        localStorage.setItem("flashSaleEndTime", newEndTime.toString());
        setInitialEndTime(newEndTime);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [initialEndTime]);

  if (initialEndTime === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full flex justify-center items-center mt-[20px] md:mt-[50px]">
      <div className="w-11/12">
        <div className="flex justify-between items-center">
          <p className="md:text-[35px] text-[25px]">Flash Sale 😲</p>
          <p className="md:text-[25px] text-[20px] text-red-500">
            <Timer endTime={initialEndTime} />
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ProductCart
            img={Img1}
            img2={Img2}
            img3={Img3}
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
            img={Img1}
            img2={Img2}
            img3={Img3}
            type="Poster"
            text="Poster 1"
            price="$23.50"
            discountPercentage="2"
            details="Product 1"
            status="Out Stock"
            sells="20"
            rating={3}
            code="Pos-1"
          />
          <ProductCart
            img={Img1}
            img2={Img2}
            img3={Img3}
            type="Poster"
            text="Poster 1"
            price="$23.50"
            discountPercentage="2"
            details="Product 1"
            status="Out Stock"
            sells="20"
            rating={3}
            code="Pos-1"
          />
          <ProductCart
            img={Img1}
            img2={Img2}
            img3={Img3}
            type="Poster"
            text="Poster 1"
            price="$23.50"
            discountPercentage="2"
            details="Product 1 Details P Product 1 Details"
            status="In Stock"
            sells="20"
            rating={3}
            code="Pos-1"
          />
          {showMore && (
            <>
              <ProductCart
                img={Img1}
                img2={Img2}
                img3={Img3}
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
                img={Img1}
                img2={Img2}
                img3={Img3}
                type="Poster"
                text="Poster 1"
                price="$23.50"
                discountPercentage="2"
                details="Product 1"
                status="Out Stock"
                sells="20"
                rating={3}
                code="Pos-1"
              />
              <ProductCart
                img={Img1}
                img2={Img2}
                img3={Img3}
                type="Poster"
                text="Poster 1"
                price="$23.50"
                discountPercentage="2"
                details="Product 1"
                status="Out Stock"
                sells="20"
                rating={3}
                code="Pos-1"
              />
              <ProductCart
                img={Img1}
                img2={Img2}
                img3={Img3}
                type="Poster"
                text="Poster 1"
                price="$23.50"
                discountPercentage="2"
                details="Product 1 Details P Product 1 Details"
                status="In Stock"
                sells="20"
                rating={3}
                code="Pos-1"
              />
            </>
          )}
        </div>
        <div className="w-full flex justify-end mt-4">
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-red-500 border-none"
          >
            {showMore ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
}
