import styled, { css, keyframes } from 'styled-components';

interface INavbarItem {
    newAction: boolean;
}

export const NavbarItem = styled.li<INavbarItem>`
    -webkit-backface-visibility: hidden; /* Chrome, Safari, Opera */
    backface-visibility: hidden;
    z-index: 20;
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
        position: relative;
    }
`;
const appearance = keyframes`
0%{
	/* transform: translate(10%, 20%); */
    transform: scale(0.85) ;
}
100%{
    transform: scale(1);
	/* transform: translate(30%, 40px); */

}
`;

export const Content = styled.div`
    position: absolute;
    top: 60px;
    right: 5%;
    animation: ${appearance} 0.3s;
    @media ${({ theme }) => theme.media.tablet} {
        top: 30px;
    }
`;

// keyframes
