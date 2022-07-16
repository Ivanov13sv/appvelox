import styled from 'styled-components';

export const NavbarItem = styled.li`
	-webkit-backface-visibility: hidden; /* Chrome, Safari, Opera */
	backface-visibility: hidden;
	svg {
		transition: transform 0.2s ease;
		color: white;
	}
	&:hover {
		svg {
			transform: scale(1.3);
		}
	}
`;
