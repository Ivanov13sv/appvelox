import styled from 'styled-components';

export const Sidebar = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.color.main};
    z-index: 10;
    width: 100%;
    border-radius: 5px 5px 0 0;
    @media ${({ theme }) => theme.media.desktop} {
        grid-area: side;
        display: flex;
        flex-direction: column;
        height: 100%;
        position: relative;
        border-radius: 0;
    }
`;

export const SidebarTop = styled.div``;

export const SidebarLogo = styled.h2`
    display: none;
    @media ${({ theme }) => theme.media.desktop} {
        padding: 20px;
        color: ${({ theme }) => theme.color.bg};
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        width: 100%;
        height: 55px;
        display: block;
    }
`;

interface SidebarBodyProps {
    active?: boolean;
}

export const SidebarMain = styled.div<SidebarBodyProps>`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    padding: 10px 0;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
    > button {
        position: fixed;
        bottom: 75px;
        right: 10px;
        background-color: ${({ theme }) => theme.color.otherElems};
    }
    svg{
        font-size: 50px;
    }
    @media ${({ theme }) => theme.media.desktop} {
        padding: 0;
        > button {
            margin: 10px 0 0 20px;
            width: 150px;
            position: static;
            background-color: ${({ theme }) => theme.color.accent};
        }
        flex-direction: column;
        a {
            padding: 0 20px;
        }
    }
`;

export const SidebarActiveItem = styled.div`
    display: none;
    @media ${({ theme }) => theme.media.desktop} {
        background-color: white;
        position: absolute;
        width: 100%;
        transition: all 0.3s ease;
        z-index: 1;
        left: 0;
        display: block;
    }
`;

export const SidebarFooter = styled.div`
    display: none;
    @media ${({ theme }) => theme.media.desktop} {
        margin-top: auto;
        display: flex;
        flex-direction: column;
        a {
            padding: 0 20px;
        }
    }
`;

export const SidebarFooterLogo = styled.div`
    display: none;
    @media ${({ theme }) => theme.media.desktop} {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: start;
        padding: 0 20px;

        height: 46px;
        pointer-events: none;
        img {
            pointer-events: none;
        }
    }
`;
