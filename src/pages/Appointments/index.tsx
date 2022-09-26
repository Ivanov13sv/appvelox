import { FC, useState } from 'react';
import styled from 'styled-components';
import { AppointmentCard } from 'components/UI/AppointmentCard';
import { useAppSelector } from 'hooks/useAppSelector';
import { useActions } from 'hooks/useActions';
import { MyCalendar } from 'components/UI/Calendar';
import { Modal } from 'components/UI/Modal';
import { isReservedDay } from 'utils';
import { useClickOutside } from 'hooks/useClickOutside';
import { getFormateDateWithTime } from 'utils';
import { LocalLoader } from 'components/UI/LocalLoader';

import * as S from './style';

export const Appointments: FC = () => {
    const { appointments, loading } = useAppSelector(
        (state) => state.appointments
    );
    const { removeAppointment } = useActions();
    const [startDate, setStartDate] = useState(new Date());
    const [modal, setModal] = useState(false);
    const appointmentsDates = appointments.map((item) => new Date(item.date));
    const refModal = useClickOutside(() => {
        setModal(false);
    });

    const filtredAppointments = appointments.filter(
        (item) => new Date(item.date).getDate() === startDate.getDate()
    );

    const formattedDate = startDate.toLocaleString('ru', {
        month: 'long',
        day: 'numeric',
    });
    const appointmentsCards = appointments.map((item) => (
        <AppointmentCard
            key={item.id}
            removeAppointment={removeAppointment}
            loading={loading}
            {...item}
        />
    ));
    return (
        <S.Appointments>
            <S.AppointmentsBody>
                <S.CardsList>
                    {loading && !appointments.length ? (
                        <LocalLoader width="50px" height="50px" />
                    ) : (
                        appointmentsCards
                    )}

                    {!appointments.length && !loading && (
                        <div>У вас нет активных записей</div>
                    )}
                </S.CardsList>

                <MyCalendar
                    value={startDate}
                    onChange={setStartDate}
                    onClickDay={(value) =>
                        isReservedDay(appointmentsDates, value)
                            ? setModal(true)
                            : null
                    }
                    appointments={appointmentsDates}
                />
                {modal && (
                    <Modal isOpen={modal}>
                        <S.ModalWrapper ref={refModal}>
                            <h3>Ваши записи на {formattedDate}</h3>
                            <S.List>
                                {filtredAppointments.map((item) => (
                                    <S.AppointmentListItem key={item.id}>
                                        <div className="date">
                                            {getFormateDateWithTime(item.date)}
                                        </div>
                                        <div>{item.hospital}</div>
                                        <div>{item.address}</div>
                                        <div>Врач - {item.name}</div>
                                    </S.AppointmentListItem>
                                ))}
                            </S.List>
                        </S.ModalWrapper>
                    </Modal>
                )}
            </S.AppointmentsBody>
        </S.Appointments>
    );
};

// export default Appointments;