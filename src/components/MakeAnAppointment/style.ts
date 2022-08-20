import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const Wrapper = styled.section`
width: 100%;
height: 100%;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.h2`
	text-align: center;
	font-weight: 300;
	padding-bottom: 2rem;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
	input{
		border: none;
		box-shadow: 0px 0px 5px #abaaaf;
		width: 100%;

	}
`;

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


