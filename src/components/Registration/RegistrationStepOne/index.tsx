import { Button } from 'components/UI/Button';
import { Checkbox } from 'components/UI/Checkbox';
import { Input } from 'components/UI/Input';
import { NavLink, useNavigate } from 'react-router-dom';
import { useActions } from 'hooks/useActions';
import { useInput } from 'hooks/useInput';
import { useAppSelector } from 'hooks/useAppSelector';
import { getMaskedPhone } from 'utils/phoneMask';

import * as S from './style';
import { useEffect, useState } from 'react';

export const RegistrationStepOne = () => {
	const { loginData } = useAppSelector(state => state.user);
	const { setLoginInfo } = useActions();

	const email = useInput(loginData?.email, { isEmail: true });
	const phone = useInput(loginData?.phone, { isEmpty: true, isPhone: true });
	const pass = useInput(loginData?.password, { isPassword: true });
	const repeatPass = useInput(loginData?.password);

	const [validForm, setValidForm] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		if (
			email.errorMessage ||
			phone.errorMessage ||
			pass.errorMessage ||
			repeatPass.errorMessage
		) {
			setValidForm(false);
		} else {
			setValidForm(true);
		}
	}, [email.errorMessage, phone.errorMessage, pass.errorMessage, repeatPass.errorMessage]);

	const setData = () => {
		// if (validForm) {
		// 	setLoginInfo({
		// 		loginData: {
		// 			email: email.value,
		// 			phone: phone.value,
		// 			password: pass.value,
		// 		},
		// 	});
		// }
		email.isDirty = true;

		// navigate('step2');
	};

	console.log(validForm);

	return (
		<>
			<Input {...email} label="Почта" type="text" />
			{email.isDirty && email.errorMessage && <h2>{email.errorMessage}</h2>}
			<Input
				value={phone.value}
				placeholder="+7 (999) 999-99-99"
				onBlur={phone.onBlur}
				onChange={e => getMaskedPhone(e, phone.setValue)}
				label="Телефон"
			/>
			{phone.isDirty && phone.errorMessage && <h2>{phone.errorMessage}</h2>}
			<Input {...pass} label="Пароль" />
			{pass.isDirty && pass.errorMessage && <h2>{pass.errorMessage}</h2>}
			<Input {...repeatPass} label="Повторите пароль" />
			<S.StepAgreements>
				<div>
					<Checkbox /> <span>Я согласен на:</span>
				</div>
				<li>
					<NavLink to="#">Обработку персональных данных (ФЗ 152)</NavLink>
				</li>
				<li>Передачу персональных данных третьим лицам</li>
				<li>Обращение для информирования и напоминания</li>
			</S.StepAgreements>
			<Button type='button' onClick={() => setData()}>Далее</Button>
		</>
	);
};
