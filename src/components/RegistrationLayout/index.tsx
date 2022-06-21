import { SuccessRegistration } from 'components/Registration/SuccessRegistration';
import { RegistrationStatus } from 'components/UI/RegistrationStatus';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useAppSelector';
import React, { FormEvent, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import * as S from './style';

export const RegistrationLayout = () => {
	const { setSuccessReg, hideSuccessReg, logIn } = useActions();
	const { successReg } = useAppSelector(state => state.successReg);
	const { loginData, personalInfo, representativeInfo } = useAppSelector(
		state => state.registrationData
	);
	const { email, id, token } = useAppSelector(state => state.userAuth);

	const handleRegister = (email: string, password: string) => {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				logIn({
					email: user.email,
					id: user.uid,
					//@ts-ignore
					token: user.accessToken,
				});
			})
			.catch(console.error);
	};

	const navigate = useNavigate();
	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (loginData) {
			handleRegister(loginData.email, loginData.password);
			// console.log('registartionData - ' + JSON.stringify(user));
		}
	};

	useEffect(() => {
		if (successReg) {
			setTimeout(() => {
				hideSuccessReg();
				navigate('/login', { replace: true });
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
			{/* <form onSubmit={onSubmit}> */}
			<form onSubmit={onSubmit}>
				<Outlet />
			</form>
		</S.Layout>
	);
};
