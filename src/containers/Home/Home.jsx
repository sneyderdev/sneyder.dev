import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

import mainPicture from '../../assets/images/main-picture.png';

import {
  Hero,
  HeroTitle,
  HeroDescription,
  HeroLink,
  StyledFooter,
} from './Home.styles';
import { MainSection, Container } from '../../shared';

const Home = () => {
  const {
    state: { icons },
  } = useContext(AppContext);

  const purpleArrowIcon = icons.find((icon) => icon.alt === 'Purple Arrow');

  return (
    <>
      <MainSection isHome>
        <Container>
          <Hero>
            <img src={mainPicture} alt='Sneyder Barreto' className='fadeIn' />
            <HeroTitle className='overflow--hidden'>
              <h1 className='slideUp'>Hi, I&apos;m Sneyder Barreto</h1>
            </HeroTitle>
            <HeroDescription className='overflow--hidden'>
              <p className='slideUp delay-2'>
                I like creating things with web technologies.
              </p>
            </HeroDescription>
            <div className='overflow--hidden'>
              <HeroLink className='slideUp delay-4' to='/portfolio'>
                See the latest projects I&apos;ve been working on{' '}
                <img src={purpleArrowIcon.url} alt={purpleArrowIcon.alt} />
              </HeroLink>
            </div>
          </Hero>
        </Container>
      </MainSection>

      <StyledFooter>
        <Container>
          <div className='overflow--hidden'>
            <p className='slideUp delay-6'>
              You can follow me on{' '}
              <a
                href='https://twitter.com/sneyderdev'
                target='_blank'
                rel='noreferrer'
                className='link--decoration'
              >
                Twitter
              </a>{' '}
              and{' '}
              <a
                href='https://github.com/sneyderdev'
                target='_blank'
                rel='noreferrer'
                className='link--decoration'
              >
                GitHub
              </a>
              . Also, here&apos;s my{' '}
              <a
                href='https://www.linkedin.com/in/sneyderdev'
                target='_blank'
                rel='noreferrer'
                className='link--decoration'
              >
                LinkedIn
              </a>{' '}
              and my{' '}
              <a
                href='mailto:hello@sneyder.dev'
                target='_blank'
                rel='noreferrer'
                className='link--decoration'
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
