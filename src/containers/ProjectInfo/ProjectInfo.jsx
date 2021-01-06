import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BlockContent from '@sanity/block-content-to-react';
import useProject from '../../hooks/useProject';

import { Window, PinnedMessage, Loader } from '../../components';
import NotFound from '../NotFound';

import githubLogo from '../../assets/icons/github-logo.svg';
import arrowIcon from '../../assets/icons/arrow.svg';

import { ButtonOptions, CodeButton, PreviewButton } from './ProjectInfo.styles';
import {
  Container,
  TitleContainer,
  Title,
  ArticleContainer,
  Article,
  ListItem,
  MainSection,
} from '../../shared';

const ProjectInfo = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);

  const project = useProject(slug, setLoading);

  if (loading) {
    return <Loader />;
  }

  const { name, description, codeUrl, previewUrl, about, stack } = project;

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
              <BlockContent blocks={about} />
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
