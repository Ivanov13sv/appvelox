import styled from 'styled-components';
import { IconButton } from 'components/UI/IconButton';

export const ListItem = styled.div`
	list-style: none;
	padding: 10px;
	-webkit-touch-callout: none;
	-webkit-tap-highlight-color: transparent;
	cursor: pointer;
	display: flex;
	align-items: center;

`;

export const LeftIcon = styled.div`
	padding-right: 10px;
	display: flex;
	align-items: center;
	justify-content: center;

	/* svg {
		stroke: red;
	} */
`;

export const RightIcon = styled(LeftIcon)`
	margin-left: auto;
`;

export const ListItemText = styled.span`
	width: 100%;
	color: white;
`;
