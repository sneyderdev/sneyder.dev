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
      <TitleContainer className='header'>
        <Title className='header__title'>
          <h1 className='slideUp'>{name}</h1>
        </Title>
      </TitleContainer>

      <PinnedMessage message={description} />

      <main className='main-section'>
        <Container className='container'>
          <ButtonOptions className='project-options fadeIn delay-6'>
            <CodeButton
              href={codeURL}
              target='_blank'
              rel='noreferrer'
              className='button'
            >
              Code <img src={githubLogo} alt='GitHub Logo' />
            </CodeButton>
            <PreviewButton
              href={previewURL}
              target='_blank'
              rel='noreferrer'
              className='button'
            >
              Live Preview <img src={arrowIcon} alt='Preview arrow' />
            </PreviewButton>
          </ButtonOptions>
          <Carousel className='projects slideshow fadeIn delay-6'>
            <WindowContainer className='project slideshow__screen'>
              <WindowBar className='screen-bar'>
                <div className='screen-bar__options'>
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
                <h4 className='screen-bar__title'>{name}</h4>
              </WindowBar>
              <WindowScreen className='main-screen'>
                {images.map((image) => (
                  <img key={image.id} src={image.src} alt='Project Preview' />
                ))}
                <CarouselControl
                  type='button'
                  className='slideshow__control prev'
                  id='prev'
                >
                  <ArrowBack />
                </CarouselControl>
                <CarouselControl
                  type='button'
                  className='slideshow__control next'
                  id='next'
                >
                  <ArrowBack />
                </CarouselControl>
              </WindowScreen>
            </WindowContainer>
            <CarouselBullets className='bullets'>
              <span className='bullet active' />
              <span className='bullet' />
              <span className='bullet' />
            </CarouselBullets>
          </Carousel>
          <ArticleContainer className='project-info fadeIn delay-6'>
            <Article className='article'>
              <h2 className='article__title'>About</h2>
              {about()}
            </Article>
            <Article className='article'>
              <h2 className='article__title'>Technologies</h2>
              <ul className='list'>
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
      </main>
    </>
  ) : (
    <NotFound />
  );
};

export default ProjectInfo;
