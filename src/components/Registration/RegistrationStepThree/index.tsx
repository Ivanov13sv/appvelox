import { Button } from 'components/UI/Button';
import { Input } from 'components/UI/Input';
import { useActions } from 'hooks/useActions';
import { useInput } from 'hooks/useInput';
import { NavLink } from 'react-router-dom';
import * as S from './style';

export const RegistrationStepThree = () => {
	const secondName = useInput('');
	const firstName = useInput('');
	const patronymic = useInput('');
	const phone = useInput('');

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
		setSuccessReg();
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
			<Button onClick={setData} as={NavLink} to="/login">
				Зарегистрироваться
			</Button>
		</>
	);
};
