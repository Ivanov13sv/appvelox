import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface TitleProps {
	active: boolean;
}

export const Title = styled.h2<TitleProps>`
padding-left: 10px;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	color: ${({theme}) => theme.color.text};
	position: absolute;
	transition: left 0.3s ease;
	left: ${props => (props.active ? 0 : '-100%')};
`;


export const Icon = styled(NavLink)`
	display: inline-block;
	margin-right: 10px;
	cursor: pointer;
	position: absolute;
	left: -35%;

`;
