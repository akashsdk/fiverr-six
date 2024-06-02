"use client";

import React, { useState, useEffect, useRef } from "react";
import Timer from "../components/Timer";

const calculateTimeLeft = (endTime: number) => {
  const now = new Date().getTime();
  const difference = endTime - now;

  if (difference > 0) {
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    return { hours, minutes, seconds };
  } else {
    return { hours: 0, minutes: 0, seconds: 0 };
  }
};

export default function FlashSale() {
  // Move the initialTime calculation outside the component
  const initialEndTime = new Date().getTime() + 12 * 60 * 60 * 1000 + 12 * 60 * 1000; // 12 hours, 12 minutes from now

  // Use a ref to store the endTime to ensure it remains stable
  const endTimeRef = useRef(initialEndTime);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endTimeRef.current));
  const [timerKey, setTimerKey] = useState(0); // Unique key to force re-render

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(endTimeRef.current);
      setTimeLeft(newTimeLeft);

      if (newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        clearInterval(timer); // Clear the interval
        endTimeRef.current = new Date().getTime() + 12 * 60 * 60 * 1000 + 12 * 60 * 1000; // Reset the endTime
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft(endTimeRef.current)); // Restart the timer
          setTimerKey((prevKey) => prevKey + 1); // Change the key to force re-render
        }, 1000);
      }
    }, 1000);

    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, [timerKey]);

  return (
    <div className="w-full flex justify-center items-center mt-[20px] md:mt-[50px]">
      <div className="w-11/12">
        <div className="flex justify-between items-center">
          <p className="md:text-[35px] text-[25px]">Flash Sale 😲</p>
          <p className="md:text-[35px] text-[25px]">
            <Timer 
            timeDay="1"
            timeHour="12"
            timeMinut="15"
            timeScend="00"
            />
          </p>
        </div>
        <div>Other Content Is here</div>
      </div>
    </div>
  );
}
