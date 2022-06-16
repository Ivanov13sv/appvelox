import { useState, ChangeEvent } from 'react';
import { useValidation } from './useValidation';

export const useInput = (defaultValue: any, validations = {}) => {
	const [value, setValue] = useState(defaultValue);
	const [isDirty, setDirty] = useState(false);


	const valid = useValidation(value, validations);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const onBlur = () => {
		setDirty(true);
	};

	return { value, onChange, setValue, isDirty, onBlur, ...valid };
};
