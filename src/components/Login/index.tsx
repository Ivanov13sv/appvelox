import { FormEvent, useEffect, useState } from 'react';
import { Button } from 'components/UI/Button';
import { useInput } from 'hooks/useInput';
import { Input } from 'components/UI/Input';
import { NavLink } from 'react-router-dom';
import { SuccessRegistration } from 'components/Registration/SuccessRegistration';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useAppSelector';

import * as S from './style';

export const Login = () => {
	const email = useInput('');
	const password = useInput('');

	const { logIn } = useActions();

	const onChange = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
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
					<Button onClick={() => logIn()} as={NavLink} to="/">
						Войти
					</Button>
				</form>
			</S.LoginForm>
		</>
	);
};
