import styled from 'styled-components';
import { IconButton } from 'components/UI/IconButton';

export const DropdownItem = styled.li`
	list-style: none;
	padding: 10px;
	display: flex;
	align-items: center;
	border-radius: 10px;
	transition: background-color 0.3s ease;
	height: 40px;
	cursor: pointer;
	&:hover {
		background-color: #36a2d0;
	}
`;

export const LeftIcon = styled.div`
	padding-right: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	svg {
		color: white;
	}
`;

export const RightIcon = styled(LeftIcon)`
	margin-left: auto;
`;

export const DropdownText = styled.span`
	color: white;
`;
