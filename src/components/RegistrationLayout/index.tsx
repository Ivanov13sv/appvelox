import { SuccessRegistration } from 'components/Registration/SuccessRegistration';
import { RegistrationStatus } from 'components/UI/RegistrationStatus';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useAppSelector';
import React, { FormEvent, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import * as S from './style';

export const RegistrationLayout = () => {
	const { setSuccessReg, hideSuccessReg, resetRegForm } = useActions();
	const { successReg } = useAppSelector(state => state.successReg);
	const user = useAppSelector(state => state.user);

	const navigate = useNavigate();
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData();

		setSuccessReg();

		formData.append('caty', '13');
		console.log('submited');
		resetRegForm()

	};

	useEffect(() => {
		if (successReg) {
			setTimeout(() => {
				hideSuccessReg();
				navigate('/login', {replace: true});
			}, 1600);
		}
	}, [successReg, hideSuccessReg, navigate]);

	return (
		<S.Layout>
			{successReg && <SuccessRegistration />}
			<h2>Регистрация</h2>
			<p>
				У вас уже есть аккаунт? <Link to="/login">Войти</Link>{' '}
			</p>
			<RegistrationStatus />
			<form onSubmit={onSubmit}>
				<Outlet />
			</form>
		</S.Layout>
	);
};
