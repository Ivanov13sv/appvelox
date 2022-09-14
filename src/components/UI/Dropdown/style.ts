import styled, { css } from 'styled-components';

export const Dropdown = styled.div`
    width: 300px;
    height: 50px;
    background: ${({ theme }) => theme.color.secondary};
    border: 2px solid white;
    border-radius: 5px;
    position: relative;
    transition: all 0.3s ease;
    padding: 1rem;
    overflow: hidden;
`;

interface MenuProps {
    menuOpen: boolean;
}

export const Menu = styled.ul<MenuProps>`
    left: 0;
    padding: 0 1rem;
    width: 100%;
    position: absolute;
    transform: translateX(-110%);
    transition: transform 0.3s ease;
    ${(props) =>
        props.menuOpen &&
        css`
            transform: translateX(0);
        `}
`;

export const SecondaryMenu = styled(Menu)`
    transform: translateX(110%);
    ${(props) =>
        props.menuOpen &&
        css`
            transform: translateX(0);
        `}
`;

export const Title = styled.h5`
    text-align: center;
    color: white;
    font-weight: 400;
    font-size: 16px;
    padding-bottom: 10px;
`;
