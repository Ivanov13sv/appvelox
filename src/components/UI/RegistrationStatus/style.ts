import styled, { css } from 'styled-components';

interface StatusProps {
	active?: boolean;
	done?: boolean;
}

export const Status = styled.div`
	width: 437px;
	display: flex;
	justify-content: space-between;
	> *:last-child {
		&:before {
			display: none;
		}
	}
`;

export const Step = styled.div<StatusProps>`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;

	&:before {
		content: '';
		position: absolute;
		width: 40px;
		height: 2px;
		background-color: #C5C5C5;
		top: 30%;
		left: 100%;
		border-radius: 5px;
	}
	&:after {
		transition: .3s ease;
		content: '';
		position: absolute;
		width: 0;
		height: 2px;
		background-color: ${({ theme }) => theme.color.accent};
		top: 30%;
		left: 100%;
		border-radius: 5px;
	}
	>span{
		font-weight: 300;
		font-size: 14px;
		line-height: 17px;
		width: 100%;
		text-align: center;
		color: #c5c5c5;
	}
	
	${props =>
		props.active &&
		css`
			>span{
				color: ${({ theme }) => theme.color.accent};
			}
			>div{
				button{
					color: white;
				}
		`}
	
	}

	${props =>
		props.done &&
		css`
			&:after {
				width: 40px;
			}
			> div {
				background-color: ${({ theme }) => theme.color.accent};
				button {
					color: white;
					cursor: pointer;
				}
			}
			> span {
				color: ${({ theme }) => theme.color.accent};
			}
		`}
	


`;

export const StepNumber = styled.div<StatusProps>`
	background: transparent;
	width: 24px;
	height: 24px;
	font-weight: 300;
	font-size: 14px;
	overflow: hidden;
	color: #ffffff;
	border-radius: 50%;
	margin-bottom: 3px;
	position: relative;
	transition: box-shadow 0.125s ease;
	> button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		text-align: center;
		color: #c5c5c5;
		text-decoration: none;
		border: none;
		background: transparent;
	}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		background: ${({ theme }) => theme.color.accent};
		width: 0;
		height: 100%;
		transition: width 0.3s ease;
		z-index: -1;

	}
	${props =>
		props.active &&
		css`
			&::before {
				width: 100%;
			}
		`}
	${props =>
		props.done &&
		css`
		
			&:hover {
				box-shadow: 0 0 0 2px ${({theme}) => theme.color.darkenAccent};
			}
			&::before {
				width: 100%;
			}
		`}
`;
