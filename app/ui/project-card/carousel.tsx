import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Image } from "@nextui-org/image";

interface PropType {
  slides: string[];
}

export const ProjectCarousel: React.FC<PropType> = ({ slides }) => {
  return (
    <Carousel className="w-full md:max-w-screen-md relative">
      <CarouselContent>
        {slides.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Image 
                src={item}
                alt={`${item}-${index}`}
                key={index}
                className="text-2xl cursor-pointer"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
