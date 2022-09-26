import styled from 'styled-components';
import { Section } from 'components/Section';


export const ModalWrapper = styled.div`
    background-color: ${({ theme }) => theme.color.uiBase};
    display: flex;
    width: 100%;
    height: 100%;
    padding: 2rem;
    flex-direction: column;
    gap: 2rem;
    h3 {
        text-align: center;
        font-weight: 100;
    }
`;

export const AppointmentListItem = styled.li`
    background-color: ${({ theme }) => theme.color.bg};
    border-radius: 10px;
    padding: 15px;
    flex: 0 0 45%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: ${({ theme }) => theme.other.boxShadow};
    .date {
        font-weight: 500;
    }

    @media ${({ theme }) => theme.media.phoneMD} {
        max-width: 300px;
    }
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 10px;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    &::-webkit-scrollbar-track {
        background: #ebe7ff;
        border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background: #003b72;
        border-radius: 5px;
    }
`;


export const Appointments = styled(Section)`
    max-width: 1400px;
    padding-bottom: 4rem;
    @media ${({ theme }) => theme.media.desktopPlus} {
        padding-bottom: 0;
    }
`;

export const AppointmentsBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    @media ${({ theme }) => theme.media.desktopPlus} {
        align-items: flex-start;
        flex-direction: row;
        gap: 5rem;
    }
`;

export const CardsList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 5px 15px;
    gap: 15px;
    max-height: 400px;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: #ebe7ff;
        border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background: #003b72;
        border-radius: 5px;
    }
    @media ${({ theme }) => theme.media.tablet} {
        align-items: center;
        max-height: 646px;
    }
`;

export const CardListWrapper = styled.div``;
