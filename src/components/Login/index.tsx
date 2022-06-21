import { FormEvent, useEffect, useState } from 'react';
import { Button } from 'components/UI/Button';
import { useInput } from 'hooks/useInput';
import { Input } from 'components/UI/Input';
import { NavLink, useNavigate } from 'react-router-dom';
import { useActions } from 'hooks/useActions';
import { useDispatch } from 'react-redux';

import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

import * as S from './style';

export const Login = () => {
	const email = useInput('');
	const password = useInput('');
	const dispatch = useDispatch();
	const { logIn } = useActions();
	const navigate = useNavigate();

	const handleLogin = (email: string, password: string) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				console.log('login')
				// logIn({
				// 	email: user.email,
				// 	id: user.uid,
				// 	//@ts-ignore
				// 	token: user.accessToken,
				// });
			})
			.catch(console.error);
	};

	const onChange = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		handleLogin(email.value, password.value);
		navigate('/');
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
						{...email}
						type="text"
						placeholder="+7-999-999-99"
						label="Почта или телефон"
					/>
					<Input type="password" isPassword {...password} label="Пароль" />
					<p>
						Забыли пароль? <NavLink to="/recovery">Восстановить</NavLink>{' '}
					</p>
					<Button>Войти</Button>
				</form>
			</S.LoginForm>
		</>
	);
};
