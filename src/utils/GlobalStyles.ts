import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  @font-face {
  font-family: "CircularXXWeb-Regular";
  src: url("/src/assets/fonts/CircularXXWeb-Regular.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

  body {
    // font-family: "Plus Jakarta Sans", sans-serif;
    font-family: "CircularXXWeb-Regular", sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  address {
    /* by default address italic */
    font-style: normal;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
  }

  article {
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    background: transparent;
  }
`;

export default GlobalStyles;
