import styled, { css } from 'styled-components';
import DatePicker from 'react-datepicker';
import { DatepickerProps } from './index';

export const DatePickerWrapper = styled.div`
	
    z-index: 10;
	width: 100%;
`;

export const DateTimepicker = styled(DatePicker)<DatepickerProps>`
	width: 100%;
	height: 45px;
	padding: 0 10px;
	text-align: center;
	border-radius: 5px;
	border: 1px solid black;
	outline: none;
	font-size: 14px;
	position: relative;
	&.react-datepicker__month-container {
		z-index: 50;
	}
	&:disabled {
		background: #dbdbdb;
		pointer-events: none;
		opacity: 0.7;
		&::placeholder {
			color: black;
		}
	}
	${props =>
		props.isError &&
		css`
			border: 1px solid red;
		`}
	@media ${({theme}) => theme.media.phoneMD}{
		font-size: 16px;
	}
`;
