import React, { useContext } from 'react';
import PortableText from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../sanityClient';
import AppContext from '../context/AppContext';

import { PinnedMessage } from '../components';

import {
  ArticleContainer,
  Article,
  Icon,
  ListItem,
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
      icons,
    },
  } = useContext(AppContext);

  const { message } = pinnedMessages.find(
    (pinnedMessage) => pinnedMessage.page === 'About'
  );

  const linkIcon = icons.find((icon) => icon.alt === 'External Link');

  const builder = imageUrlBuilder(sanityClient);
  const urlFor = (source) => builder.image(source);

  const serializers = {
    types: {
      iconList: ({ node }) => {
        const { items } = node;

        return (
          <ul>
            {items.map((item) => (
              <ListItem key={item._key}>
                <img src={urlFor(item.icon)} alt={item.text} />
                <span>{item.text}</span>
              </ListItem>
            ))}
          </ul>
        );
      },
    },
    marks: {
      iconLink: ({ mark, children }) => {
        const { href, icon } = mark;

        return (
          <a href={href} target='_blank' rel='noreferrer'>
            <span className='link--decoration'>{children}</span>
            <Icon>
              <img src={linkIcon.url} alt={linkIcon.alt} />
              <img src={urlFor(icon)} alt={children} />
            </Icon>
          </a>
        );
      },
      link: ({ mark, children }) => {
        const { href } = mark;

        return (
          <a
            href={href}
            target='_blank'
            rel='noreferrer'
            className='link--decoration'
          >
            {children}
          </a>
        );
      },
    },
  };

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
