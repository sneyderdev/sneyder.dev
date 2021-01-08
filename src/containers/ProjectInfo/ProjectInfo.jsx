import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PortableText from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import client from '../../client';
import useProject from '../../hooks/useProject';

import { Window, PinnedMessage, Loader } from '../../components';
import NotFound from '../NotFound';

import githubLogo from '../../assets/icons/github-logo.svg';
import arrowIcon from '../../assets/icons/arrow.svg';
import linkIcon from '../../assets/icons/link.svg';

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
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);

  const project = useProject(slug, setLoading);

  if (loading) {
    return <Loader />;
  }

  const { name, description, codeUrl, previewUrl, about, stack } = project;

  const builder = imageUrlBuilder(client);
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
                    <img src={linkIcon} alt='Link' />
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
              Code <img src={githubLogo} alt='GitHub Logo' />
            </CodeButton>
            <PreviewButton href={previewUrl} target='_blank' rel='noreferrer'>
              Live Preview <img src={arrowIcon} alt='Preview arrow' />
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
