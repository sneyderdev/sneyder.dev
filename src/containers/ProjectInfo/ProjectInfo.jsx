import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import PortableText from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../../sanityClient';
import AppContext from '../../context/AppContext';
import useProject from '../../hooks/useProject';

import { Window, PinnedMessage, Loader } from '../../components';
import NotFound from '../NotFound';

import { ButtonOptions, CodeButton, PreviewButton } from './ProjectInfo.styles';
import {
  Container,
  TitleContainer,
  Title,
  ArticleContainer,
  Article,
  ListItem,
  MainSection,
  LinkList,
  SocialMenuIcon,
} from '../../shared';

const ProjectInfo = () => {
  const {
    state: { icons },
  } = useContext(AppContext);

  const { slug } = useParams();
  const [loading, setLoading] = useState(true);

  const project = useProject(slug, setLoading);

  if (loading) {
    return <Loader />;
  }

  const { name, description, codeUrl, previewUrl, about, stack } = project;

  const arrowIcon = icons.find((icon) => icon.alt === 'Arrow');
  const linkIcon = icons.find((icon) => icon.alt === 'External Link');
  const githubLogo = icons.find((icon) => icon.alt === 'GitHub');

  const builder = imageUrlBuilder(sanityClient);
  const urlFor = (source) => builder.image(source);

  const serializers = {
    types: {
      linkList: ({ node }) => {
        const { items } = node;

        return (
          <LinkList>
            {items.map((item) => (
              <li key={item._key}>
                <a href={item.href} target='_blank' rel='noreferrer'>
                  <SocialMenuIcon>
                    <img src={linkIcon.url} alt={linkIcon.alt} />
                    <img src={urlFor(item.icon)} alt={item.text} />
                  </SocialMenuIcon>
                  <span className='link--decoration'>{item.text}</span>
                </a>
              </li>
            ))}
          </LinkList>
        );
      },
    },
    marks: {
      iconLink: ({ mark, children }) => {
        const { href, icon } = mark;

        return (
          <a href={href} target='_blank' rel='noreferrer'>
            <span className='link--decoration'>{children}</span>
            <SocialMenuIcon>
              <img src={linkIcon.url} alt={linkIcon.alt} />
              <img src={urlFor(icon)} alt={children} />
            </SocialMenuIcon>
          </a>
        );
      },
    },
  };

  return project ? (
    <>
      <TitleContainer center>
        <Title>
          <h1 className='slideUp'>{name}</h1>
        </Title>
      </TitleContainer>

      <PinnedMessage message={description} />

      <MainSection>
        <Container>
          <ButtonOptions className='fadeIn delay-6'>
            <CodeButton href={codeUrl} target='_blank' rel='noreferrer'>
              Code <img src={githubLogo.url} alt={githubLogo.alt} />
            </CodeButton>
            <PreviewButton href={previewUrl} target='_blank' rel='noreferrer'>
              Live Preview <img src={arrowIcon.url} alt={arrowIcon.alt} />
            </PreviewButton>
          </ButtonOptions>
          <Window project={project} isCarousel />
          <ArticleContainer className='fadeIn delay-6'>
            <Article>
              <h2>About</h2>
              <PortableText blocks={about} serializers={serializers} />
            </Article>
            <Article>
              <h2>Technologies</h2>
              <ul>
                {stack.map((tech) => (
                  <ListItem key={tech._key}>
                    <img src={tech.icon} alt={tech.name} />
                    <span>{tech.name}</span>
                  </ListItem>
                ))}
              </ul>
            </Article>
          </ArticleContainer>
        </Container>
      </MainSection>
    </>
  ) : (
    <NotFound />
  );
};

export default ProjectInfo;
