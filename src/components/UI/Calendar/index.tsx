import { FC } from 'react';
import { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { BsDot } from 'react-icons/bs';
import { isReservedDay } from 'utils/isReservedDay';
import { HiChevronDoubleRight, HiChevronDoubleLeft } from 'react-icons/hi';
import { BigCalendar } from './style';

interface IMyCalendar extends CalendarProps {
    appointments: Date[];
}

export const MyCalendar: FC<IMyCalendar> = ({
    value,
    onChange,
    onClickDay,
    appointments,
}) => {
    return (
        <BigCalendar
            value={value}
            onChange={onChange}
            nextLabel={<GrFormNext />}
            prevLabel={<GrFormPrevious />}
            next2Label={<HiChevronDoubleRight />}
            prev2Label={<HiChevronDoubleLeft />}
            onClickDay={onClickDay}
            tileContent={({ date }) => {
                return isReservedDay(appointments, date) ? (
                    <BsDot size={30} />
                ) : null;
            }}
            // tileClassName="tile"
            tileClassName={({ activeStartDate, date, view }) =>
                isReservedDay(appointments, date) ? 'tile reserved' : 'tile'
            }
        />
    );
};
