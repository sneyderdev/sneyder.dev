import React from 'react';
import PinnedMessage from '../components/PinnedMessage';
import initialState from '../../initialState';

import linkIcon from '../assets/icons/link.svg';
import htmlLogo from '../assets/icons/html-logo.svg';
import cssLogo from '../assets/icons/css-logo.svg';
import javascriptLogo from '../assets/icons/js-logo.svg';
import sassLogo from '../assets/icons/sass-logo.svg';
import gitLogo from '../assets/icons/git-logo.svg';

import { ArticleContainer, Article, SocialMenuIcon, ListItem } from '../shared';

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
          <ArticleContainer className='about-me fadeIn delay-8'>
            <Article className='article'>
              <h2 className='article__title'>Who Am I?</h2>
              <p className='article__text'>
                I’m a developer from Colombia who is mainly interested in web
                technologies, specially in frontend development.
                <br />
                Developing my skills as a self-taught person with books and
                online platforms (like{' '}
                <a
                  className='article__link'
                  href='https://platzi.com/@sneyderdev'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span>Platzi</span>
                  <SocialMenuIcon className='social-menu__icon'>
                    <img src={linkIcon} alt='Link' />
                    <img
                      src='https://static.platzi.com/static/images/logos/platzi_favicon.png'
                      alt='GitHub Logo'
                    />
                  </SocialMenuIcon>
                </a>
                ).
                <br />
                My curiosity makes me able to quickly learn new tools and
                technologies when needed.
              </p>
              <p>
                I enjoy sharing my knowledge and helping others when possible.
                <br />
                I’m still a newbie in coding, but I believe that experience
                drives learning and I’m just getting started this journey.
              </p>
              <p>Last but not least, I like simplicity.</p>
            </Article>
            <Article className='article'>
              <h2 className='article__title'>My stack?</h2>
              <p className='article__text'>I’m focused on:</p>
              <ul className='list'>
                <ListItem className='list__item'>
                  <img src={htmlLogo} alt='HTML5' />
                  <span>HTML</span>
                </ListItem>
                <ListItem className='list__item'>
                  <img src={cssLogo} alt='CSS3' />
                  <span>CSS</span>
                </ListItem>
                <ListItem className='list__item'>
                  <img src={javascriptLogo} alt='JavaScript' />
                  <span>JavaScript</span>
                </ListItem>
                <ListItem className='list__item'>
                  <img src={sassLogo} alt='Sass' />
                  <span>Sass</span>
                </ListItem>
                <ListItem className='list__item'>
                  <img src={gitLogo} alt='Git' />
                  <span>Git</span>
                </ListItem>
              </ul>
            </Article>
            <Article className='article'>
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
            </Article>
          </ArticleContainer>
        </div>
      </main>
    </>
  );
};

export default About;
