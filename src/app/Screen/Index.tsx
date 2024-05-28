import React from "react";
import Navlink from "../components/Navlink";

export default function Index() {
  return (
    <div className="Index-Body">
      <div className="w-[50%]">
        <p
          className="text-[80px] font-bold text-red-500 ml-10"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Find your,
        </p>

        <p
          className="text-[80px] font-bold text-green-700 ml-10"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Bast one!
        </p>
        <p className="text-[20px] ml-10 mt-[15vh] text-opacity-60">
          Step into style, comfort and confidence
          <br />- Discover the perfect pair today!
        </p>

        <Navlink
                activeClasses="active-red"
                className="h-[40px] w-[180px] ml-10 mt-[20px] flex justify-center items-center  text-[20px] font-bold text-green-700 hover:text-white rounded-[5px] border-2 border-green-700 hover:bg-green-700"
                href="/shop"
                text="Shop Now"
              />
      </div>
      <div className="w-[50%]">Right</div>
    </div>
  );
}
