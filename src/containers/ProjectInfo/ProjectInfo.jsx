import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useProject from '../../hooks/useProject';

import PinnedMessage from '../../components/PinnedMessage';
import NotFound from '../NotFound';

import githubLogo from '../../assets/icons/github-logo.svg';
import arrowIcon from '../../assets/icons/arrow.svg';

import {
  Container,
  TitleContainer,
  Title,
  ArticleContainer,
  Article,
  ListItem,
  WindowContainer,
  WindowBar,
  WindowScreen,
  MainSection,
} from '../../shared';
import {
  ArrowBack,
  ButtonOptions,
  CodeButton,
  PreviewButton,
  Carousel,
  CarouselControl,
  CarouselBullets,
} from './ProjectInfo.styles';

const ProjectInfo = () => {
  const { projectName } = useParams();
  const [loading, setLoading] = useState(true);

  const { project } = useProject(projectName.split('-'), setLoading);
  const hasProject = Object.keys(project).length > 0;

  const {
    name,
    description,
    about,
    images,
    codeURL,
    previewURL,
    stack,
  } = project;

  if (loading) {
    return <h1>Loading</h1>;
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
          <Carousel className='fadeIn delay-6'>
            <WindowContainer carousel>
              <WindowBar>
                <div>
                  <svg width='10' height='10'>
                    <circle cx='5' cy='5' r='5' fill='#FF5F57' />
                  </svg>
                  <svg width='10' height='10'>
                    <circle cx='5' cy='5' r='5' fill='#FFBD2E' />
                  </svg>
                  <svg width='10' height='10'>
                    <circle cx='5' cy='5' r='5' fill='#28CA41' />
                  </svg>
                </div>
                <h4>{name}</h4>
              </WindowBar>
              <WindowScreen carousel>
                {images.map((image) => (
                  <img key={image.id} src={image.src} alt='Project Preview' />
                ))}
                <CarouselControl className='prev'>
                  <ArrowBack />
                </CarouselControl>
                <CarouselControl className='next'>
                  <ArrowBack />
                </CarouselControl>
              </WindowScreen>
            </WindowContainer>
            <CarouselBullets>
              <span className='active' />
              <span />
              <span />
            </CarouselBullets>
          </Carousel>
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
