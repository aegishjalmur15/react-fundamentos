import styled, { css } from 'styled-components';

export const Container = styled.article`
  ${({theme})=> css`
    background: ${theme.postBackgroundColor};
    border-radius: ${theme.borderRadius};
  `}
  display: flex;
  flex-direction: column;
  padding: 16px;

  h2 {
    margin: 0 0 8px;
  }

  small {
    opacity: 0.7;
  }

  & + article {
    margin-top: 8px;
  }
`;
