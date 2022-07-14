import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const DateTimePicker = styled(DatePicker)`
	width: 100%;
	height: 45px;
	padding: 0 24px;
	border-radius: 5px;
	box-shadow: 0px 0px 5px #abaaaf;
	outline: none;
	border: none;
	font-size: 16px;

	input::placeholder {
		color: red;
	}

	&:disabled {
		background: #dbdbdb;
		pointer-events: none;
		opacity: 0.7;
		&::placeholder {
			color: black;
		}
	}
`;
