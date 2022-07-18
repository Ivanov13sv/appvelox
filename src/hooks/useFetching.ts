import { useState} from 'react';

export const useFetching = (callback: (arg?: string) => void): any[] => {
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const fetching = async (id?: string) => {
		setLoading(true);
		try {
			await callback(id);
		} catch (error) {
			setLoading(false);
			if (error instanceof Error) {
				setError(error.message);
			}
		} finally {
			setLoading(false);
		}
	};

	return [fetching, isLoading, error];
};
