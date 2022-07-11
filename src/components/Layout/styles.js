import styled, { css } from "styled-components";

export const Nav = styled.nav`

    background-color: ${({theme})=> theme.componentBackgroundColor};
    margin-top: 15px;
    padding: 20px;
    border-radius:${({theme})=> theme.borderRadius};
;
    a{  
        color: ${({theme})=> theme.textColor};
        text-decoration: none;

        display: inline-block;

        & + a {
            margin-left: 15px;
        }
    }
`;