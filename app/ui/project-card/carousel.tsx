import React, { useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { RxDotFilled } from "react-icons/rx";
import { Image } from "@nextui-org/image";

interface PropType {
  slides: string[];
}

export const Carousel: React.FC<PropType> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full h-auto m-auto relative">
      <Image 
        src={slides[currentIndex]}
        alt={slides[currentIndex]}
        className="w-full h-full rounded-2xl bg-top bg-no-repeat object-contain"
      />
      <div className="z-50 select-none absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30}/>
      </div>
      <div className="z-50 select-none absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30}/>
      </div>
      <div className="flex top-4 justify-center pt-4">
        {slides.map((_, index) => {
          return (
            <div 
              key={index}
              onClick={() => goToSlide(index)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          );
        })}
      </div>
    </div>
  )
}
