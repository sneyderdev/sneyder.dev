import React, { useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PortableText from '@sanity/block-content-to-react';
import AppContext from '../../context/AppContext';
import useSerializers from '../../hooks/useSerializers';

import { PinnedMessage } from '../../components';
import NotFound from '../NotFound/NotFound';

import { PostHeader, PostImage, PostMeta, PostShare } from './PostInfo.styles';
import {
  Container,
  TitleContainer,
  Title,
  ArticleContainer,
  Article,
  MainSection,
  Tag,
} from '../../shared';

const ProjectInfo = () => {
  const {
    state: { posts, icons },
  } = useContext(AppContext);

  const { slug } = useParams();
  const { pathname } = useLocation();

  const serializers = useSerializers();

  const singlePost = posts.find((post) => post.slug === slug);

  const twitterLogo = icons.find((icon) => icon.alt === 'Twitter');
  const linkedinLogo = icons.find((icon) => icon.alt === 'LinkedIn');
  const facebookLogo = icons.find((icon) => icon.alt === 'Facebook');

  const dateOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  };

  return singlePost ? (
    <>
      <Helmet>
        <title>{singlePost.title} - Sneyder Barreto</title>
      </Helmet>

      <PostHeader>
        <PostImage coverImage={singlePost.cover} className='fadeIn' />
        <Container>
          <TitleContainer aboutTitleContainer>
            <Title aboutTitle>
              <h1 className='slideUp'>{singlePost.title}</h1>
            </Title>
            <PinnedMessage message={singlePost.description} />
            <PostMeta>
              <span className='slideUp delay-4'>
                {new Date(singlePost.publishedAt).toLocaleDateString(
                  'en-US',
                  dateOptions
                )}
              </span>
              <div>
                {singlePost.tags.map((tag) => (
                  <Tag
                    to={`/blog/tag/${tag.name.toLowerCase()}`}
                    key={tag._id}
                    className='slideUp delay-4'
                  >
                    <span>#</span>
                    <span>{tag.name}</span>
                  </Tag>
                ))}
              </div>
            </PostMeta>
          </TitleContainer>
        </Container>
      </PostHeader>

      <MainSection>
        <Container>
          <ArticleContainer className='fadeIn delay-6'>
            <Article>
              <PortableText
                blocks={singlePost.body}
                serializers={serializers}
              />
            </Article>
          </ArticleContainer>
        </Container>
      </MainSection>

      <PostShare>
        <div className='slideUp delay-6'>
          <a
            href={`https://twitter.com/intent/tweet?text=${singlePost.title}%20by%20@sneyderdev%0Ahttps://sneyder.dev${pathname}`}
            target='__blank'
            rel='noreferrer'
          >
            <img src={twitterLogo.url} alt='Share to Twitter' />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?url=https://sneyder.dev${pathname}`}
            target='__blank'
            rel='noreferrer'
          >
            <img src={linkedinLogo.url} alt='Share to LinkedIn' />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=https://sneyder.dev${pathname}`}
            target='__blank'
            rel='noreferrer'
          >
            <img src={facebookLogo.url} alt='Share to Facebook' />
          </a>
        </div>
      </PostShare>
    </>
  ) : (
    <NotFound />
  );
};

export default ProjectInfo;
