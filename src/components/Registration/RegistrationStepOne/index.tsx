import { Button } from 'components/UI/Button';
import { Checkbox } from 'components/UI/Checkbox';
import { Input } from 'components/UI/Input';
import { NavLink } from 'react-router-dom';
import React from 'react';
import * as S from './style';

export const RegistrationStepOne = () => {
	return (
		<>
			<Input label="Почта" type="text" />
			<Input label="Телефон" />
			<Input label="Пароль" />
			<Input label="Повторите пароль" />
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
			<Button as={NavLink} to="step2">
				Далее
			</Button>
		</>
	);
};
