import styled, { css } from 'styled-components';
import { IconButton } from '../IconButton';

export const InputWrapper = styled.div`
	position: relative;
`;

interface LabelProps {
	isFocus: boolean;
	// children: string;
}

export const Label = styled.label<LabelProps>`
	position: absolute;
	top: 20px;
	left: 15px;
	transform: translateY(-50%);
	pointer-events: none;
	transition: 0.3s ease;
	font-weight: 300;
	font-size: 16px;
	line-height: 17px;

	z-index: 2;

	${props =>
		props.isFocus &&
		css`
			top: 0px;
			left: 10px;
			font-size: 13px;
			padding: 0 5px;
			border-radius: 15px;
			background: white;
		`}
`;

export const Input = styled.input`
	width: 100%;
	height: 40px;
	border: 0.5px solid #000000;
	border-radius: 5px;
	outline: none;
	font-size: 16px;
	padding: 0 10px;
`;

interface PasswordIconProps {
	isShowedPass: boolean;
}

export const PasswordIcon = styled.div<PasswordIconProps>`
	position: absolute;
	top: 50%;
	right: 5%;
	transform: translateY(-100%);

	&::after {
		transition: .3s ease;
		content: '';
		position: absolute;
		/* background: ${({theme}) => theme.color.accent}; */
		background: black;
		height: 1px;
		width: 120%;
		transform: rotate(45deg) translateY(-50%);
		top: 50%;
		left: -10%;
		opacity: 0;
		pointer-events: none;
	}
	${props =>
		props.isShowedPass &&
		css`
			&::after {
				opacity: 1;
			}
		`}
`;
