import styled from 'styled-components';

export const Appointments = styled.section`
    max-width: 1400px;
`;

export const AppointmentsBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
	align-items: center;
    padding: 0 20px;
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
    padding: 3px;
    gap: 15px;
    /* max-height: 646px; */
    overflow-y: auto;
    /* min-width: 503px; */

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
    }
`;

export const CardListWrapper = styled.div``;
