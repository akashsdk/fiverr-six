"use client";

import React from "react";
import Timer from "../components/Timer";

export default function FlashSale() {
  return (
    <div className="w-full flex justify-center items-center mt-[20px] md:mt-[50px]">
      <div className="w-11/12">
        <div className="flex justify-between items-center">
          <p className="md:text-[35px] text-[25px]">Flash Sale 😲</p>
          <p className="md:text-[35px] text-[25px]">
            <Timer 
              timeDay={1}
              timeHour={12}
              timeMinut={15}
              timeScend={0}
            />
          </p>
        </div>
        <div>Other Content Is here</div>
      </div>
    </div>
  );
}
