import styled, { css } from 'styled-components';

export const StepAgreements = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	> div {
		font-weight: 300;
		font-size: 14px;
		line-height: 17px;
		display: flex;
		align-items: center;
		padding-bottom: 10px;
		> span {
			margin-left: 14px;
		}
	}

	li {
		font-style: normal;
		font-weight: 300;
		font-size: 14px;
		line-height: 17px;
		text-align: justify;
		color: #000000;
		position: relative;
		padding-left: 13px;
		margin-bottom: 10px;
		&:after {
			content: '';
			position: absolute;
			width: 5px;
			height: 0.1px;
			background: black;
			top: 50%;
			left: 0;
			transform: translateY(-50%);
		}
	}

	a {
		font-weight: 300;
		font-size: 14px;
		line-height: 17px;
		cursor: pointer;
		text-align: justify;
		text-decoration-line: underline;

		color: #50caff;
		&:hover {
			color: #0088ff;
		}
	}
`;

interface ErrorWarningProps{
	active: boolean;
}

export const ErrorWarning = styled.ul<ErrorWarningProps>`
	width: 300px;
	height: 300px;
	background: red;
	position: absolute;
	top: -100%;
	left: 13%;
	transition: all .3s ease;

	${props => props.active && css`
	top: 0;
	`}
`;
