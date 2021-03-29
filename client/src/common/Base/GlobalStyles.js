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

    @media ${(props) => props.theme.responsive.below_1199} {
      /* 1rem = 11px, 11/16 = 68.75% */
      font-size: 68.75%;
    }

    @media ${(props) => props.theme.responsive.below_899} {
      /* 1rem = 12px, 12/16 = 75% */
      font-size: 75%;
    }

    @media ${(props) => props.theme.responsive.below_479} {
      /* 1rem = 13px, 13/16 = 81.25% */
      font-size: 81.25%;
    }

    @media ${(props) => props.theme.responsive.below_379} {
      /* 1rem = 15px, 15/16 = 93.75% */
      font-size: 93.75%;
    }
  }

  body {
    display: flex;
    flex-direction: column;
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
