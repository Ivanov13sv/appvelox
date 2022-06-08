import { Button } from 'components/UI/Button';
import { Checkbox } from 'components/UI/Checkbox';
import { Input } from 'components/UI/Input';
import { NavLink } from 'react-router-dom';
import { useActions } from 'hooks/useActions';
import { useInput } from 'hooks/useInput';


import * as S from './style';

export const RegistrationStepOne = () => {
	const { setLoginInfo } = useActions();
	const email = useInput('');
	const phone = useInput('');
	const pass = useInput('');
	const repeatPass = useInput('');

	const setData = () => {
		setLoginInfo({
			loginDatas: {
				email: email.value,
				phone: phone.value,
				password: pass.value,
			},
		});
	};

	return (
		<>
			<Input {...email} label="Почта" type="text" />
			<Input {...phone} label="Телефон" />
			<Input {...pass} label="Пароль" />
			<Input {...repeatPass} label="Повторите пароль" />
			<S.StepAgreements>
				<div>
					<Checkbox /> <span>Я согласен на:</span>
				</div>
				<li>
					<a>Обработку персональных данных (ФЗ 152)</a>
				</li>
				<li>Передачу персональных данных третьим лицам</li>
				<li>Обращение для информирования и напоминания</li>
			</S.StepAgreements>
			<Button onClick={setData} as={NavLink} to="step2">
				Далее
			</Button>
		</>
	);
};
