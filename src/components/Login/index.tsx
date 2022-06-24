import { FormEvent, useEffect, useState } from 'react';
import { Button } from 'components/UI/Button';
import { useInput } from 'hooks/useInput';
import { Input } from 'components/UI/Input';
import { NavLink, useNavigate } from 'react-router-dom';
import { useActions } from 'hooks/useActions';
import { useDispatch } from 'react-redux';

import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

import * as S from './style';
import { Notice } from 'components/UI/Notice';
import { FullscreenSpiner } from 'components/UI/FullscreenSpiner';
import { useAppSelector } from 'hooks/useAppSelector';

export const Login = () => {
	const emailInput = useInput('');
	const passwordInput = useInput('');
	const { logIn } = useActions();
	const navigate = useNavigate();
	const { spiner } = useAppSelector(state => state);

	const handleLogin = (email: string, pass: string) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, pass)
			.then(({ user }) => {
				logIn({
					email: user.email,
					id: user.uid,
					//@ts-ignore
					token: user.accessToken,
				});
				navigate('/');
			})
			.catch(error => {
				emailInput.setErrorMessage('Неверный пользователь');
			});
	};

	const onChange = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		handleLogin(emailInput.value, passwordInput.value);
	};

	return (
		<>
			<S.LoginForm>
			

				<h1>Вход</h1>
				<p>
					У вас нет аккаунта? <NavLink to="/registration">Зарегистрироваться</NavLink>
				</p>

				<form onSubmit={onChange}>
					<Input
						{...emailInput}
						error={emailInput.errorMessage}
						type="text"
						label="Почта"
					/>
					<Input type="password" isPassword {...passwordInput} label="Пароль" />
					<p>
						Забыли пароль? <NavLink to="/recovery">Восстановить</NavLink>{' '}
					</p>
					<Button>Войти</Button>
				</form>
			</S.LoginForm>
		</>
	);
};
