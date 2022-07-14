import styled, { keyframes } from 'styled-components';

const appearance = keyframes`
0%{
	opacity: 0;
	transform: scale(.75)
}

100%{
	opacity: 1;
	transform: scale(1)
}
`;

export const Overlay = styled.div`
	z-index: 500;
	position: fixed;
	top: 0px;
	left: 0px;
	width: 100vw;
	height: 100vh;

	background-color: rgba(0, 0, 0, 0.4);
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Modal = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 60vw;
	height: 50vh;
	background: white;
	transition: 0.3s all;
	opacity: 1;
	animation: ${appearance} linear 0.1s;
	border-radius: 5px;
`;
