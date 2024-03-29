import { createGlobalStyle } from 'styled-components';
import { COLORS } from './colors';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }
  img{
    display: block;
    max-width: 100%;
  }
  body{
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: ${COLORS['main-bg']};
    color: ${COLORS['main-color']}}

    h1,h2,h3,h4,h5,h6{
      margin: 0;
    }
  a{
    text-decoration: none;
    color: inherit;
  }
  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
`;

export { GlobalStyles };
