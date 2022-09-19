import styled, { css } from 'styled-components';

export const InputWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
`;

interface LabelProps {
	isFocus: boolean;
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

	z-index: 1;

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

interface InputProps {
	isError?: boolean;
	showValue?: boolean;
}

export const Input = styled.input<InputProps>`
	width: 100%;
	height: 40px;
	border: 0.5px solid #000000;
	border-radius: 5px;
	outline: none;
	font-size: 16px;
	padding: 0 10px;
	transition: border .3s ease; 
	${props =>
		props.isError &&
		css`
			border: 0.5px solid red;
		`}
`;

interface PasswordIconProps {
	isShowedValue: boolean;

}

export const PasswordIcon = styled.div<PasswordIconProps>`
	position: absolute;
	top: 50%;
	right: 5%;
	transform: translateY(-50%);

	&::after {
		transition: 0.3s ease;
		content: '';
		position: absolute;
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
		props.isShowedValue &&
		css`
			&::after {
				opacity: 1;
			}
		`}
`;

export const ErrorMessage = styled.span`
	position: absolute;
	font-size: 12px;
	left: 5px;
	bottom: -15%;
	padding: 0 5px;
	border-radius: 15px;
	background: white;
	color: red;
	font-weight: 300;
	line-height: 17px;
	@media ${({theme}) => theme.media.phoneSM}{
		font-size: 13px;
		left: 10px;

	}
	@media ${({theme}) => theme.media.phoneMD}{
		font-size: 14px;
		left: 10px;

	}
`;
