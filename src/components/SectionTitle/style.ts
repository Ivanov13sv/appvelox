import styled from 'styled-components';

interface TitleProps {
	active: boolean;
}

export const Title = styled.h2<TitleProps>`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	color: #000000;
	position: absolute;
	transition: left 0.3s ease;
	left: ${props => (props.active ? 0 : '-100%')};
`;
