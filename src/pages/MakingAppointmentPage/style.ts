import styled from 'styled-components';

export const AppointemntPage = styled.section`
	padding: 0 20px;
`;

export const Title = styled.h3``;

export const CardsList = styled.ul`
	display: flex;
	gap: 20px;
	align-items: center;
	flex-wrap: wrap;
`;

export const ShowMoreBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	span {
		font-weight: 400;
		font-size: 14px;
		line-height: 20px;
		color: #000000;
	}

	a {
		font-weight: 400;
		font-size: 14px;
		line-height: 20px;
		text-decoration-line: underline;
		cursor: pointer;
		color: #50caff;
	}
`;

export const PatientInfo = styled.section`
	padding-top: 35px;
	h3 {
		margin-bottom: 15px;
		font-weight: 400;
		font-size: 16px;
		line-height: 19px;
		color: #000000;
	}
`;

export const ECards = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;


`;
