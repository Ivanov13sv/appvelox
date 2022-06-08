import React, { useRef, useEffect } from 'react';
import { Input } from 'components/UI/Input';
import { Button } from 'components/UI/Button';
import { NavLink } from 'react-router-dom';
import { useActions } from 'hooks/useActions';
import { useInput } from 'hooks/useInput';
import * as S from './style';

export const RegistrationStepTwo = () => {
	const secondName = useInput('');
	const firstName = useInput('');
	const patronymic = useInput('');
	const registrationAddress = useInput('');
	const gender = useInput('male');
	const dateRef = useRef<HTMLInputElement>(null);
	const residentialAddress = useInput('');

	const { setPersonalInfo } = useActions();

	const pickGender = () => {
		gender.value === 'male' ? gender.setValue('female') : gender.setValue('male');
	};

	const setData = () => {
		if (dateRef.current) {
			setPersonalInfo({
				personalInfo: {
					secondName: secondName.value,
					firstName: firstName.value,
					patronymic: patronymic.value,
					registrationAddress: registrationAddress.value,
					gender: gender.value,
					dOb: dateRef.current?.value && dateRef.current?.value,
					residentialAddress: residentialAddress.value,
				},
			});
		}
	};

	return (
		<>
			<Input {...secondName} label="Фамилия" />
			<Input {...firstName} label="Имя" />
			<Input {...patronymic} label="Отчество" />
			<Input {...registrationAddress} label="Адрес регистрации" />
			<S.Fieldset>
				<S.RadioLabel>Пол:</S.RadioLabel>
				<S.RadioGroup>
					<S.Radio>
						<input
							onChange={pickGender}
							checked={gender.value === 'male'}
							type="radio"
							name="gender"
						/>
						<span>М</span>
					</S.Radio>
					<S.Radio>
						<input
							onChange={pickGender}
							checked={gender.value === 'female'}
							type="radio"
							name="gender"
						/>
						<span>Ж</span>
					</S.Radio>
				</S.RadioGroup>
				<input ref={dateRef} className="date" type="date" />
			</S.Fieldset>

			<Input {...residentialAddress} label="Адрес места жительства" />
			<Button onClick={setData} as={NavLink} to="/registration/step3">
				Далее
			</Button>
		</>
	);
};
