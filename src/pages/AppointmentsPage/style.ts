import styled from 'styled-components';

export const Appointments = styled.section`
	
`;

export const AppointmentsBody = styled.div`
	display: flex;
	gap: 40px;
    padding: 0 20px;
`;

export const CardsList = styled.ul`
	display: flex;
	flex-direction: column;

    padding: 3px;
	gap: 15px;
	max-height: 646px;
	overflow-y: auto;
    min-width: 503px;

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
`;

export const Calendary = styled.div`
	height: 481px;
	background: green;
	flex: 1 1 100%;
`;

export const CardListWrapper = styled.div`

`