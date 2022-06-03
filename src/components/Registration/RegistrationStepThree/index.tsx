import { Button } from 'components/UI/Button';
import { Input } from 'components/UI/Input';
import * as S from './style';

export const RegistrationStepThree = () => {
	return (
		<>
			<S.Description>
				Укажите данные вашего представителя (например, член семьи) или иного лица для
				экстренного информирования
			</S.Description>
			<Input label="Фамилия" />
			<Input label="Имя" />
			<Input label="Отчество" />
			<Input label="Телефон" />
			<Button>Зарегистрироваться</Button>
		</>
	);
};
