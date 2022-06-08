import { FormEvent, useEffect, useState } from 'react';
import { Button } from 'components/UI/Button';
import { useInput } from 'hooks/useInput';
import { Input } from 'components/UI/Input';
import { Link } from 'react-router-dom';
import { SuccessRegistration } from 'components/Registration/SuccessRegistration';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useAppSelector';

import * as S from './style';

export const Login = () => {
	const email = useInput('');
	const password = useInput('');

	const { successReg } = useAppSelector(state => state.successReg);
	const user = useAppSelector(state => state.user);
	const { hideSuccessReg } = useActions();

	useEffect(() => {
		if (successReg) {
			setTimeout(() => {
				hideSuccessReg();
			}, 2000);
		}
	}, [successReg, hideSuccessReg]);

	const onChange = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
	};

	console.log(user);

	return (
		<>
			{successReg && <SuccessRegistration />}
			<S.LoginForm>
				<h1>Вход</h1>
				<p>
					У вас нет аккаунта? <Link to="/registration">Зарегистрироваться</Link>
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
						Забыли пароль? <a href="#">Восстановить</a>{' '}
					</p>
					<Button>Войти</Button>
				</form>
			</S.LoginForm>
		</>
	);
};
