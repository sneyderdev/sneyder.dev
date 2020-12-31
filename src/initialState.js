import React from 'react';

import sneyderDevCover from './assets/images/sneyder-dev-1.png';
import sneyderDev2 from './assets/images/sneyder-dev-2.png';
import sneyderDev3 from './assets/images/sneyder-dev-3.png';

import platziVideoCover from './assets/images/platzi-video-1.png';
import platziVideo2 from './assets/images/platzi-video-2.png';
import platziVideo3 from './assets/images/platzi-video-3.png';

import htmlLogo from './assets/icons/html-logo.svg';
import cssLogo from './assets/icons/css-logo.svg';
import jsLogo from './assets/icons/js-logo.svg';
import sassLogo from './assets/icons/sass-logo.svg';
import gitLogo from './assets/icons/git-logo.svg';
import linkIcon from './assets/icons/link.svg';
import courseBadge from './assets/icons/badge-jquery-js.png';

import { SocialMenuIcon, LinkList } from './shared';

export default {
  pinnedMessages: {
    projects: `📌 As practice makes perfect, here’s a list with some of my personal
    projects.`,
    about: () => (
      <>
        📌 Hey there, I’m Sneyder!
        <br />
        First of all, thanks for visiting my personal website.
      </>
    ),
  },
  projects: [
    {
      id: 1,
      name: 'sneyder.dev',
      description: `📌 My personal website.`,
      about: () => (
        <>
          <p>
            This project is my personal website. The main goal was having a
            place to showcase my work and where people might know me better.
          </p>
          <p>
            The project is still on development. I&apos;ll be adding some
            features like a blog section and more projects as soon as I learn
            more advanced technologies.
          </p>
        </>
      ),
      images: [
        {
          id: 1,
          src: sneyderDevCover,
        },
        {
          id: 2,
          src: sneyderDev2,
        },
        {
          id: 3,
          src: sneyderDev3,
        },
      ],
      codeURL: 'https://github.com/sneyderdev/sneyder.dev',
      previewURL: 'https://sneyder.dev/',
      stack: [
        {
          id: 1,
          name: 'HTML',
          icon: htmlLogo,
        },
        {
          id: 2,
          name: 'CSS',
          icon: cssLogo,
        },
        {
          id: 3,
          name: 'JavaScript',
          icon: jsLogo,
        },
        {
          id: 4,
          name: 'Sass',
          icon: sassLogo,
        },
        {
          id: 5,
          name: 'Git',
          icon: gitLogo,
        },
      ],
    },
    {
      id: 2,
      name: 'Platzi Video',
      description: `📌 Movies platform project.`,
      about: () => (
        <>
          <p>
            This is a project of the{' '}
            <a
              href='https://platzi.com/clases/jquery-js/'
              target='_blank'
              rel='noreferrer'
            >
              <span className='link--decoration'>
                Course from jQuery to JavaScript
              </span>
              <SocialMenuIcon>
                <img src={linkIcon} alt='Link' />
                <img src={courseBadge} alt='Badge jQuery to JS' />
              </SocialMenuIcon>
            </a>{' '}
            from{' '}
            <a href='https://platzi.com/' target='_blank' rel='noreferrer'>
              <span className='link--decoration'>Platzi</span>
              <SocialMenuIcon>
                <img src={linkIcon} alt='Link' />
                <img
                  src='https://static.platzi.com/static/images/logos/platzi_favicon.png'
                  alt='Platzi'
                />
              </SocialMenuIcon>
            </a>
            .
          </p>
          <p>I&apos;ve used these APIs to request the data:</p>
          <LinkList>
            <li>
              <a href='https://yts.mx/' target='_blank' rel='noreferrer'>
                <SocialMenuIcon>
                  <img src={linkIcon} alt='Link' />
                  <img
                    src='https://yts.mx/assets/images/website/og_yts_logo.png'
                    alt='YTS YIFY'
                  />
                </SocialMenuIcon>
                <span className='link--decoration'>YTS YIFY</span>
              </a>
            </li>
            <li>
              <a href='https://randomuser.me/' target='_blank' rel='noreferrer'>
                <img src={linkIcon} alt='Random User Generator' />
                <span className='link--decoration'>Random User</span>
              </a>
            </li>
          </LinkList>
          <p>
            I also used{' '}
            <a
              href='https://sweetalert2.github.io/'
              target='_blank'
              rel='noreferrer'
            >
              <span className='link--decoration'>sweetalert2</span>
              <SocialMenuIcon>
                <img src={linkIcon} alt='Link' />
                <img
                  src='https://sweetalert2.github.io/images/favicon.png'
                  alt='sweetalert2 favicon'
                />
              </SocialMenuIcon>
            </a>{' '}
            for the modals pop up.
          </p>
        </>
      ),
      images: [
        {
          id: 1,
          src: platziVideoCover,
        },
        {
          id: 2,
          src: platziVideo2,
        },
        {
          id: 3,
          src: platziVideo3,
        },
      ],
      codeURL: 'https://github.com/sneyderdev/platzivideo-vanillajs',
      previewURL: 'https://sneyderdev.github.io/platzivideo-vanillajs/',
      stack: [
        {
          id: 1,
          name: 'HTML',
          icon: htmlLogo,
        },
        {
          id: 2,
          name: 'CSS',
          icon: cssLogo,
        },
        {
          id: 3,
          name: 'JavaScript',
          icon: jsLogo,
        },
      ],
    },
  ],
  project: {},
};
