import { Button } from 'components/UI/Button';
import { useInput } from 'hooks/useInput';
import { Input } from 'components/UI/Input';
import { Link } from 'react-router-dom';
import { RegistrationStatus } from 'components/UI/RegistrationStatus';

import * as S from './style';

export const Login = () => {
	const email = useInput('');
	const password = useInput('');

	return (
		<S.LoginForm>
			<h1>Вход</h1>
			<p>
				У вас нет аккаунта? <Link to="/registration">Зарегистрироваться</Link>
			</p>

			<form>
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
				<Button >Войти</Button>
			</form>
		</S.LoginForm>
	);
};
