import styled from 'styled-components';

export const Button = styled.button`
	height: 40px;
	background-color: ${({ theme }) => theme.color.accent};
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	display: flex;
	justify-content: center;
	align-items: center;
    border: none;
	color: #ffffff;
    border-radius: 5px;
    letter-spacing: .5px;
    padding: 0 15px;
`;
