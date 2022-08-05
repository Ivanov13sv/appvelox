import { useEffect, useState } from 'react';
import { Input } from 'components/UI/Input';
import { Button } from 'components/UI/Button';
import { useNavigate } from 'react-router-dom';
import { useActions } from 'hooks/useActions';
import { useInput } from 'hooks/useInput';
import { useAppSelector } from 'hooks/useAppSelector';
import ru from 'date-fns/locale/ru';
import { Datepicker } from 'components/UI/Datepicker';

import * as S from './style';

export const RegSecondStep = () => {
	const { user } = useAppSelector(state => state.regFields);

	const lastName = useInput(user?.lastName, { isEmpty: true });
	const firstName = useInput(user?.firstName, { isEmpty: true });
	const patronymic = useInput(user?.patronymic, { isEmpty: true });
	const registrationAddress = useInput(user?.registrationAddress, { isEmpty: true });
	const gender = useInput(user?.gender || 'male');
	const date = useInput(user?.dOb ? new Date(user.dOb) : null, { isEmpty: true });
	const residentialAddress = useInput(user?.residentialAddress, { isEmpty: true });

	const [validForm, setValidForm] = useState(false);

	const navigate = useNavigate();
	const { setPersonalInfo } = useActions();

	useEffect(() => {
		if (
			firstName.errorMessage ||
			lastName.errorMessage ||
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
		lastName.errorMessage,
		patronymic.errorMessage,
		registrationAddress.errorMessage,
		residentialAddress.errorMessage,
		date,
	]);

	const pickGender = () => {
		gender.value === 'male' ? gender.setValue('female') : gender.setValue('male');
	};

	const setData = () => {
		if (validForm) {
			setPersonalInfo({
				lastName: lastName.value,
				firstName: firstName.value,
				patronymic: patronymic.value,
				registrationAddress: registrationAddress.value,
				gender: gender.value,
				dOb: date.value.getTime(),
				residentialAddress: residentialAddress.value,
			});
			navigate('/registration/step3');
		} else {
			showRequiredFields();
		}
	};

	const showRequiredFields = () => {
		firstName.setDirty(true);
		lastName.setDirty(true);
		patronymic.setDirty(true);
		registrationAddress.setDirty(true);
		residentialAddress.setDirty(true);
		date.setDirty(true);
	};

	return (
		<>
			<Input
				value={lastName.value}
				onChange={lastName.onChange}
				onBlur={lastName.onBlur}
				label="Фамилия"
				error={lastName.isDirty ? lastName.errorMessage : ''}
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
				<Datepicker
					isError={date.isDirty && !date.value}
					onBlur={date.onBlur}
					placeholderText="1 января 2000"
					selected={date.value}
					onChange={(selectedDate: Date) => date.setValue(selectedDate)}
					dateFormat="d MMMM Y"
					shouldCloseOnSelect={true}
					errorMessage="Обязательное поле"
					maxDate={new Date()}
					showYearDropdown
					dateFormatCalendar="MMMM"
					yearDropdownItemNumber={80}

					scrollableYearDropdown
				
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
