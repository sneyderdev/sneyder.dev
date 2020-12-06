import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ::selection {
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.white};
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    margin: 0;
    font-family: ${(props) => props.theme.fonts.primary};
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.black};
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    outline: none;
  }

  img {
    user-select: none;
  }
`;

export default GlobalStyle;
