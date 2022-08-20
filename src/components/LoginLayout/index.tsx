import { FC, useEffect, useState } from 'react';
import { ReactComponent as Eye } from 'assets/img/icons/VisuallyImpaired.svg';
import logo from 'assets/img/logo.png';
import welcome from 'assets/img/LoginImgs/welcome.jpg';
import registration from 'assets/img/LoginImgs/registration.png';
import { Navigate, NavLink, useLocation } from 'react-router-dom';
import { useAppSelector } from 'hooks/useAppSelector';
import { Outlet } from 'react-router-dom';
import { useActions } from 'hooks/useActions';
import * as S from './style';

interface LoginLayoutProps {
	children?: JSX.Element;
}

export const LoginLayout: FC<LoginLayoutProps> = () => {
	const [imageTheme, setImageTheme] = useState('login');
	const {
		authInfo: { token },
	} = useAppSelector(state => state.authInfo);
	const { resetRegForm } = useActions();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === '/login') {
			setImageTheme('login');
			resetRegForm();
		} else if (location.pathname === '/registration') {
			setImageTheme('registration');
		}
	}, [location.pathname, resetRegForm]);

	if (token) {
		return <Navigate to="/" state={{ from: location }} replace />;
	}

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
