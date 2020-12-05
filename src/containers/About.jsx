import React from 'react';
import PinnedMessage from '../components/PinnedMessage';
import initialState from '../../initialState';

const About = () => {
  return (
    <>
      <section className='header about-header'>
        <div className='container'>
          <div className='header__title about-header__title'>
            <div className='overflow--hidden'>
              <h3 className='slideUp'>About</h3>
            </div>
            <div className='overflow--hidden'>
              <h1 className='slideUp delay-2'>Sneyder Barreto</h1>
            </div>
          </div>
        </div>
      </section>

      <PinnedMessage message={initialState.pinnedMessages.about} />

      <main className='main-section'>
        <div className='container'>
          <section className='about-me fadeIn delay-8'>
            <article className='article'>
              <h2 className='article__title'>Who Am I?</h2>
              <p className='article__text'>
                I’m a developer from Colombia who is mainly interested in web
                technologies, specially in frontend development.
                <br />
                Developing my skills as a self-taught person with books and
                online platforms (like
                <a
                  className='article__link'
                  href='https://platzi.com/@sneyderdev'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span>Platzi</span>
                  <span className='social-menu__icon'>
                    <img src='assets/icons/link.svg' alt='Link' />
                    <img
                      src='https://static.platzi.com/static/images/logos/platzi_favicon.png'
                      alt='GitHub Logo'
                    />
                  </span>
                </a>
                ).
                <br />
                My curiosity makes me able to quickly learn new tools and
                technologies when needed.
                <br />
                <br />
                I enjoy sharing my knowledge and helping others when possible.
                <br />
                I’m still a newbie in coding, but I believe that experience
                drives learning and I’m just getting started this journey.
                <br />
                <br />
                Last but not least, I like simplicity.
              </p>
            </article>
            <article className='article'>
              <h2 className='article__title'>My stack?</h2>
              <p className='article__text'>I’m focused on:</p>
              <ul className='list'>
                <li className='list__item'>
                  <img src='assets/icons/html5-logo.svg' alt='HTML5' />
                  <span>HTML</span>
                </li>
                <li className='list__item'>
                  <img src='assets/icons/css-logo.svg' alt='CSS3' />
                  <span>CSS</span>
                </li>
                <li className='list__item'>
                  <img src='assets/icons/js-logo.svg' alt='JavaScript' />
                  <span>JavaScript</span>
                </li>
                <li className='list__item'>
                  <img src='assets/icons/sass-brand.svg' alt='Sass' />
                  <span>Sass</span>
                </li>
                <li className='list__item'>
                  <img src='assets/icons/git-logo.svg' alt='Git' />
                  <span>Git</span>
                </li>
              </ul>
            </article>
            <article className='article'>
              <h2 className='article__title'>Wanna talk?</h2>
              <p className='article__text'>
                If you wanna get in touch or talk about a project, feel free to
                contact me via email at{' '}
                <a
                  href='mailto:hello@sneyder.dev'
                  target='_blank'
                  rel='noreferrer'
                  className='article__link'
                >
                  hello@sneyder.dev
                </a>
                .<br />
                You can also send me a DM on social media.
              </p>
            </article>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
