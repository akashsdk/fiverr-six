"use client";
import React, { useState } from "react";
import ProductCart from "../Cart/ProductCart";

import Img1 from "../../Data/Img/Poster1.jpeg";
import Img2 from "../../Data/Img/Poster2.jpeg";
import Img3 from "../../Data/Img/Poster3.jpeg";

export default function FeaturedProducts() {
  const [page, setPage] = useState(1);
  const [fade, setFade] = useState(false);

  const handlePageChange = (newPage: number) => {
    setFade(true);
    setTimeout(() => {
      setPage(newPage);
      setFade(false);
    }, 500);
  };

  return (
    <div className="w-full flex justify-center items-center mt-[20px] md:mt-[50px]">
      <div className="Categories-Box w-11/12 text-center">
        <p className="md:text-[35px] text-[25px] text-center">
          Featured Products
        </p>
        <div className="flex justify-center my-4">
          <button
            onClick={() => handlePageChange(1)}
            className={`mx-2 px-4 py-2 relative transition-colors duration-500 ${
              page === 1 ? "text-red-500" : "text-gray-500"
            }`}
          >
            BEST DEALS
            {page === 1 && (
              <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-red-500 transition-all duration-500"></span>
            )}
          </button>
          <button
            onClick={() => handlePageChange(2)}
            className={`mx-2 px-4 py-2 relative transition-colors duration-500 ${
              page === 2 ? "text-red-500" : "text-gray-500"
            }`}
          >
            BEST SELLERS
            {page === 2 && (
              <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-red-500 transition-all duration-500"></span>
            )}
          </button>
        </div>

        <div
          className={`transition-opacity duration-500 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
          style={{ width: "100%" }}
        >
          {page === 1 ? (
            <div className="FeaturedProducts-Box1">
              <div className="FeaturedProducts-Box2">
                <div className="FeaturedProducts-Div">
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
                    text="Poster 2"
                    price="$23.50"
                    discountPercentage="2"
                    details="Product 1 "
                    status="Out Stock"
                    sells="20"
                    rating={3}
                    code="Pos-1"
                  />
                </div>
                <div className="FeaturedProducts-Div">
                  <ProductCart
                    img={Img1}
                    img2={Img2}
                    img3={Img3}
                    type="Poster"
                    text="Poster 3"
                    price="$23.50"
                    discountPercentage="2"
                    details="Product 1 "
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
                    text="Poster 4"
                    price="$23.50"
                    discountPercentage="2"
                    details="Product 1 Details P Product 1 Details"
                    status="In Stock"
                    sells="20"
                    rating={3}
                    code="Pos-1"
                  />
                </div>
              </div>
              <div className="flex">
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
                  details="Product 1 "
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
                  details="Product 1 "
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
              </div>
            </div>
          ) : page === 2 ? (
            <div>
              <p> page 2</p>
            </div>
          ) : (
            <h1>Error page</h1>
          )}
        </div>
      </div>
    </div>
  );
}
