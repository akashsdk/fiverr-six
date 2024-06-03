import React from "react";
import Image from "next/image";

import Icon1 from "../../Data/Icon/delivery-man.png";
import Icon2 from "../../Data/Icon/return.png";
import Icon3 from "../../Data/Icon/100-dollar.png";
import Icon4 from "../../Data/Icon/shield.png";
import Icon5 from "../../Data/Icon/original.png";

export default function ShortIndex() {
  return (
    <div className="web-bg2 w-full flex justify-center items-center">
      <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center">
          <div className="h-[50px] flex justify-center items-center mb-2 sm:mb-0">
            <Image alt="Nationwide Delivery" src={Icon1} height={30} />
            <p className="ml-2 md:mr-2 sm:ml-4">Nationwide Delivery |</p>
          </div>

          <div className="h-[50px] flex justify-center items-center mb-2 sm:mb-0">
            <Image alt="Free & Easy Return" src={Icon2} height={30} />
            <p className="ml-2 md:mr-2 sm:ml-4">Free & Easy Return |</p>
          </div>

          <div className="h-[50px] flex justify-center items-center mb-2 sm:mb-0">
            <Image alt="Best Price Guaranteed" src={Icon3} height={30} />
            <p className="ml-2 md:mr-2 sm:ml-4">Best Price Guaranteed |</p>
          </div>

          <div className="h-[50px] flex justify-center items-center mb-2 sm:mb-0">
            <Image alt="Safe Payments" src={Icon4} height={30} />
            <p className="ml-2 md:mr-2 sm:ml-4">Safe Payments |</p>
          </div>

          <div className="h-[50px] flex justify-center items-center">
            <Image alt="100% Authentic Products" src={Icon5} height={30} />
            <p className="ml-2 md:mr-2 sm:ml-4">100% Authentic Products</p>
          </div>
        </div>
      </div>
    </div>
  );
}
