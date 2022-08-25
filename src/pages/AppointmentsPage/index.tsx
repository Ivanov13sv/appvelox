import { FC, useState } from 'react';
import { AppointmentCard } from 'components/UI/AppointmentCard';
import { useAppSelector } from 'hooks/useAppSelector';
import { useActions } from 'hooks/useActions';
import { Datepicker } from 'components/UI/Datepicker';

import * as S from './style';
import styled from 'styled-components';

export const AppointmentsPage: FC = () => {
    const { appointments, loading } = useAppSelector(
        (state) => state.appointments
    );
    const { removeAppointment } = useActions();
    const [startDate, setStartDate] = useState(new Date());
    return (
        <S.Appointments>
            <S.AppointmentsBody>
                <S.CardsList>
                    {appointments.map((item) => (
                        <AppointmentCard
                            key={item.id}
                            removeAppointment={removeAppointment}
                            loading={loading}
                            {...item}
                        />
                    ))}
                </S.CardsList>
                <Calendar
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
					inline
                />
                <S.Calendary />
            </S.AppointmentsBody>
        </S.Appointments>
    );
};

const Calendar = styled(Datepicker)`
    background-color: red;
`;

// create calendar