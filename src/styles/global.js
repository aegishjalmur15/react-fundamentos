import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  body {
    ${({theme})=> css`
    background: ${theme.backgroundColor};
    color: ${theme.textColor};
    `}
    font-family: sans-serif;
  }
`;
