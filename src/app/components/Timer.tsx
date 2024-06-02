"use client";

import React, { useState, useEffect, useRef } from "react";

interface TimerProps {
  timeDay: number;
  timeHour: number;
  timeMinut: number;
  timeScend: number;
}

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

const Timer: React.FC<TimerProps> = ({
  timeDay,
  timeHour,
  timeMinut,
  timeScend,
}) => {
  const initialEndTime =
    new Date().getTime() +
    (timeDay * 24 * 60 * 60 + timeHour * 60 * 60 + timeMinut * 60 + timeScend) *
      1000;

  const endTimeRef = useRef(initialEndTime);
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(endTimeRef.current)
  );
  const [timerKey, setTimerKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(endTimeRef.current);
      setTimeLeft(newTimeLeft);

      if (
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        clearInterval(timer);
        endTimeRef.current =
          new Date().getTime() +
          (timeDay * 24 * 60 * 60 +
            timeHour * 60 * 60 +
            timeMinut * 60 +
            timeScend) *
            1000; 
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft(endTimeRef.current));
          setTimerKey((prevKey) => prevKey + 1);
        }, 1000);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timerKey, timeDay, timeHour, timeMinut, timeScend]);

  return (
    <div>
      {`${timeLeft.hours.toString().padStart(2, "0")}:${timeLeft.minutes
        .toString()
        .padStart(2, "0")}:${timeLeft.seconds.toString().padStart(2, "0")}`}
    </div>
  );
};

export default Timer;
