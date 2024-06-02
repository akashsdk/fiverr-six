"use client";

import React, { useState, useEffect } from "react";
import { Drawer, Space, Rate, notification, message } from "antd";
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
  status: string;
  sells: string;
  rating: number;
  code: string;
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
  status,
  sells,
  rating,
  code,
}) => {
  const originalPrice = parseFloat(price.replace("$", ""));
  const discount = parseFloat(discountPercentage);
  const newPrice = originalPrice - originalPrice * (discount / 100);

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<StaticImageData>(img);
  const images = [img, img2, img3];
  const [quantity, setQuantity] = useState(1);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleImageClick = (image: StaticImageData) => {
    setSelectedImage(image);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => (prevQuantity < 10 ? prevQuantity + 1 : 10));
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
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

  const totalPrice = newPrice * quantity;

  const [messageApi, contextHolderMessage] = message.useMessage();
  const [notificationApi, contextHolderNotification] =
    notification.useNotification();

  const handleAddToCart = () => {
    messageApi
      .open({
        type: "loading",
        content: "Adding to cart...",
        duration: 2.5,
      })
      .then(() => {
        onClose();
        notificationApi.success({
          message: "Success",
          description: "The product has been added to your cart.",
        });
      });
  };

  return (
    <div className="h-[320px] md:h-[400px] md:w-[280px] lg:w-[300px] p-4 rounded-2 border m-[10px] rounded-md md:hover:shadow-lg transition duration-300">
      {contextHolderMessage}
      {contextHolderNotification}
      <div className="relative">
        <div className="absolute z-10 h-[25px] w-[60px] bg-yellow-300 flex justify-center items-center">
          <p className="text-sm text-black font-bold">
            off {discountPercentage}%
          </p>
        </div>

        <Image
          src={img}
          alt={text}
          className="w-full h-[170px] md:h-[250px] transform transition-transform hover:scale-105"
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
        height={650}
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
        <div className="ProductCart-Drawer">
          <div className="ProductCart-Drawer-Box1">
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

          <div className="ProductCart-Drawer-Box2">
            <p className="text-[33px] mt-[30px] md:mt-[0px] text-green-700 font-medium">
              {text}
            </p>

            <div className="flex md:mt-[30px]">
              <p className="text-[18px]" style={{ opacity: ".6" }}>
                Category:
              </p>
              <p className="text-[18px] ml-[6px]">{type}</p>
            </div>

            <div className="flex">
              <p className="text-[18px]" style={{ opacity: ".6" }}>
                Discount Price:
              </p>
              <p className="text-[18px] ml-[6px] line-through">{price}</p>
              <p className="text-[18px] ml-[6px] text-red-500">${newPrice}</p>
            </div>

            <div className="flex">
              <p className="text-[18px]" style={{ opacity: ".6" }}>
                Product Code:
              </p>
              <p className="text-[18px] ml-[6px]">{code}</p>
            </div>

            <div className="flex">
              <p className="text-[18px]" style={{ opacity: ".6" }}>
                Status:
              </p>
              <p
                className={`text-[18px] ml-[6px] ${
                  status === "Out Stock" ? "text-red-500" : "text-green-700"
                }`}
              >
                {status}
              </p>
            </div>

            <div className="flex">
              <p className="text-[18px]" style={{ opacity: ".6" }}>
                Details:
              </p>
              <p className="text-[18px] ml-[6px]">{details}</p>
            </div>

            <div className="flex">
              <p className="text-[18px]" style={{ opacity: ".6" }}>
                Total Sells:
              </p>
              <p className="text-[18px] ml-[6px]">{sells}.</p>
            </div>

            <div className="flex items-center">
              <p className="text-[18px]" style={{ opacity: ".6" }}>
                Rating:
              </p>
              <Rate
                className="ml-2"
                value={rating}
                disabled
                allowHalf
                style={{ color: "#faad14" }}
              />
            </div>

            <div className=" w-[100px] mt-[30px] flex justify-evenly items-center border-2 border-green-700">
              <MinusOutlined
                className="text-[25px] cursor-pointer"
                onClick={handleDecrement}
              />
              <p className="text-[25px]">{quantity}</p>
              <PlusOutlined
                className="text-[25px] cursor-pointer"
                onClick={handleIncrement}
              />
            </div>

            <div className="flex items-center mt-[20px]">
              <p className="text-[18px]" style={{ opacity: ".6" }}>
                Total: ({quantity})
              </p>
              <p className="text-[18px] ml-[6px] text-green-700">
                ${totalPrice.toFixed(2)}
              </p>
            </div>

            {status === "Out Stock" ? (
              <div>
                <button
                  className="h-[40px] w-[200px] bg-gray-400 text-white border-2 border-gray-400 font-bold cursor-not-allowed mt-[20px]"
                  disabled
                >
                  Add to Cart
                </button>
                <p className="text-red-500 mt-[10px]">
                  This product is currently out of stock.
                </p>
              </div>
            ) : (
              <button
                className="h-[40px] w-[200px] bg-green-700 text-white border-2 border-green-700 font-bold hover:text-green-700 hover:bg-white mt-[20px]"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default ProductCart;
