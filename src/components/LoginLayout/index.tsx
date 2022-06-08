import { FC, useEffect, useState } from 'react';
import { ReactComponent as Eye } from 'assets/img/icons/VisuallyImpaired.svg';
import logo from 'assets/img/logo.png';
import welcome from 'assets/img/LoginImgs/welcome.jpg';
import registration from 'assets/img/LoginImgs/registration.png';
import { NavLink, useLocation } from 'react-router-dom';

import { Outlet } from 'react-router-dom';
import * as S from './style';

interface LoginLayoutProps {
	children?: JSX.Element;
}

export const LoginLayout: FC<LoginLayoutProps> = () => {
	const [imageTheme, setImageTheme] = useState('login');

	const location = useLocation();

	useEffect(() => {
		if (location.pathname === '/login') {
			setImageTheme('login');
		} else if (location.pathname === '/registration') {
			setImageTheme('registration');
		}
	}, [location.pathname]);


	return (
		<S.LoginWrapper>
			<S.LoginBody>
				<S.LoginHeader>
					<NavLink to="/">Портал пациента</NavLink>
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
			<S.ThemesRow>
				<S.Theme active={imageTheme === 'login'}>
					<h3>Добро пожаловать!</h3>
					<img src={welcome} alt="Login" />
					<p>Вместе с нами медицина стала проще!</p>
				</S.Theme>
				<S.Theme active={imageTheme === 'registration'}>
					<h3>Начните следить за своим здоровьем вместе с нами!</h3>
					<img src={registration} alt="registration" />
					<p>Вместе с нами медицина стала проще!</p>
				</S.Theme>
			</S.ThemesRow>
		</S.LoginWrapper>
	);
};
