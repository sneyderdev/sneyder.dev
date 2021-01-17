import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PortableText from '@sanity/block-content-to-react';
import AppContext from '../../context/AppContext';
import useSerializers from '../../hooks/useSerializers';

import { Window, PinnedMessage } from '../../components';
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
} from '../../shared';

const ProjectInfo = () => {
  const {
    state: { projects, icons },
  } = useContext(AppContext);

  const { slug } = useParams();

  const serializers = useSerializers();

  const singleProject = projects.find((project) => project.slug === slug);

  const arrowIcon = icons.find((icon) => icon.alt === 'Arrow');
  const githubLogo = icons.find((icon) => icon.alt === 'GitHub');

  return singleProject ? (
    <>
      <Helmet>
        <title>{singleProject.name} - Sneyder Barreto</title>
      </Helmet>

      <TitleContainer center>
        <Title>
          <h1 className='slideUp'>{singleProject.name}</h1>
        </Title>
      </TitleContainer>

      <PinnedMessage message={singleProject.description} />

      <MainSection>
        <Container>
          <ButtonOptions className='fadeIn delay-6'>
            <CodeButton
              href={singleProject.codeUrl}
              target='_blank'
              rel='noreferrer'
            >
              Code <img src={githubLogo.url} alt={githubLogo.alt} />
            </CodeButton>
            <PreviewButton
              href={singleProject.previewUrl}
              target='_blank'
              rel='noreferrer'
            >
              Live Preview <img src={arrowIcon.url} alt={arrowIcon.alt} />
            </PreviewButton>
          </ButtonOptions>
          <Window project={singleProject} isCarousel />
          <ArticleContainer className='fadeIn delay-6'>
            <Article>
              <h2>About</h2>
              <PortableText
                blocks={singleProject.about}
                serializers={serializers}
              />
            </Article>
            <Article>
              <h2>Technologies</h2>
              <ul>
                {singleProject.stack.map((tech) => (
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
