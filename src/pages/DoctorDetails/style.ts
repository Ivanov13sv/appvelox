import styled from 'styled-components';

export const Body = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    @media ${({ theme }) => theme.media.desktopPlus} {
        flex-direction: row;
    }
`;

export const Card = styled.article`
    padding: 1rem;
    border-radius: 10px;
    z-index: 11;
`;

export const PersonalInfo = styled.div`
    img {
        width: 100%;
        height: 230px;
        border-radius: 5px;
        @media ${({ theme }) => theme.media.desktopPlus} {
            height: 500px;
            width: 500px;
        }
    }
`;

export const Description = styled.div`
    max-width: 500px;
    transform: translateY(-10%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    h2 {
        font-weight: 400;
    }
    h3 {
        font-weight: 300;
        font-size: 16px;
    }
`;

export const Address = styled.div`
    display: flex;
    flex-direction: column;
    div {
        font-weight: 400;
        span {
            font-weight: 300;
            padding-left: 1rem;
        }
    }
`;
