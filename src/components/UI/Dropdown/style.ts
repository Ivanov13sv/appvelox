import styled, { css } from 'styled-components';

export const Dropdown = styled.div`
    height: 50px;
    background: ${({ theme }) => theme.color.secondary};
    position: relative;
    transition: all 0.3s ease;
    padding: 1rem;
    overflow: hidden;
    box-shadow: 0px 0px 5px #c0c0c0;

    @media ${({ theme }) => theme.media.tablet} {
        width: 300px;
        border-radius: 5px;
        border: 2px solid white;
        box-shadow: none;
    }
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
