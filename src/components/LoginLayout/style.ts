import { IconButton } from 'components/UI/IconButton';
// import { IconButton } from 'components/UI/IconButton/style';
import styled, { css } from 'styled-components';

export const LoginWrapper = styled.div`
	display: flex;
	height: 100%;
	justify-content: center;
`;

export const LoginBody = styled.div`
	width: 782px;
	padding: 0 40px 30px 40px;
	min-height: 100%;
	display: flex;
	flex-direction: column;
	flex: 1 1 60%;
`;


interface ThemeProps {
	active: boolean;
}


export const ThemesRow = styled.div`
	background-color: ${({ theme }) => theme.color.main};
	display: flex;
	width: 584px;
	position: relative;
	overflow: hidden;
`;

export const Theme = styled.div<ThemeProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	position: absolute;
	left: 50%;
	top: 50%;
	transition: .3s ease;
	transform: translate(100%, -50%);

	h3 {
		font-weight: 400;
		font-size: 28px;
		line-height: 33px;
		text-align: center;
		color: #ffffff;
	}

	> img {
		padding: 55px 0px;
	}

	> p {
		font-weight: 400;
		font-size: 16px;
		line-height: 19px;
		text-align: center;
		color: #ffffff;
	}
	${props =>
		props.active &&
		css`
			transform: translate(-50%, -50%);
		`}
`;

export const LoginHeader = styled.header`
	height: 79px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	span {
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 19px;
		pointer-events: none;
	}
	border-bottom: 1px solid #ebe7ff;

	> a {
		text-decoration: none;
		color: #000;
	}
`;

export const VisuallyImpaired = styled.a`
	position: relative;
	cursor: pointer;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	display: flex;
	align-items: center;
	overflow: hidden;
	padding: 10px 0;

	svg {
		margin-right: 14px;
	}
	color: ${({ theme }) => theme.color.accent};
	&::before {
		content: '';
		position: absolute;
		background-color: ${({ theme }) => theme.color.accent};
		top: 0;
		right: -100%;
		width: 100%;
		height: 1px;
		transition: right 0.3s ease;
	}

	&::after {
		content: '';
		position: absolute;
		background-color: ${({ theme }) => theme.color.accent};
		bottom: 0;
		left: -100%;
		width: 100%;
		height: 1px;
		transition: left 0.3s ease;
	}

	&:hover {
		&::before {
			right: 0;
		}
		&::after {
			left: 0;
		}
	}
`;

export const LoginMain = styled.main`
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const LoginForm = styled.section`
	margin: 0 auto;
	width: 347px;
	display: flex;

	flex-direction: column;
	h1 {
		font-weight: 300;
		font-size: 28px;
		line-height: 33px;
		text-align: center;
		margin-bottom: 15px;
	}

	p {
		text-align: center;
		margin-bottom: 34px;
		font-weight: 300;
		font-size: 14px;
		line-height: 17px;
		a {
			font-weight: 300;
			font-size: 14px;
			line-height: 17px;
			text-decoration-line: underline;
			color: #50caff;
			&:hover {
				color: #0088ff;
			}

			&:focus {
				color: #001eff;
			}
		}
	}

	form {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	input {
		margin-bottom: 20px;
	}
`;

export const LoginFooter = styled.footer``;
