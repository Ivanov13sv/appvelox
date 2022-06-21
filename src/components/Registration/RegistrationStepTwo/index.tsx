import { useEffect, useState } from 'react';
import { Input } from 'components/UI/Input';
import { Button } from 'components/UI/Button';
import { useNavigate } from 'react-router-dom';
import { useActions } from 'hooks/useActions';
import { useInput } from 'hooks/useInput';
import { useAppSelector } from 'hooks/useAppSelector';

import * as S from './style';

export const RegistrationStepTwo = () => {
	const { personalInfo } = useAppSelector(state => state.registrationData);

	const secondName = useInput(personalInfo?.secondName, { isEmpty: true });
	const firstName = useInput(personalInfo?.firstName, { isEmpty: true });
	const patronymic = useInput(personalInfo?.patronymic, { isEmpty: true });
	const registrationAddress = useInput(personalInfo?.registrationAddress, { isEmpty: true });
	const gender = useInput('male');
	const date = useInput(personalInfo?.dOb, { isEmpty: true });
	const residentialAddress = useInput(personalInfo?.residentialAddress, { isEmpty: true });

	const [validForm, setValidForm] = useState(false);

	const navigate = useNavigate();
	const { setPersonalInfo } = useActions();

	useEffect(() => {
		if (
			firstName.errorMessage ||
			secondName.errorMessage ||
			patronymic.errorMessage ||
			registrationAddress.errorMessage ||
			residentialAddress.errorMessage ||
			date.errorMessage
		) {
			setValidForm(false);
		} else {
			setValidForm(true);
		}
	}, [
		firstName.errorMessage,
		secondName.errorMessage,
		patronymic.errorMessage,
		registrationAddress.errorMessage,
		residentialAddress.errorMessage,
		date.errorMessage,
	]);

	const pickGender = () => {
		gender.value === 'male' ? gender.setValue('female') : gender.setValue('male');
	};

	const setData = () => {
		if (validForm) {
			setPersonalInfo({
				personalInfo: {
					secondName: secondName.value,
					firstName: firstName.value,
					patronymic: patronymic.value,
					registrationAddress: registrationAddress.value,
					gender: gender.value,
					dOb: date.value,
					residentialAddress: residentialAddress.value,
				},
			});
			navigate('/registration/step3');
		} else {
			showRequiredFields();
		}
	};

	const showRequiredFields = () => {
		firstName.setDirty(true);
		secondName.setDirty(true);
		patronymic.setDirty(true);
		registrationAddress.setDirty(true);
		residentialAddress.setDirty(true);
		date.setDirty(true);
	};

	return (
		<>
			<Input
				value={secondName.value}
				onChange={secondName.onChange}
				onBlur={secondName.onBlur}
				label="Фамилия"
				error={secondName.isDirty ? secondName.errorMessage : ''}
			/>
			<Input
				{...firstName}
				error={firstName.isDirty ? firstName.errorMessage : ''}
				label="Имя"
			/>
			<Input
				{...patronymic}
				error={patronymic.isDirty ? patronymic.errorMessage : ''}
				label="Отчество"
			/>
			<Input
				{...registrationAddress}
				error={registrationAddress.isDirty ? registrationAddress.errorMessage : ''}
				label="Адрес регистрации"
			/>
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
				<S.DateInput
					// ref={dateRef}
					{...date}
					error={date.isDirty && !date.value ? true : false}
					type="date"
				/>
			</S.Fieldset>

			<Input
				{...residentialAddress}
				error={residentialAddress.isDirty ? residentialAddress.errorMessage : ''}
				label="Адрес места жительства"
			/>
			<Button type="button" onClick={setData}>
				Далее
			</Button>
		</>
	);
};
