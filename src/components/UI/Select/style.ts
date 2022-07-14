import styled, { css } from 'styled-components';

export const Overlay = styled.div`
	position: fixed;
	width: 100vh;
	height: 100vh;
	background: red;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;

export const SelectBox = styled.div`
	display: flex;
	width: 300px;
	flex-direction: column;
	position: relative;
`;

interface isActiveProps {
	isActive: boolean;
	isDisabled?: boolean;
}

export const SelectedOption = styled.span<isActiveProps>`
	padding: 12px 24px;
	border-radius: 8px;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	box-shadow: 0px 0px 5px #abaaaf;
	height: 45px;
	align-items: center;

	svg {
		transition: transform 0.3s ease;
		color: ${({ theme }) => theme.color.darkenAccent};
		font-size: 20px;
	}
	${props =>
		props.isActive &&
		css`
			svg {
				transform: rotateX(180deg);
			}
		`}
	${props =>
		props.isDisabled &&
		css`
			background: #dbdbdb;
			pointer-events: none;
			opacity: 0.7;
		`}
`;

export const SelectIndicate = styled.div`
	width: 20px;
	height: 100%;
`;

export const OptionsContainer = styled.div<isActiveProps>`
	box-shadow: 0px 0px 5px #abaaaf;
	top: 50px;
	position: absolute;
	color: black;
	max-height: 0;
	width: 100%;
	opacity: 0;
	transition: all 0.4s;
	background: white;
	border-radius: 8px;
	overflow: hidden;
	z-index: 300;

	&::-webkit-scrollbar {
		width: 8px;
		background: #abaaaf;
		border-radius: 0 8px 8px 0;
	}

	&::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.color.accent};
		border-radius: 0 8px 8px 0;
	}

	${props =>
		props.isActive &&
		css`
			max-height: 150px;
			opacity: 1;
			overflow-y: scroll;
		`}
`;

export const Option = styled.div`
	padding: 12px 24px;
	cursor: pointer;

	input {
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		position: absolute;
	}

	&:hover {
		background: #ededed;
	}
`;
