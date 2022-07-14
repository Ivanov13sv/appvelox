import styled, { keyframes } from 'styled-components';

export const Section = styled.section`
	padding: 1rem;
	/* display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column; */
`;

export const Body = styled.div`
	padding: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
`;

export const Card = styled.article`
	padding: 1rem;
	border-radius: 10px;
	z-index: 11;
`;

export const PersonalInfo = styled.div`
	img {
		width: 500px;
		border-radius: 5px;
		height: 400px;
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

const moving = keyframes`
0%{
    transform: translateX(0);
}

50%{
    transform: translateX(-50%);

}

100%{
    transform: translateX(0);
}
`;

export const BackButton = styled.div`
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	gap: 10px;
	color: grey;
	svg {
		color: grey;
	}
	&:hover {
		color: black;
		svg {
			color: black;
			animation: ${moving} 0.5s infinite;
		}
	}
`;
