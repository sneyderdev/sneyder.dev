import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
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
  const { projectName } = useParams();
  const [loading, setLoading] = useState(true);

  const { project } = useProject(projectName.split('-'), setLoading);
  const hasProject = Object.keys(project).length > 0;

  const { name, description, about, codeURL, previewURL, stack } = project;

  if (loading) {
    return <Loader />;
  }

  return hasProject ? (
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
            <CodeButton href={codeURL} target='_blank' rel='noreferrer'>
              Code <img src={githubLogo} alt='GitHub Logo' />
            </CodeButton>
            <PreviewButton href={previewURL} target='_blank' rel='noreferrer'>
              Live Preview <img src={arrowIcon} alt='Preview arrow' />
            </PreviewButton>
          </ButtonOptions>
          <Window project={project} isCarousel />
          <ArticleContainer className='fadeIn delay-6'>
            <Article>
              <h2>About</h2>
              {about()}
            </Article>
            <Article>
              <h2>Technologies</h2>
              <ul>
                {stack.map((tech) => (
                  <ListItem key={tech.id}>
                    <img src={tech.icon} alt='' />
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
