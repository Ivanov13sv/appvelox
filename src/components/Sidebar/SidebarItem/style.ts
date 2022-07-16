import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface SidebarItemProps {
	isActive?: boolean | undefined;
	ref?: any;
}

export const SidebarItem = styled(NavLink)<SidebarItemProps>`
	text-decoration: none;
	height: 100%;
	display: flex;
	gap: 10px;
	height: 46px;
	align-items: center;
	width: 100%;
	color: white;

	svg {
		> * {
			fill: white;
		}
	}
	&:hover {
		svg {
			transform: scale(1.2);
		}
	}
`;

interface SidebarTextProps {
	isActive?: boolean;
}

export const SidebarText = styled.span<SidebarTextProps>`
	position: relative;
	z-index: 5;
	display: flex;
	gap: 14px;
	color: white;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	${props =>
		props.isActive &&
		css`
			color: ${({ theme }) => theme.color.accent};
			svg {
				> * {
					fill: ${({ theme }) => theme.color.accent};

				}
			}
		`}
`;
