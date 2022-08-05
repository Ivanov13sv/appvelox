import { FormEvent, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { RegistrationStatus } from 'components/UI/RegistrationStatus';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useAppSelector';
import { doc, setDoc } from 'firebase/firestore';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from '../../firebase';
import * as S from './style';

export const RegistrationLayout = () => {
	const { setSuccessReg, resetRegForm } = useActions();

	const { user } = useAppSelector(state => state.regFields);
	const { spinerOff, spinerOn } = useActions();
	const navigate = useNavigate();

	const handleRegister = (email: string, password: string) => {
		const auth = getAuth();
		spinerOn();
		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user: { uid } }) => {
				const userData = { ...user, dOb: new Date(user.dOb as number) };
				setSuccessReg();
				spinerOff();
				setDoc(doc(db, 'user', uid), userData);
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
		if (user.email && user.password) {
			handleRegister(user.email, user.password);
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
