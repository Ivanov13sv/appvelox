import styled from 'styled-components';

export const DropdownItem = styled.li`

	padding: 10px;
	display: flex;
	align-items: center;
	border-radius: 10px;
	transition: background-color 0.3s ease;
	height: 40px;
	cursor: pointer;

	svg {
		> * {
			color: white;

		}

	}

	span {
		padding-left: 10px;
	}

	&:hover {
		background-color: #36a2d0;
	}
`;


