import React from 'react';

import PinnedMessage from '../components/PinnedMessage';

import { Container } from '../shared';

const ProjectInfo = () => {
  return (
    <>
      <section className='header'>
        <div className='header__title'>
          <h1 className='slideUp'>Project name</h1>
        </div>
      </section>
      <PinnedMessage message='Project description' />

      <main className='main-section'>
        <Container className='container'>
          <div className='project-options fadeIn delay-6'>
            <a href='/' target='_blank' rel='noreferrer' className='button'>
              Code <img src='assets/icons/github-logo.svg' alt='GitHub Logo' />
            </a>
            <a href='/' target='_blank' rel='noreferrer' className='button'>
              Live Preview{' '}
              <img src='assets/icons/menu-arrow.svg' alt='Preview arrow' />
            </a>
          </div>
          <section className='projects slideshow fadeIn delay-6'>
            <div className='project slideshow__screen'>
              <div className='screen-bar'>
                <span className='screen-bar__options'>
                  <svg width='10' height='10'>
                    <circle cx='5' cy='5' r='5' fill='#FF5F57' />
                  </svg>
                  <svg width='10' height='10'>
                    <circle cx='5' cy='5' r='5' fill='#FFBD2E' />
                  </svg>
                  <svg width='10' height='10'>
                    <circle cx='5' cy='5' r='5' fill='#28CA41' />
                  </svg>
                </span>
                <h4 className='screen-bar__title'>Project name</h4>
              </div>
              <div className='main-screen'>
                <img
                  src=''
                  alt=''
                  className='slideshow__image fadeIn duration-2'
                />
                <img
                  src=''
                  alt=''
                  className='slideshow__image fadeIn duration-2'
                />
                <img
                  src=''
                  alt=''
                  className='slideshow__image fadeIn duration-2'
                />
                <button
                  type='button'
                  className='slideshow__control prev'
                  id='prev'
                >
                  <i className='arrow' />
                </button>
                <button
                  type='button'
                  className='slideshow__control next'
                  id='next'
                >
                  <i className='arrow' />
                </button>
              </div>
            </div>
            <div className='bullets'>
              <span className='bullet active' />
              <span className='bullet' />
              <span className='bullet' />
            </div>
          </section>
          <section className='project-info fadeIn delay-6'>
            <article className='article'>
              <h2 className='article__title'>About</h2>
              <p className='article__text'>About 1</p>
              <p className='article__text'>About 2</p>
            </article>
            <article className='article'>
              <h2 className='article__title'>Technologies</h2>
              <ul className='list'>
                <li className='list__item'>
                  <img src='' alt='' />
                  <span>Tech 1</span>
                </li>
                <li className='list__item'>
                  <img src='' alt='' />
                  <span>Tech 2</span>
                </li>
                <li className='list__item'>
                  <img src='' alt='' />
                  <span>Tech 3</span>
                </li>
                <li className='list__item'>
                  <img src='' alt='' />
                  <span>Tech 4</span>
                </li>
                <li className='list__item'>
                  <img src='' alt='' />
                  <span>Tech 5</span>
                </li>
              </ul>
            </article>
          </section>
        </Container>
      </main>
    </>
  );
};

export default ProjectInfo;
