import { ISelectItem } from 'types/selectItem';

// Select

export const convertToSelectOptions = (array: any[], option: string) => {
	const res: ISelectItem[] = array.map(item => {
		return { option: item[option], id: item.id };
	});
	return res;
};

export const removeDuplicateOptions = (array: any[], filter: string, option: string) => {
	const result = array.filter(
		(item, i) => array.findIndex(el => el[filter] === item[filter]) === i
	);
	return convertToSelectOptions(result, option);
};

export const filterDoctorsBySpeciality = (
	array: any[],
	filter: string,
	option: string,
	selectedFilter?: string
) => {
	const result = array.filter(item => item[filter] === selectedFilter);
	return convertToSelectOptions(result, option);
};

// react-datepicker

export const filterReservedDates = (reservedDates: number[], date: Date) => {
	if (reservedDates && date) {
		const currentDate = new Date();
		const selectedDate = new Date(date);


		const isPassedTime = currentDate.getTime() < selectedDate.getTime();
		const isReservedTime = reservedDates.includes(date.getTime());
		return isPassedTime && !isReservedTime;
	}
	return false;
};

// выбор изображения