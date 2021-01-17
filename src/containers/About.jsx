import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import PortableText from '@sanity/block-content-to-react';
import AppContext from '../context/AppContext';
import useSerializers from '../hooks/useSerializers';

import { PinnedMessage } from '../components';

import {
  ArticleContainer,
  Article,
  Container,
  TitleContainer,
  Title,
  MainSection,
} from '../shared';

const About = () => {
  const {
    state: {
      pinnedMessages,
      author: { bio },
    },
  } = useContext(AppContext);

  const serializers = useSerializers();

  const { message } = pinnedMessages.find(
    (pinnedMessage) => pinnedMessage.page === 'About'
  );

  return (
    <>
      <Helmet>
        <title>About - Sneyder Barreto</title>
      </Helmet>

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

      <PinnedMessage message={message} isAbout />

      <MainSection>
        <Container>
          <ArticleContainer className='fadeIn delay-8'>
            <Article>
              <PortableText blocks={bio} serializers={serializers} />
            </Article>
          </ArticleContainer>
        </Container>
      </MainSection>
    </>
  );
};

export default About;
