let count = 0;
export const generateKey = (prefix: string): string => {
	const result = `${prefix}-${count}`;
	count++;
	return result;
};
