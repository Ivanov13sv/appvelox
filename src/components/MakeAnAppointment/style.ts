import styled, { css } from 'styled-components';
import DatePicker from 'react-datepicker';
import calendary from 'assets/img/icons/calendary.svg';

export const Wrapper = styled.section`
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

interface DatePickerProps {
	isDisabled: boolean;
}

// export const DateTimePicker = styled.div<DatePickerProps>`
// 	display: flex;
// 	width: 100%;

// 	box-shadow: 0px 0px 5px #abaaaf;
// 	align-items: center;
// 	border-radius: 5px;
// 	background: white;
// 	cursor: pointer;
// 	.react-datepicker-wrapper {
// 		height: 45px;
// 		width: 100%;
// 		display: flex;
// 		align-items: center;
// 		input {
// 			outline: none;
// 			cursor: pointer;
// 			background: inherit;
// 			padding: 0 12px;
// 			cursor: pointer;
// 			margin-right: 20px;
// 			background-image: url(${calendary}) no-repeat;
// 			&::placeholder {
// 				color: black;
// 				font-size: 16px;
// 			}
// 		}
// 	}

// 	svg {
// 		right: 5%;
// 		top: 50%;
// 		transform: translateX(-50%);
// 		color: ${({ theme }) => theme.color.accent};
// 	}

// 	${props =>
// 		props.isDisabled &&
// 		css`
// 			background: #dbdbdb;
// 			pointer-events: none;
// 			opacity: 0.7;
// 		`}
// `;
