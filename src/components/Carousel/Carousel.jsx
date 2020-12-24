import React from 'react';

import Window from '../Window/Window';

import { CarouselContainer, CarouselBullets } from './Carousel.styles';

const Carousel = ({ project }) => {
  return (
    <CarouselContainer className='fadeIn delay-6'>
      <Window project={project} carousel />
      <CarouselBullets>
        <span className='active' />
        <span />
        <span />
      </CarouselBullets>
    </CarouselContainer>
  );
};

export default Carousel;
