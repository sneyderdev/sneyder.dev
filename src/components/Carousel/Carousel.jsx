import React from 'react';
import useCarousel from '../../hooks/useCarousel';

import {
  CarouselContainer,
  CarouselContent,
  CarouselControl,
  CarouselDots,
} from './Carousel.styles';
import { Arrow } from '../../shared';

const Carousel = ({ images }) => {
  const { slide, prevSlide, nextSlide, handleDotClick } = useCarousel(images);

  return (
    <CarouselContainer>
      <CarouselContent slideIndex={slide + 1}>
        {images.map((image) => (
          <img
            key={image._key}
            src={image.url}
            alt='Project Preview'
            className='fadeIn duration-2'
          />
        ))}
      </CarouselContent>
      <CarouselControl
        className='prev'
        onClick={prevSlide}
        aria-label='Previous Slide'
      >
        <Arrow />
      </CarouselControl>
      <CarouselControl
        className='next'
        onClick={nextSlide}
        aria-label='Next Slide'
      >
        <Arrow />
      </CarouselControl>
      <CarouselDots>
        {images.map((image, index) => (
          <div
            key={image._key}
            onClick={() => handleDotClick(index)}
            onKeyPress={() => handleDotClick(index)}
            role='button'
            tabIndex='0'
            aria-label='Change Slide'
            className={slide === index ? 'active' : ''}
          />
        ))}
      </CarouselDots>
    </CarouselContainer>
  );
};

export default Carousel;
