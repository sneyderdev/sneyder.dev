import { createGlobalStyle } from 'styled-components';

import { fadeIn, slideUp } from './animations';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Saira';
    font-weight: 400;
    font-display: swap;
    src: url('/static/fonts/Saira-Regular.ttf');
  }

  @font-face {
    font-family: 'Saira';
    font-weight: 500;
    font-display: swap;
    src: url('/static/fonts/Saira-Medium.ttf');
  }

  @font-face {
    font-family: 'Saira';
    font-weight: 600;
    font-display: swap;
    src: url('/static/fonts/Saira-SemiBold.ttf');
  }

  ::selection {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.black};
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ol {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    outline: none;
  }

  .overflow--hidden {
    overflow: hidden;
  }

  .link--decoration {
    position: relative;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};

    &::before, &::after {
      content: '';
      width: 100%;
      height: 2px;
      position: absolute;
      bottom: 3px;
      left: 0;
    }

    &::before {
      background: ${({ theme }) => theme.colors.whites[2]};
    }

    &::after {
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 300ms ease-out;
      background: ${({ theme }) => theme.colors.white};
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  .fadeIn {
    animation: ${fadeIn} 800ms ease-in forwards;
  }

  .slideUp {
    animation: ${slideUp} 800ms cubic-bezier(0.04, 0.86, 1, 0.99) forwards;
  }

  .delay-1 {
    animation-delay: 100ms;
  }

  .duration-1 {
    animation-duration: 100ms;
  }

  .delay-2 {
    animation-delay: 200ms;
  }

  .duration-2 {
    animation-duration: 200ms;
  }

  .delay-3 {
    animation-delay: 300ms;
  }

  .duration-3 {
    animation-duration: 300ms;
  }

  .delay-4 {
    animation-delay: 400ms;
  }

  .duration-4 {
    animation-duration: 400ms;
  }

  .delay-5 {
    animation-delay: 500ms;
  }

  .duration-5 {
    animation-duration:  500ms;
  }

  .delay-6 {
    animation-delay: 600ms;
  }

  .duration-6 {
    animation-duration: 600ms;
  }

  .delay-7 {
    animation-delay: 700ms;
  }

  .duration-7 {
    animation-duration: 700ms;
  }

  .delay-8 {
    animation-delay: 800ms;
  }

  @media screen and (max-width: 1023px) {
    div.header--visible {
      transform: translateY(0px)
    }
  }

  @media screen and (min-width: 1024px) {
    ::-webkit-scrollbar {
      width: .4em;
    }

    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.black};
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.whites[2]};
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.white};
    }
  }
`;

export default GlobalStyle;
