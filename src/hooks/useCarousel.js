import { useState } from 'react';

const useCarousel = (images) => {
  const [slide, setSlide] = useState(0);

  const prevSlide = () => {
    if (slide === 0) {
      return setSlide(images.length - 1);
    }

    return setSlide(slide - 1);
  };

  const nextSlide = () => {
    if (slide === images.length - 1) {
      return setSlide(0);
    }

    return setSlide(slide + 1);
  };

  const handleDotClick = (dotIndex) => {
    return setSlide(dotIndex);
  };

  return {
    slide,
    nextSlide,
    prevSlide,
    handleDotClick,
  };
};

export default useCarousel;
