import React from 'react';
import { Input } from 'components/UI/Input';
import { Button } from 'components/UI/Button';
import { NavLink } from 'react-router-dom';
import * as S from './style';

export const RegistrationStepTwo = () => {
	return (
		<>
			<Input label="Фамилия" />
			<Input label="Имя" />
			<Input label="Отчество" />
			<Input label="Адрес регистрации" />
			<S.Fieldset>
				<S.RadioLabel>Пол:</S.RadioLabel>
				<S.RadioGroup>
					<S.Radio>
						<input type="radio" name="gender" />
						<span>М</span>
					</S.Radio>
					<S.Radio>
						<input type="radio" name="gender" />
						<span>Ж</span>
					</S.Radio>
				</S.RadioGroup>
				<input className="date" type="date"/>
			</S.Fieldset>

			<Input label="Адрес места жительства" />
			<Button as={NavLink} to="/registration/step3">
				Далее
			</Button>
		</>
	);
};
