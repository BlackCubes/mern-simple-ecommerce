import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    /* Defines what 1rem is i.e. 1rem = 10px (10/16 = 62.5%) */
    font-size: 62.5%;
  }

  body {
    font-family: 'Poppins', 'Open Sans', 'Roboto', 'Lato', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;

    &.modal-open {
      overflow: hidden;
    }
  }

  ::selection {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.vivid_pink};
  }

  #root {
    position: relative;
    min-height: 100vh;
  }

  .clearfix {
    &::after {
      content: '';
      display: table;
      clear: both;
    }
  }
`;

export default GlobalStyles;
