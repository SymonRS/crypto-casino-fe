import styled from "styled-components";

export const NavbarWrapper = styled.nav`
    background: white;
    position: relative;
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${({theme}) => theme.navbar?.internalSpacing ? `padding: ${theme.navbar.internalSpacing};` : ''}
    box-sizing: border-box;
`;