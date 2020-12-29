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
            key={image.id}
            src={image.src}
            alt='Project Preview'
            className='fadeIn duration-2'
          />
        ))}
      </CarouselContent>
      <CarouselControl className='prev' onClick={prevSlide}>
        <Arrow />
      </CarouselControl>
      <CarouselControl className='next' onClick={nextSlide}>
        <Arrow />
      </CarouselControl>
      <CarouselDots>
        {images.map((image, index) => (
          <div
            key={image.id}
            onClick={() => handleDotClick(index)}
            onKeyPress={() => handleDotClick(index)}
            role='button'
            tabIndex={index}
            aria-label='Change Slide'
            className={slide === index ? 'active' : ''}
          />
        ))}
      </CarouselDots>
    </CarouselContainer>
  );
};

export default Carousel;
