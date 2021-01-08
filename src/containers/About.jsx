import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import { PinnedMessage } from '../components';

import linkIcon from '../assets/icons/link.svg';
import htmlLogo from '../assets/icons/html-logo.svg';
import cssLogo from '../assets/icons/css-logo.svg';
import javascriptLogo from '../assets/icons/js-logo.svg';
import sassLogo from '../assets/icons/sass-logo.svg';
import gitLogo from '../assets/icons/git-logo.svg';

import {
  ArticleContainer,
  Article,
  SocialMenuIcon,
  ListItem,
  Container,
  TitleContainer,
  Title,
  MainSection,
} from '../shared';

const About = () => {
  const {
    state: { pinnedMessages },
  } = useContext(AppContext);

  return (
    <>
      <TitleContainer aboutTitleContainer>
        <Container>
          <Title aboutTitle>
            <div className='overflow--hidden'>
              <h3 className='slideUp'>About</h3>
            </div>
            <div className='overflow--hidden'>
              <h1 className='slideUp delay-2'>Sneyder Barreto</h1>
            </div>
          </Title>
        </Container>
      </TitleContainer>

      <PinnedMessage message={pinnedMessages.about()} isAbout />

      <MainSection>
        <Container>
          <ArticleContainer className='fadeIn delay-8'>
            <Article>
              <h2>Who Am I?</h2>
              <p>
                I’m a developer from Colombia who is mainly interested in web
                technologies, specially in frontend development.
                <br />
                Developing my skills as a self-taught person with books and
                online platforms (like{' '}
                <a
                  href='https://platzi.com/@sneyderdev'
                  target='_blank'
                  rel='noreferrer'
                >
                  <span className='link--decoration'>Platzi</span>
                  <SocialMenuIcon>
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
            <Article>
              <h2>My stack?</h2>
              <p>I’m focused on:</p>
              <ul>
                <ListItem>
                  <img src={htmlLogo} alt='HTML5' />
                  <span>HTML</span>
                </ListItem>
                <ListItem>
                  <img src={cssLogo} alt='CSS3' />
                  <span>CSS</span>
                </ListItem>
                <ListItem>
                  <img src={javascriptLogo} alt='JavaScript' />
                  <span>JavaScript</span>
                </ListItem>
                <ListItem>
                  <img src={sassLogo} alt='Sass' />
                  <span>Sass</span>
                </ListItem>
                <ListItem>
                  <img src={gitLogo} alt='Git' />
                  <span>Git</span>
                </ListItem>
              </ul>
            </Article>
            <Article>
              <h2>Wanna talk?</h2>
              <p>
                If you wanna get in touch or talk about a project, feel free to
                contact me via email at{' '}
                <a
                  href='mailto:hello@sneyder.dev'
                  target='_blank'
                  rel='noreferrer'
                  className='link--decoration'
                >
                  hello@sneyder.dev
                </a>
                .<br />
                You can also send me a DM on social media.
              </p>
            </Article>
          </ArticleContainer>
        </Container>
      </MainSection>
    </>
  );
};

export default About;
