import React from 'react';

import { WindowContainer, WindowBar, WindowScreen } from './Window.styles';
import { CarouselControl } from '../Carousel/Carousel.styles';
import { ArrowBack } from '../../containers/ProjectInfo/ProjectInfo.styles';

const Window = ({ project: { name, images }, children, carousel }) => {
  return (
    <WindowContainer carousel={carousel}>
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
      {carousel ? (
        <WindowScreen carousel>
          {images.map((image) => (
            <img key={image.id} src={image.src} alt='Project Preview' />
          ))}
          <CarouselControl className='prev'>
            <ArrowBack />
          </CarouselControl>
          <CarouselControl className='next'>
            <ArrowBack />
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
