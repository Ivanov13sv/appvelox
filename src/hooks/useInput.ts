import { useState, ChangeEvent } from 'react';

export const useInput = ( defaultValue: any) => {
	const [value, setValue] = useState(defaultValue);

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return { value, onChange, setValue };
};
