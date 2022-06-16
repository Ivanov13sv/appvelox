import { Button } from 'components/UI/Button';
import { Input } from 'components/UI/Input';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/useAppSelector';
import { useInput } from 'hooks/useInput';
import { NavLink } from 'react-router-dom';
import * as S from './style';

export const RegistrationStepThree = () => {
	const { representativeInfo } = useAppSelector(state => state.user);
	const secondName = useInput(representativeInfo?.secondName);
	const firstName = useInput(representativeInfo?.firstName);
	const patronymic = useInput(representativeInfo?.patronymic);
	const phone = useInput(representativeInfo?.phone);

	const { setSuccessReg, setRepresentativeInfo } = useActions();

	const setData = () => {
		setRepresentativeInfo({
			representativeInfo: {
				secondName: secondName.value,
				firstName: firstName.value,
				patronymic: patronymic.value,
				phone: phone.value,
			},
		});
	};

	return (
		<>
			<S.Description>
				Укажите данные вашего представителя (например, член семьи) или иного лица для
				экстренного информирования
			</S.Description>
			<Input {...secondName} label="Фамилия" />
			<Input {...firstName} label="Имя" />
			<Input {...patronymic} label="Отчество" />
			<Input {...phone} label="Телефон" />
			<Button type="submit" onClick={setData}>
				Зарегистрироваться
			</Button>
		</>
	);
};
