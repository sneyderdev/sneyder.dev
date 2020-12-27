import React from 'react';

import Carousel from '../Carousel/Carousel';

import { WindowContainer, WindowBar, WindowScreen } from './Window.styles';

const Window = ({ project: { name, images }, children, isCarousel }) => {
  return (
    <WindowContainer
      isCarousel={isCarousel}
      className={isCarousel ? 'fadeIn delay-6' : ''}
    >
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
          <Carousel images={images} />
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
