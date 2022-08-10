import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    fontFamily: 'Open Sans Condensed';
    padding: 20px 40px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  
  * {
    box-sizing: border-box;
  }  
`;

