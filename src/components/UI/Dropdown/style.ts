import styled, { css, keyframes } from 'styled-components';

const opening = keyframes`
0%{
	opacity: 0;
	top: 45px;
	transform: translateX(-10%);


}

100%{
	top: 50px;
	transform: translateX(-20%);

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
	right: 0;
	overflow: hidden;
	transition: all 0.3s ease;

	transform: translateX(-20%);
	padding: 1rem;
	animation: ${opening} 0.1s linear;
	display: flex;
	overflow: hidden;
	/* z-index: 500; */
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

export const Title = styled.h5`
	text-align: center;
	color: white;
	font-weight: 400;
	font-size: 16px;
	padding-bottom: 10px;
`;

export const Overlay = styled.div`
	z-index: 500;
	position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
`;
