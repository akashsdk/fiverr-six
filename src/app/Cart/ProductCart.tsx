"use client";

import React, { useState, useEffect } from "react";
import { Drawer, Space } from "antd";
import Image, { StaticImageData } from "next/image";

import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

interface ProductCartProps {
  img: StaticImageData;
  img2: StaticImageData;
  img3: StaticImageData;
  type: string;
  text: string;
  price: string;
  discountPercentage: string;
  details: string;
}

const ProductCart: React.FC<ProductCartProps> = ({
  img,
  img2,
  img3,
  type,
  text,
  price,
  discountPercentage,
  details,
}) => {
  const originalPrice = parseFloat(price.replace("$", ""));
  const discount = parseFloat(discountPercentage);
  const newPrice = originalPrice - originalPrice * (discount / 100);

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<StaticImageData>(img);
  const images = [img, img2, img3];

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleImageClick = (image: StaticImageData) => {
    setSelectedImage(image);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="p-4 rounded-2 border m-[10px] rounded-md hover:shadow-lg transition duration-300">
      <div className="relative">
        <div className="absolute z-10 h-[25px] w-[60px] bg-yellow-300 flex justify-center items-center">
          <p className="text-sm text-black font-bold">
            off {discountPercentage}%
          </p>
        </div>

        <Image
          src={img}
          alt={text}
          className="w-full h-auto transform transition-transform hover:scale-105"
        />
      </div>
      <p className="text-lg font-bold mt-[10px]">{text}</p>

      <div className="flex items-center justify-start">
        <p className="text-md line-through text-red-500">{price}</p>
        <p className="ml-5 text-green-700 font-semibold leading-loose">
          ${newPrice.toFixed(2)}
        </p>
      </div>

      <button
        onClick={showDrawer}
        className="h-[40px] w-full bg-green-700 text-white border-2 border-green-700 font-bold hover:text-green-700 hover:bg-white mt-2"
      >
        Buy Now
      </button>

      <Drawer
        title={
          <div className="flex justify-between items-center">
            <p className="text-[20px] text-green-700">Product Details</p>
          </div>
        }
        placement="bottom"
        height={600}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <button
              className="h-[30px] w-[70px] bg-green-700 text-white border-2 border-green-700 rounded-[5px] hover:text-green-700 hover:bg-white"
              onClick={onClose}
            >
              Cancel
            </button>
          </Space>
        }
      >
        <div className="flex">
          <div className="w-[40%] flex-col justify-center items-center">
            <div className="w-full flex justify-center items-center">
              <Image
                className="h-[300px] w-[300px]"
                alt="Cart"
                src={selectedImage}
              />
            </div>

            <div className="w-full mt-[30px] flex items-center justify-evenly">
              <button
                className={`h-[90px] w-[90px] flex justify-center items-center border-2 ${
                  selectedImage === img ? "border-red-500" : "border-green-700"
                } rounded-[5px]`}
                onClick={() => handleImageClick(img)}
              >
                <Image
                  className="h-[70px] w-[70px] rounded-[5px]"
                  alt="Cart"
                  src={img}
                />
              </button>

              <button
                className={`h-[90px] w-[90px] flex justify-center items-center border-2 ${
                  selectedImage === img2 ? "border-red-500" : "border-green-700"
                } rounded-[5px]`}
                onClick={() => handleImageClick(img2)}
              >
                <Image
                  className="h-[70px] w-[70px] rounded-[5px]"
                  alt="Cart"
                  src={img2}
                />
              </button>

              <button
                className={`h-[90px] w-[90px] flex justify-center items-center border-2 ${
                  selectedImage === img3 ? "border-red-500" : "border-green-700"
                } rounded-[5px]`}
                onClick={() => handleImageClick(img3)}
              >
                <Image
                  className="h-[70px] w-[70px] rounded-[5px]"
                  alt="Cart"
                  src={img3}
                />
              </button>
            </div>
          </div>

          <div className="w-[60%]">
            <p className="text-[33px] text-green-700 font-medium">{text}</p>

            <div className="flex md:mt-[30px]">
              <p className="text-[18px]" style={{ opacity: ".6" }}>
                Category:
              </p>
              <p className="text-[18px] ml-[6px]">{type}</p>
            </div>

            <div className="flex">
              <p className="text-[18px]" style={{ opacity: ".6" }}>
                Details:
              </p>
              <p className="text-[18px] ml-[6px]">{details}</p>
            </div>

            <div className="flex">
              <p className="text-[18px]" style={{ opacity: ".6" }}>
                Old Price:
              </p>
              <p className="text-[18px] ml-[6px] line-through text-red-500">
                {price}
              </p>
            </div>

            <div className="flex">
              <p className="text-[18px]" style={{ opacity: ".6" }}>
                New Price:
              </p>
              <p className="text-[18px] ml-[6px] text-red-500">{newPrice}</p>
            </div>

            <div className=" w-[100px] mt-[30px] flex justify-evenly items-center border-2 border-green-700">
              <PlusOutlined className="text-[25px] cursor-pointer" />
              <p className="text-[25px]">1</p>
              <MinusOutlined className="text-[25px] cursor-pointer" />
            </div>

            <button className="h-[40px] w-[200px] bg-green-700 text-white border-2 border-green-700 font-bold hover:text-green-700 hover:bg-white mt-[20px]">
              Add to Cart
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default ProductCart;
