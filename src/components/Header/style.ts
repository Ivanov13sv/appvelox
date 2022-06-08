import styled from 'styled-components';

export const Header = styled.header`
	background-color: ${({ theme }) => theme.color.secondary};
	height: 55px;
	padding: 0 40px;
	grid-area: header;


`;

export const HeaderBody = styled.section`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const ProfileTitle = styled.h2`
	font-family: 'Rubik';
	font-style: normal;
	font-weight: 400;
	font-size: 28px;
	line-height: 33px;
	color: #ffffff;
`;

export const HeaderList = styled.ul`
	display: flex;
`;

export const ListItem = styled.li``;

export const ProfileImage = styled.div``;
