import styled, {css} from 'styled-components';

export const Container = styled.footer`
  ${({theme}) => css`
    background: ${theme.componentBackgroundColor};
    border-radius: ${theme.borderRadius};
  `}
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  
  justify-content: space-between;
  margin-top: 24px;

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
