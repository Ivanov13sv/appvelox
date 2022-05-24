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

export const SidebarMain = styled.ul<SidebarBodyProps>`
	display: flex;
	padding: 0 20px;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	position: relative;
	& > *:last-child {
		margin-top: 10px;
		width: 150px;
	}

	li {
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;
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

export const SidebarButton = styled.a`
	width: 150px;
	height: 40px;
	background-color: ${({ theme }) => theme.color.accent};
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px auto;
	color: #ffffff;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	transition: background-color 0.2s ease;
	cursor: pointer;
	&:hover {
		background-color: #5342b8;
	}
	&:active {
		background-color: #443694;
	}
`;

export const SidebarFooter = styled.div`
	padding: 0 20px;
	margin-top: auto;
	display: flex;
	flex-direction: column;
`;

export const SidebarFooterLogo = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: start;
	

	height: 46px;
	pointer-events: none;
	img {
		pointer-events: none;
	}
`;
