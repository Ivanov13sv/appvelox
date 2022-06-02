import { useState, useEffect } from 'react';

export const useLocalStorage = (key: string, defaultValue: any) => {
	const [storedValue, setStoredValue] = useState(() => {
		const savedData = localStorage.getItem(key);
		return savedData ? JSON.parse(savedData) : defaultValue;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(storedValue));
	}, [storedValue, key]);

	return [storedValue, setStoredValue];
};
