import { FC } from 'react';
import { ReactComponent as Eye } from 'assets/img/icons/VisuallyImpaired.svg';
import logo from 'assets/img/logo.png';
import welcome from 'assets/img/LoginImgs/welcome.jpg';

import { Outlet } from 'react-router-dom';
import * as S from './style';

interface LoginLayoutProps {
	children?: JSX.Element;
}

export const LoginLayout: FC<LoginLayoutProps> = () => {
	return (
		<S.LoginWrapper>
			<S.LoginBody>
				<S.LoginHeader>
					<span>Портал пациента</span>
					<S.VisuallyImpaired>
						<Eye />
						Версия для слабовидящих
					</S.VisuallyImpaired>
				</S.LoginHeader>
				<S.LoginMain>
					<Outlet />
				</S.LoginMain>
				<S.LoginFooter>
					<img src={logo} alt="logo" />
				</S.LoginFooter>
			</S.LoginBody>
			<S.LoginImage>
				<S.ImageWrapper>
					<h3>Добро пожаловать!</h3>
					<img src={welcome} alt="Login" />
				</S.ImageWrapper>
			</S.LoginImage>
		</S.LoginWrapper>
	);
};
