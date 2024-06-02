"use client";

import React, { useState, useEffect } from "react";
import Timer from "../components/Timer";

const calculateInitialEndTime = () => {
  const storedEndTime = localStorage.getItem("flashSaleEndTime");
  if (storedEndTime) {
    return parseInt(storedEndTime, 10);
  } else {
    const newEndTime = new Date().getTime() + 23 * 60 * 60 * 1000 + 12 * 60 * 1000; // 12 hours, 12 minutes from now
    localStorage.setItem("flashSaleEndTime", newEndTime.toString());
    return newEndTime;
  }
};

export default function FlashSale() {
  const [initialEndTime, setInitialEndTime] = useState<number | null>(null);

  useEffect(() => {
    setInitialEndTime(calculateInitialEndTime());
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (initialEndTime && new Date().getTime() >= initialEndTime) {
        const newEndTime = new Date().getTime() + 23 * 60 * 60 * 1000 + 12 * 60 * 1000;
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
        <div>Other Content Is here</div>
      </div>
    </div>
  );
}
