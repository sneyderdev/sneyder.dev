import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PortableText from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../../sanityClient';
import AppContext from '../../context/AppContext';

import { PinnedMessage } from '../../components';
import NotFound from '../NotFound';

import { PostHeader, PostImage, PostMeta } from './PostInfo.styles';
import {
  Container,
  TitleContainer,
  Title,
  ArticleContainer,
  Article,
  MainSection,
  LinkList,
  ListItem,
  SocialMenuIcon,
  Tag,
} from '../../shared';

const ProjectInfo = () => {
  const {
    state: { posts, icons },
  } = useContext(AppContext);

  const { slug } = useParams();

  const singlePost = posts.find((post) => post.slug === slug);

  const linkIcon = icons.find((icon) => icon.alt === 'External Link');

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
            <SocialMenuIcon>
              <img src={linkIcon.url} alt={linkIcon.alt} />
              <img src={urlFor(icon)} alt={children} />
            </SocialMenuIcon>
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

  const dateOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };

  return singlePost ? (
    <>
      <Helmet>
        <title>{singlePost.title} - Sneyder Barreto</title>
      </Helmet>

      <PostHeader>
        <PostImage image={singlePost.mainImage} className='fadeIn' />
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
    </>
  ) : (
    <NotFound />
  );
};

export default ProjectInfo;
