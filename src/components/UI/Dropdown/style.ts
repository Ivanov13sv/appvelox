import styled, { css, keyframes } from 'styled-components';

const opening = keyframes`
0%{
	opacity: 0;
	top: 45px;
	transform: translateX(-95%);
	/* transform: scale(0.9); */
}

100%{
	top: 50px;
	transform: translateX(-100%);
	/* transform: scale(1); */
	opacity: 1;
}
`;

export const Dropdown = styled.div`
	width: 300px;
	background: ${({ theme }) => theme.color.secondary};
	border: 2px solid white;
	border-radius: 5px;
	position: absolute;
	top: 50px;
	overflow: hidden;
	/* right: 0; */
	transform: translateX(-100%);
	padding: 1rem;
	animation: ${opening} 0.05s linear;
	display: flex;
	overflow: hidden;
	/* height: 300px; */
	transition: height .3s ease;

`;

interface MenuProps {
	menuOpen: boolean;
}

export const Menu = styled.ul<MenuProps>`
	left: 0;
	padding: 0 1rem;
	width: 100%;
	position: absolute;
	transform: translateX(-110%);
	transition: transform 0.3s ease;
	${props =>
		props.menuOpen &&
		css`
			transform: translateX(0);
		`}
`;

export const SecondaryMenu = styled(Menu)`
	transform: translateX(110%);
	${props =>
		props.menuOpen &&
		css`
			transform: translateX(0);
		`}
`;
