import { FormEvent } from 'react';
import { Link, Outlet, useNavigate, Navigate, useLocation } from 'react-router-dom';
import { RegistrationStatus } from 'components/UI/RegistrationStatus';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useAppSelector';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import * as S from './style';

export const RegistrationLayout = () => {
	const { setSuccessReg, showNotice, resetRegForm } = useActions();
	const location = useLocation();

	const { loginData } = useAppSelector(state => state.registrationData);
	const { spinerOff, spinerOn } = useActions();
	const navigate = useNavigate();

	const handleRegister = (email: string, password: string) => {
		const auth = getAuth();
		spinerOn();
		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				setSuccessReg();
				spinerOff();
			})
			.catch(error => {
				spinerOff();
				if (/email-already-in-use/.test(error)) {
					navigate('/registration', {
						state: { error: 'Данная почта уже используется' },
					});
				}
			})
			.finally(() => {
				spinerOff();
			});
	};

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (loginData) {
			handleRegister(loginData.email, loginData.password);
		}
	};

	return (
		<S.Layout>
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
