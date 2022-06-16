import React, { useRef, useEffect } from 'react';
import { Input } from 'components/UI/Input';
import { Button } from 'components/UI/Button';
import { NavLink } from 'react-router-dom';
import { useActions } from 'hooks/useActions';
import { useInput } from 'hooks/useInput';
import { useAppSelector } from 'hooks/useAppSelector';

import * as S from './style';

export const RegistrationStepTwo = () => {
	const { personalInfo } = useAppSelector(state => state.user);

	const secondName = useInput(personalInfo?.secondName, { isEmail: true });
	const firstName = useInput(personalInfo?.firstName);
	const patronymic = useInput(personalInfo?.patronymic);
	const registrationAddress = useInput(personalInfo?.registrationAddress);
	const gender = useInput('male');
	const dateRef = useRef<HTMLInputElement>(null);
	const residentialAddress = useInput(personalInfo?.residentialAddress);

	const { setPersonalInfo } = useActions();

	const pickGender = () => {
		gender.value === 'male' ? gender.setValue('female') : gender.setValue('male');
	};

	console.log(secondName.isDirty);

	const setData = () => {
		if (dateRef.current) {
			setPersonalInfo({
				personalInfo: {
					secondName: secondName.value,
					firstName: firstName.value,
					patronymic: patronymic.value,
					registrationAddress: registrationAddress.value,
					gender: gender.value,
					dOb: dateRef.current?.value,
					residentialAddress: residentialAddress.value,
				},
			});
		}
	};

	return (
		<>
			<Input
				value={secondName.value}
				onChange={secondName.onChange}
				onBlur={secondName.onBlur}
				label="Фамилия"
			/>
			{(secondName.errorMessage && secondName.isDirty) && <h2>{secondName.errorMessage}</h2>}
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
