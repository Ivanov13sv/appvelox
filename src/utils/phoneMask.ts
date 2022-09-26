import { ChangeEvent } from 'react';

const phoneMask = (number: string) => {
	const cleanNumbers = number.replace(/\D/g, '');

	let result = '';

	if (/^[7-9]/.test(cleanNumbers)) {
		// rus phone number

		cleanNumbers[0] === '9' ? (result += '+7 ') : (result += `+${cleanNumbers.slice(0, 1)} `);
		if (cleanNumbers.length > 1) {
			result += '(' + cleanNumbers.slice(1, 4);
		}
		if (cleanNumbers.length >= 5) {
			result += ') ' + cleanNumbers.slice(4, 7);
		}
		if (cleanNumbers.length >= 8) {
			result += '-' + cleanNumbers.slice(7, 9);
		}
		if (cleanNumbers.length >= 10) {
			result += '-' + cleanNumbers.slice(9, 11);
		}
	} else {
		//not rus number
		result = `+${cleanNumbers.slice(0, 16)}`;
	}
	return result;
};

export const getMaskedPhone = (
	e: ChangeEvent<HTMLInputElement>,
	formateDate: (number: string) => void
) => {
	const value = e.target.value.replace(/\D/gi, '');
	return formateDate(phoneMask(value));
};
