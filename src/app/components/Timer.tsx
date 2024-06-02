"use client";

import React, { useState, useEffect } from "react";

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

const Timer = ({ endTime }: { endTime: number }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div>
      {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
    </div>
  );
};

export default Timer;
