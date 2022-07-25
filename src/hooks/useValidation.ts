import { useEffect, useState } from 'react';

export const useValidation = (value: string, validations: any) => {

	const [isEmpty, setEmpty] = useState(true);
	const [minLengthError, setMinLengthError] = useState(true);
	const [incorrectEmail, setIncorrenctEmail] = useState(true);
	const [unsafePassword, setUnsafePassword] = useState(true);
	const [incorrectPhone, setIncorrectPhone] = useState(true);
	const [repeatPassword, setRepeatPassword] = useState(true);
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case 'minLength':
					if (value.length < validations[validation]) {
						setMinLengthError(true);
						setErrorMessage(
							`Длинна должна быть не менее ${validations[validation]} символов`
						);
					} else {
						setMinLengthError(false);
						setErrorMessage('');
					}

					break;

				case 'isEmpty':
					if (value) {
						setEmpty(false);
						setErrorMessage('');
					} else {
						setEmpty(true);
						setErrorMessage('Обязательное поле');
					}
					break;

				case 'isEmail':
					const regExEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
					if (!value.match(regExEmail)) {
						setIncorrenctEmail(false);
						setErrorMessage('Некорректная почта');
					} else {
						setIncorrenctEmail(true);
						setErrorMessage('');
					}
					break;
				case 'isPassword':
					if (value.length <= 7) {
						setUnsafePassword(false);
						setErrorMessage('Пароль должен быть не менее 8 символов');
					} else {
						setUnsafePassword(true);
						setErrorMessage('');
					}
					break;


				case 'repeatPassword':
					setRepeatPassword(true);
					setErrorMessage('Пароль не совпадает');

					break;

				case 'isPhone':
					const regExPhone = /(?:\+?)[78]+[0-9() -]{16,17}/;
					if (value && !value.match(regExPhone)) {
						setIncorrectPhone(true);
						setErrorMessage('Введите корректный номер телефона');
					} else {
						setIncorrectPhone(false);
						setErrorMessage('');
					}
					break;

				default:
					return;
			}
		}
	}, [value, validations]);

	return {
		isEmpty,
		minLengthError,
		errorMessage,
		setErrorMessage,
		incorrectEmail,
		unsafePassword,
		incorrectPhone,
		repeatPassword,
	};
};
