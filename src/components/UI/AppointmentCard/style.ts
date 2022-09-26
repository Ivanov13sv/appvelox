import styled from 'styled-components';

export const Card = styled.li`
    background-color: ${({ theme }) => theme.color.uiBase};
    height: 174px;
    box-shadow: ${({ theme }) => theme.other.boxShadow};
    border-radius: 5px;
    width: 320px;
    @media ${({ theme }) => theme.media.tablet} {
        width: 475px;
    }
`;

export const CardBody = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

export const Date = styled.span`
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme }) => theme.color.text};
    margin-bottom: 5px;
`;

export const Address = styled.p`
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.color.text};
`;

export const Hospital = styled(Address)``;

export const DoctorInfo = styled.div`
    gap: 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > div {
        gap: 1rem;
        display: flex;
        align-items: center;
    }
    span {
        color: ${({ theme }) => theme.color.text};
    }
    button {
        margin-left: auto;
    }
`;

export const DoctorName = styled.span`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    letter-spacing: 0.5px;
`;

export const Speciality = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #bcb9cf;
`;

export const PersonalInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ConfirmBlock = styled.div``;

export const ConfirmButtons = styled.div`
    display: flex;
    svg {
        transition: transform 0.2s ease;
        cursor: pointer;
        &:hover {
            transform: scale(1.2);
        }
    }
`;
