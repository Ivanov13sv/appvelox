import styled from 'styled-components';

export const Main = styled.main`
    grid-area: main;
    /* overflow: hidden; */
    padding-bottom: 4.5rem;
`;

export const Titles = styled.div`
    height: 46px;
    display: flex;
    display: flex;
    align-items: center;
    position: relative;
    @media ${({ theme }) => theme.media.desktop} {
        margin-left: 40px;
    }
`;
