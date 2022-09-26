import styled from 'styled-components';

export const Title = styled.h2`
    text-align: center;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 33px;
    padding-bottom: 15px;
    @media ${({ theme }) => theme.media.desktop} {
        padding-bottom: 25px;
        font-size: 28px;
    }
`;

export const Body = styled.div`
    padding-bottom: 2rem;
`;

export const CardList = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
`;
