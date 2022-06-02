import { RegistrationStatus } from 'components/UI/RegistrationStatus';
import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import * as S from './style';

export const RegistrationLayout = () => {
	return (
		<S.Layout>
			<h2>Регистрация</h2>
			<p>
				У вас уже есть аккаунт? <Link to="/login">Войти</Link>{' '}
			</p>
            <RegistrationStatus />
			<Outlet />
		</S.Layout>
	);
};
