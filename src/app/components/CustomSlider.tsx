import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

interface Slide {
  src: StaticImageData;
  alt: string;
  details: string;
}

interface CustomSliderProps {
  slides: Slide[];
  autoPlayInterval?: number;
}

const CustomSlider: React.FC<CustomSliderProps> = ({ slides, autoPlayInterval = 6000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [slides.length, autoPlayInterval]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <p className="text-[35px] font-bold text-red-500">Up to 60% off 😯</p>
      <div className="relative h-[300px] w-full flex justify-center items-center mt-4">
        <Image
          alt={slides[currentSlide].alt}
          src={slides[currentSlide].src}
          className="hover:scale-105 transition-transform duration-300"
        />
      </div>
      <p className="text-[20px] mt-4">{slides[currentSlide].details}</p>
      <div className="flex mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-[12px] w-[12px] bg-green-700 rounded-[50%] cursor-pointer mr-[5px] ${
              index === currentSlide ? "scale-125" : ""
            } transition-transform duration-200`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
