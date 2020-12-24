import React from 'react';

import { WindowContainer, WindowBar, WindowScreen } from './Window.styles';
import { CarouselControl } from '../Carousel/Carousel.styles';
import { Arrow } from '../../shared';

const Window = ({ project: { name, images }, children, isCarousel }) => {
  return (
    <WindowContainer isCarousel={isCarousel}>
      <WindowBar>
        <div>
          <svg width='10' height='10'>
            <circle cx='5' cy='5' r='5' fill='#FF5F57' />
          </svg>
          <svg width='10' height='10'>
            <circle cx='5' cy='5' r='5' fill='#FFBD2E' />
          </svg>
          <svg width='10' height='10'>
            <circle cx='5' cy='5' r='5' fill='#28CA41' />
          </svg>
        </div>
        <h4>{name}</h4>
      </WindowBar>
      {isCarousel ? (
        <WindowScreen isCarousel>
          {images.map((image) => (
            <img key={image.id} src={image.src} alt='Project Preview' />
          ))}
          <CarouselControl className='prev'>
            <Arrow />
          </CarouselControl>
          <CarouselControl className='next'>
            <Arrow />
          </CarouselControl>
        </WindowScreen>
      ) : (
        <WindowScreen>
          {images.map((image) => (
            <img key={image.id} src={image.src} alt='Project Preview' />
          ))}
        </WindowScreen>
      )}
      {children}
    </WindowContainer>
  );
};

export default Window;
