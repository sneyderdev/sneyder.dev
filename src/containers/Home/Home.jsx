import React from 'react';

import mainPicture from '../../assets/images/main-picture.png';
import purpleArrowIcon from '../../assets/icons/purple-arrow.svg';

import { Container } from '../../shared';
import {
  MainSection,
  Hero,
  HeroTitle,
  HeroDescription,
  HeroLink,
  StyledFooter,
} from './Home.styles';

const Home = () => {
  return (
    <>
      <MainSection className='index-main-section'>
        <Container className='container'>
          <Hero className='hero'>
            <img
              src={mainPicture}
              alt='Sneyder Barreto'
              className='hero__picture fadeIn'
            />
            <HeroTitle className='hero__title overflow--hidden'>
              <h1 className='slideUp'>Hi, I&apos;m Sneyder Barreto</h1>
            </HeroTitle>
            <HeroDescription className='hero__description overflow--hidden'>
              <p className='slideUp delay-2'>
                I like creating things with web technologies.
              </p>
            </HeroDescription>
            <div className='hero__cta overflow--hidden'>
              <HeroLink className='slideUp delay-4' to='/portfolio'>
                See the latest projects I&apos;ve been working on{' '}
                <img src={purpleArrowIcon} alt='Projects Arrow' />
              </HeroLink>
            </div>
          </Hero>
        </Container>
      </MainSection>

      <StyledFooter className='index-footer'>
        <Container className='container'>
          <div className='index-footer__text overflow--hidden'>
            <p className='slideUp delay-6'>
              You can follow me on{' '}
              <a
                href='https://twitter.com/sneyderdev'
                target='_blank'
                rel='noreferrer'
              >
                Twitter
              </a>{' '}
              and{' '}
              <a
                href='https://github.com/sneyderdev'
                target='_blank'
                rel='noreferrer'
              >
                GitHub
              </a>
              . Also, here&apos;s my{' '}
              <a
                href='https://www.linkedin.com/in/sneyderdev'
                target='_blank'
                rel='noreferrer'
              >
                LinkedIn
              </a>{' '}
              and my{' '}
              <a
                href='mailto:hello@sneyder.dev'
                target='_blank'
                rel='noreferrer'
              >
                Email
              </a>
              .
            </p>
          </div>
        </Container>
      </StyledFooter>
    </>
  );
};

export default Home;
