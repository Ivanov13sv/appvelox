import React, { FC } from 'react';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import subDays from 'date-fns/subDays';
import * as S from './style';

interface CalendarProps {
	date: Date;
	setDate: (date: Date) => void;
	filterTime: (date: Date) => boolean;
	filterDate?: (date: Date) => boolean;
	reservedDates: number[];
	disabled: boolean;
}

export const Calendar: FC<CalendarProps> = ({
	date,
	setDate,
	filterDate,
	filterTime,
	reservedDates,
	disabled
}) => {
	return (
		<S.DateTimePicker
			placeholderText="Выберите дату и время"
			selected={date}
			onChange={setDate}
			showTimeSelect
			timeFormat="HH:mm"
			timeIntervals={60}
			timeCaption="Время"
			dateFormat="d MMMM в HH:mm"
			minDate={subDays(new Date(), 0)}
			filterTime={filterTime}
			disabled={disabled}
			minTime={setHours(setMinutes(new Date(), 0), 9)}
			maxTime={setHours(setMinutes(new Date(), 30), 20)}
			shouldCloseOnSelect={true}
			filterDate={(date: Date) => {
				return !reservedDates.includes(date.getTime());
			}}
		/>
	);
};
