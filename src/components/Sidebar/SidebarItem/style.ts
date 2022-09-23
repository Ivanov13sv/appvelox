import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface SidebarItemProps {
    isActive?: boolean | undefined;
    ref?: any;
}

export const SidebarItem = styled(NavLink)<SidebarItemProps>`
    text-decoration: none;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 5px;
    height: 46px;
    width: 100%;
    color: ${({theme}) => theme.color.text};
    svg {
        > * {
            fill: white;
        }
    }

    @media ${({ theme }) => theme.media.desktop} {
        flex-direction: column;
        gap: 10px;
        align-items: flex-start;
        justify-content: center;
        &:hover {
            svg {
                transform: scale(1.2);
            }
        }
    }
`;

interface SidebarBodyProps {
    isActive?: boolean;
}

export const SidebarBody = styled.div<SidebarBodyProps>`
    position: relative;
    z-index: 5;
    display: flex;
    color: white;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${(props) =>
        props.isActive &&
        css`
            color: ${({ theme }) => theme.color.accent};
            svg {
                > * {
                    
                    fill: ${({ theme }) => theme.color.accent};
                }
            }
        `}
    @media ${({ theme }) => theme.media.desktop} {
        flex-direction: row;
        gap: 14px;
    }
`;

export const SidebarText = styled.span`
    display: none;
    @media ${({ theme }) => theme.media.tablet} {
        display: block;
    }
`;
