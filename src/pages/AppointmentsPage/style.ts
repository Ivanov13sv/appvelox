import styled from 'styled-components';
import { Section } from 'components/Section';

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
