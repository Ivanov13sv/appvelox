import styled, { css } from 'styled-components';

interface INavbarItem{
	newAction: boolean;
}

export const NavbarItem = styled.li<INavbarItem>`
	-webkit-backface-visibility: hidden; /* Chrome, Safari, Opera */
	backface-visibility: hidden;
	position: relative;
	svg {
		transition: transform 0.2s ease;
		color: white;
	}
	&:hover {
		svg {
			transform: scale(1.3);
		}
	}
	${props => props.newAction && css`
		&:after{
			content: '';
			position: absolute;
			right: 0;
			bottom: 15%;
			width: 5px;
			height: 5px;
			background-color: red;
			border-radius: 50%;
			pointer-events: none;	
		}
	`}
`;
