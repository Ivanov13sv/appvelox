import styled, { css, keyframes } from 'styled-components';

interface INavbarItem {
    newAction: boolean;
}

export const NavbarItem = styled.li<INavbarItem>`
    -webkit-backface-visibility: hidden; /* Chrome, Safari, Opera */
    backface-visibility: hidden;
    z-index: 20;
    position: relative;
    svg {
        transition: transform 0.2s ease;
        color: white;
    }
    &:hover {
        > {
            button {
                svg {
                    transform: scale(1.3);
                }
            }
        }
    }
    ${(props) =>
        props.newAction &&
        css`
            &:after {
                content: '';
                position: absolute;
                right: 0;
                bottom: 15%;
                width: 5px;
                height: 5px;
                background-color: red;
                border-radius: 50%;
                pointer-events: none;
            }
        `}
    @media ${({ theme }) => theme.media.tablet} {
    }
`;
const appearancePhone = keyframes`
0%{
	transform: translateY(-100%);
}
100%{
    transform: translateY(0);
}
`;
const appearanceTabletPlus = keyframes`
0%{
    transform: translateX(-100%) scale(0.85);
}
100%{
    transform: translateX(-100%)  scale(1);
}
`;

export const Content = styled.article`
    z-index: 5;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: transform 1s;
    width: 100%;
    animation: ${appearancePhone} 0.3s;
    @media ${({ theme }) => theme.media.tablet} {
        position: absolute;
        top: 40px;
        right: 0;
        width: 300px;
        animation: ${appearanceTabletPlus} 0.3s;
        transform: translateX(-100%);
    }
`;
