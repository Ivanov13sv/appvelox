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

export const checkPasswordMatch = (passOne: string, passTwo: string): boolean => {
    if (passOne && passTwo){
       return passOne === passTwo ? true : false;
    }
	return false;
};

export const getFormateDate = (date: number) => {
    return new Date(date).toLocaleString('ru', {
        month: 'long',
        day: 'numeric',
    });
};
export const getFormateDateWithTime = (date: number) => {
    return new Date(date).toLocaleString('ru', {
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });
};


export const isReservedDay = (appointmentsArr: Date[], value: Date) => {
    return appointmentsArr.some(
        (item) =>
            new Date(item).getMonth() === value.getMonth() &&
            new Date(item).getDate() === value.getDate() &&
            new Date(item).getFullYear() === value.getFullYear()
    );
};