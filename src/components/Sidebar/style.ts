import styled, { css } from 'styled-components';

export const Sidebar = styled.div`
	grid-area: side;
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: ${({ theme }) => theme.color.main};

`;

export const SidebarTop = styled.div``;

export const SidebarLogo = styled.h2`
	padding: 20px;
	color: ${({ theme }) => theme.color.bg};
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	width: 100%;
	height: 55px;
`;

interface SidebarBodyProps {
	active?: boolean;
}

export const SidebarMain = styled.div<SidebarBodyProps>`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	position: relative;

	& > *:last-child {
		/* margin-top: 10px; */
		margin: 10px 0 0 20px;
		width: 150px;
	}

	a{
		padding: 0 20px;
	}
`;

export const SidebarActiveItem = styled.div`
	background-color: white;
	position: absolute;
	width: 100%;
	transition: all 0.3s ease;
	z-index: 1;
	left: 0;
`;



export const SidebarFooter = styled.div`
	margin-top: auto;
	display: flex;
	flex-direction: column;
	a{
		padding: 0 20px;
	}
`;

export const SidebarFooterLogo = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: start;
	padding: 0 20px;
	

	height: 46px;
	pointer-events: none;
	img {
		pointer-events: none;
	}
`;
