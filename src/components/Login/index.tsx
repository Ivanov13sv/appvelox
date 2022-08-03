import { FormEvent } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { useInput } from 'hooks/useInput';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useAppSelector';
import { Button } from 'components/UI/Button';
import { Input } from 'components/UI/Input';
import { FullscreenSpiner } from 'components/UI/FullscreenSpiner';
import { auth } from '../../firebase';

import * as S from './style';

export const Login = () => {
	const { isLoading } = useAppSelector(state => state.spiner);
	const { spinerOn, spinerOff } = useActions();

	const emailInput = useInput('');
	const passwordInput = useInput('');
	const { logIn } = useActions();
	const navigate = useNavigate();

	const handleLogin = (email: string, pass: string) => {
		spinerOn();
		signInWithEmailAndPassword(auth, email, pass)
			.then(({ user }) => {
				logIn({
					email: user.email,
					id: user.uid,
					//@ts-ignore
					token: user.accessToken,
					avatar: user.photoURL as string
				});
				navigate('/');
			})
			.catch(error => {
				emailInput.setErrorMessage('Неверный пользователь');
			})
			.finally(() => spinerOff());
	};

	const onChange = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		handleLogin(emailInput.value, passwordInput.value);
	};

	if (isLoading) return <FullscreenSpiner />;

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
