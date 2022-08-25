import styled from 'styled-components';

export const CardItemIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 133px;
	height: 100%;
	position: relative;
	z-index: 5;

	svg {
		> * {
			transition: all 0.3s ease;
			fill: #ebe7ff;
			stroke: #ebe7ff;
		}
	}

	&::after {
		transition: all 0.3s ease;
		content: '';
		width: 100%;
		height: 100%;
		top: 0;
		left: -100%;
		position: absolute;
		z-index: -1;
		background-color: ${({ theme }) => theme.color.secondary};
	}
`;

export const CardItemBody = styled.div`
	padding: 20px 36px;
	h4 {
		font-style: normal;
		font-weight: 400;
		font-size: 28px;
		line-height: 33px;
		position: relative;
		&::after {
			content: '';
			position: absolute;
			width: 100%;
			height: 2px;
			background: #ebe7ff;
			bottom: -10px;
			left: 0;
		}

		&::before {
			content: '';
			position: absolute;
			width: 0;
			height: 2px;
			background-color: ${({ theme }) => theme.color.secondary};
			bottom: -10px;
			right: 0;
			z-index: 5;
			transition: width 0.3s ease;
		}
	}

    p{
        margin-top: 25px;
        max-width: 324px;
    }

	ul {
		margin-top: 25px;
		li {
			position: relative;
			padding-left: 11px;
			font-weight: 400;
			font-size: 16px;
			line-height: 24px;
			&:not(last-child) {
				margin-bottom: 8px;
			}
			&::before {
				content: '';
                transition: background-color .3s ease;
				position: absolute;
				width: 4px;
				height: 4px;
				border-radius: 50%;
				background: #ebe7ff;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
			}
		}
	}
`;

export const ECardItem = styled.article`
	cursor: pointer;
	width: 540px;
	height: 183px;
	display: flex;
	box-shadow: 0px 0px 5px #ebe7ff;
	border-radius: 5px;
	overflow: hidden;
    transition: transform .3s ease;
	&:hover {
		${CardItemIcon} {
			svg {
				> * {
					fill: white;
					stroke: white;
				}
			}
			&::after {
				left: 0;
			}
		}

		${CardItemBody} {
			h4 {
				&::before {
					width: 100%;
				}
			}

			li {
				&::before {
					background-color: ${({ theme }) => theme.color.secondary};
				}
			}
		}
	}


`;
