import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html,
  body {    
    padding: 0;
    margin: 0;
    background-color: ${(props) => props.theme.backgrounds.primary};
    color: ${(props) => props.theme.colors.primary};
  }

`;
