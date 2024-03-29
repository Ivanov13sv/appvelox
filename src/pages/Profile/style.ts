import styled from 'styled-components';


export const Title = styled.h3``;

export const CardsList = styled.ul`
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 0 auto;
    @media ${({ theme }) => theme.media.desktopPlus} {
        align-items: center;
    }
    @media ${({ theme }) => theme.media.phoneMD} {
        justify-content: flex-start;
    }
`;

export const ShowMoreBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: ${({ theme }) => theme.color.text};
    }

    a {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        text-decoration-line: underline;
        cursor: pointer;
        color: ${({ theme }) => theme.color.otherElems};
    }
`;

export const PatientInfo = styled.div`
    padding-top: 35px;
    h3 {
        text-align: center;
        margin-bottom: 15px;
        font-weight: 400;
        font-size: 20px;
        line-height: 19px;
        color: ${({ theme }) => theme.color.text};
    }

    @media ${({ theme }) => theme.media.tablet} {
        h3 {
            text-align: start;
        }
    }
`;

export const ECards = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;

export const ActiveAppointments = styled.p`
    margin: 0 auto;
    height: 45px;
    display: flex;
    align-items: center;
`;
