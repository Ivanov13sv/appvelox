import styled, { css, keyframes } from 'styled-components';

export const WrapperCheckbox = styled.label`
	-webkit-touch-callout: none;
	-webkit-tap-highlight-color: transparent;
	cursor: pointer;
	width: 20px;
	height: 20px;
	position: relative;
	/* input {
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		position: absolute;
		&:checked + span {
			background-color: ${({ theme }) => theme.color.accent};
		}
		&:checked + span:after {
			opacity: 1;
		}
		&:checked + span:before {
			opacity: 1;
		}

	} */
	span {
		position: absolute;
		width: 100%;
		height: 100%;
		box-shadow: 0 0 0 0.1em ${({ theme }) => theme.color.accent};
		border-radius: 5px;
		background-color: white;
		transition: 0.3s;
		&::after,
		&::before {
			content: '';
			position: absolute;
			height: 10%;
			background: white;
			transition: opacity 0.3s ease;
			opacity: 0;
		}
		&::after {
			top: 50%;
			transform: translate(-50%, -50%) rotate(-45deg);
			left: 65%;
			width: 80%;
			border-radius: 0 5px 5px 0;
		}
		&::before {
			top: 55%;
			transform: rotate(45deg);
			left: 0;
			width: 50%;
			border-radius: 5px 0 0 5px;
		}
	}
	&:hover {
		span {
			background: #d8d1ff;
		}
	}
`;

interface InputProps {
	error: boolean;
}

export const Input = styled.input<InputProps>`
	appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	position: absolute;
	&:checked + span {
		background-color: ${({ theme }) => theme.color.accent};
	}
	&:checked + span:after {
		opacity: 1;
	}
	&:checked + span:before {
		opacity: 1;
	}

	${props =>
		props.error &&
		css`
			& + span {
				box-shadow: 0 0 0 0.1em red;
			}
		`}
`;
