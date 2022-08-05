import styled, { css } from 'styled-components';
import DatePicker from 'react-datepicker';

interface DatepickerProps {
	isError: boolean;
}

export const DateTimePicker = styled(DatePicker)<DatepickerProps>`
	width: 100%;
	height: 45px;
	padding: 0 24px;
	border-radius: 5px;
	border: 1px solid black;
	outline: none;
	font-size: 16px;

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
`;
