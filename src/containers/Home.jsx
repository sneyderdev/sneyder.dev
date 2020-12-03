import React from 'react';

const Home = () => {
  return (
    <>
      <div className='blur' id='blur' />
      <div className='grid-boundaries' />

      <main className='index-main-section'>
        <div className='container'>
          <div className='hero'>
            <img
              src='assets/images/main-picture.png'
              alt='Sneyder Barreto'
              className='hero__picture fadeIn'
            />
            <div className='hero__title overflow--hidden'>
              <h1 className='slideUp'>Hi, I&apos;m Sneyder Barreto</h1>
            </div>
            <div className='hero__description overflow--hidden'>
              <p className='slideUp delay-2'>
                I like creating things with web technologies.
              </p>
            </div>
            <div className='hero__cta overflow--hidden'>
              <a className='slideUp delay-4' href='portfolio.html'>
                See the latest projects I&apos;ve been working on{' '}
                <img
                  src='assets/icons/projects-arrow.svg'
                  alt='Projects Arrow'
                />
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className='index-footer'>
        <div className='container'>
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
        </div>
      </footer>
    </>
  );
};

export default Home;
