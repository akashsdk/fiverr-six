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
  const originalPrice = parseFloat(price.replace("$", ""));
  const discount = parseFloat(discountPercentage);
  const newPrice = originalPrice - originalPrice * (discount / 100);

  return (
    <div className="p-4 rounded-2 border m-[10px] rounded-md hover:shadow-lg transition duration-300">
      <div className="relative">
        <div className="absolute z-10 h-[25px] w-[60px] bg-yellow-300 flex justify-center items-center">
          <p className="text-sm text-black font-bold">off {discountPercentage}% </p>
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

     <button className="h-[40px] w-full bg-green-700 text-white border-2 border-green-700 font-bold hover:text-green-700 hover:bg-white">
        Add Cart
     </button>
    </div>
  );
};

export default ProductCart;
