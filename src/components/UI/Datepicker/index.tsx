import React, { FC } from 'react';
import { ReactDatePickerProps } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { DateTimepicker , DatePickerWrapper} from './style';
export interface DatepickerProps extends ReactDatePickerProps {
	isError?: boolean;
    errorMessage?: string; 
}

export const Datepicker: FC<DatepickerProps> = props => {
	return (
		<DatePickerWrapper>
			<DateTimepicker {...props} locale={ru}/>
		</DatePickerWrapper>
	);
};
