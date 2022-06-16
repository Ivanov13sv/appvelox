import styled from 'styled-components';

export const Button = styled.button`
	height: 40px;
	background-color: ${({ theme }) => theme.color.accent};
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	display: flex;
	text-decoration: none;
	justify-content: center;
	align-items: center;
	border: none;
	color: #ffffff;
	border-radius: 5px;
	letter-spacing: 0.5px;
	padding: 0 15px;
	cursor: pointer;
	transition: background-color 0.3s ease;
	&:hover,
	&:focus {
		background-color: ${({ theme }) => theme.color.darkenAccent};
	}
	&:disabled{
		border: 1px solid red;
	}
`;
