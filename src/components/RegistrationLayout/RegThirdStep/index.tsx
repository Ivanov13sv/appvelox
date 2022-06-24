import { Button } from 'components/UI/Button';
import { Input } from 'components/UI/Input';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useAppSelector';
import { useInput } from 'hooks/useInput';
import { useEffect, useState } from 'react';
import { getMaskedPhone } from 'utils/phoneMask';
import * as S from './style';

export const RegThirdStep = () => {
	const { representativeInfo } = useAppSelector(state => state.registrationData);
	const secondName = useInput(representativeInfo?.secondName, { isEmpty: true });
	const firstName = useInput(representativeInfo?.firstName, { isEmpty: true });
	const patronymic = useInput(representativeInfo?.patronymic, { isEmpty: true });
	const phone = useInput(representativeInfo?.phone, { isPhone: true });

	const { setRepresentativeInfo } = useActions();

	const [validForm, setValidForm] = useState(false);

	useEffect(() => {
		if (
			secondName.errorMessage ||
			firstName.errorMessage ||
			patronymic.errorMessage ||
			phone.errorMessage
		) {
			setValidForm(false);
		} else {
			setValidForm(true);
		}
	}, [
		secondName.errorMessage,
		firstName.errorMessage,
		patronymic.errorMessage,
		phone.errorMessage,
	]);

	const setData = () => {
		if (validForm) {
			setRepresentativeInfo({
				representativeInfo: {
					secondName: secondName.value,
					firstName: firstName.value,
					patronymic: patronymic.value,
					phone: phone.value,
				},
			});
		} else {
			showRequiredFields();
		}
	};

	const showRequiredFields = () => {
		secondName.setDirty(true);
		firstName.setDirty(true);
		patronymic.setDirty(true);
		phone.setDirty(true);
	};

	return (
		<>
			<S.Description>
				Укажите данные вашего представителя (например, член семьи) или иного лица для
				экстренного информирования
			</S.Description>
			<Input
				{...secondName}
				error={secondName.isDirty ? secondName.errorMessage : ''}
				label="Фамилия"
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
				label="Телефон"
				value={phone.value}
				placeholder="+7 (999) 999-99-99"
				onBlur={phone.onBlur}
				onChange={e => getMaskedPhone(e, phone.setValue)}
				error={phone.isDirty ? phone.errorMessage : ''}
			/>
			<Button type={validForm ? 'submit' : 'button'} onClick={setData}>
				Зарегистрироваться
			</Button>
		</>
	);
};
