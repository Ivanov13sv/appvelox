import styled, { css } from 'styled-components';

interface SidebarItemProps {
	isActive: boolean | undefined;
}

export const SidebarItem = styled.li<SidebarItemProps>`
	width: 100%;
	position: relative;
	z-index: 10;
	height: 46px;
	padding: 14px 10px;
	display: flex;
	align-items: center;
	cursor: pointer;
	span {
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;
	}
	a {
		margin-right: 14px;
	}

	svg {
		> * {
			fill: white;
		}
	}

	${props =>
		props.isActive &&
		css`
			span {
				color: ${({ theme }) => theme.color.accent};
			}
			svg {
				> * {
					fill: ${({ theme }) => theme.color.accent};
				}
			}
		`}
`;
