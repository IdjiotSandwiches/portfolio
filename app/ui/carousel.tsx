import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { useDotButton } from './carousel-dot-buttons'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './carousel-arrow-buttons'
import useEmblaCarousel from 'embla-carousel-react'
import { Image } from '@nextui-org/react'

interface ImageProps {
	path: string,
	alt: string,
}

interface PropType {
  slides: ImageProps[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item, index) => (
            <div className="embla__slide" key={`${item.alt}-${index}`}>
              <Image 
                className="w-full object-cover h-full"
                src={item.path}
                alt={item.alt}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls">
        <div className="embla__buttons flex justify-between w-full px-6">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
