import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';

export const DropdownButton = styled.div`
	width: 16px;
	height: 16px;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		> * {
			transition: transform .4s ease-in-out;
			transform: scale(1.2);
		}
	}
`;

export const DownButton = styled(MdKeyboardArrowDown)`
	color: ${({ theme }) => theme.color.secondary};
	> * {
		width: 10px;
	}
`;
