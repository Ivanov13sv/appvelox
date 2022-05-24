import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

export const IconButton = styled.span`
	width: 20px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: transform .3s;
	cursor: pointer;
	&:hover{
		transform: scale(1.2);
	}
`;
