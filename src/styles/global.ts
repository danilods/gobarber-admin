import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }

    html, body, #root {
      height: 100%;
      width: 100%;
      overflow-x: hidden;
    }

    body {
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important;
      background: #17181c;
    }

    body, input, button {
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
    }

    h1 h2, h3, h4, h5, h6, strong {
      font-weight: 500;
    }

    button {
      cursor: pointer;
    }

    a {
      text-decoration: none;
    }

    ul {
      list-style: none;
    }

`;
