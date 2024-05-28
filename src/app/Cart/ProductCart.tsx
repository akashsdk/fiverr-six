import React from "react";
import Image, { StaticImageData } from "next/image";

interface ProductCartProps {
  img: StaticImageData;
  type: string;
  text: string;
  price: string;
  discountPercentage: string;
  details: string;
}

const ProductCart: React.FC<ProductCartProps> = ({
  img,
  type,
  text,
  price,
  discountPercentage,
  details,
}) => {
  return (
    <div className="p-4 border rounded-md">
      <Image src={img} alt={text} className="w-full h-auto" />
      <p className="text-lg font-bold">{type}</p>
      <p className="text-md">{text}</p>

      <div className="flex justify-center items-center">
        <p className="text-md line-through text-red-500">{price}</p>
        <p className="ml-5 text-green-700 font-semibold leading-loose">New price</p>
      </div>

      <p className="text-sm text-red-500">{discountPercentage}% off</p>
      <p className="text-sm">{details}</p>
    </div>
  );
};

export default ProductCart;
