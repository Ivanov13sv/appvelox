import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Status = styled.div`
	width: 437px;
	display: flex;
	justify-content: space-between;
	> *:last-child {
		&:before {
			display: none;
		}
	}

`;

export const Step = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
	position: relative;
	&:before {
		content: '';
		position: absolute;
		width: 40px;
		height: 2px;
		background-color: #C5C5C5;
		top: 30%;
		left: 100%;
		border-radius: 5px;
	}
`;

export const StepNumber = styled.div`
	background: transparent;
	width: 24px;
	height: 24px;

	font-weight: 300;
	font-size: 14px;
	overflow: hidden;
	color: #ffffff;

	border-radius: 50%;
	margin-bottom: 3px;

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		text-align: center;
		color: #C5C5C5;
	}
`;

export const StepText = styled.span`
	font-weight: 300;
	font-size: 14px;
	line-height: 17px;
	width: 100%;
	text-align: center;
	color: #C5C5C5;
`;
