import styled from 'styled-components';

export const IconButton = styled.div`
	width: 20px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: transform 0.3s;
	cursor: pointer;
	&:hover {
		transform: scale(1.2);
	}

`;
