import { FC, useState } from 'react';
import { AppointmentCard } from 'components/UI/AppointmentCard';
import { useAppSelector } from 'hooks/useAppSelector';
import { useActions } from 'hooks/useActions';
import { MyCalendar } from 'components/UI/Calendar';
import { Modal } from 'components/UI/Modal';
import { isReservedDay } from 'utils/isReservedDay';
import { useClickOutside } from 'hooks/useClickOutside';
import { getFormateDateWithTime } from 'utils/formateDate';
import { LocalLoader } from 'components/UI/LocalLoader';
import styled from 'styled-components';
import * as S from './style';

export const AppointmentsPage: FC = () => {
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
                        <ModalWrapper ref={refModal}>
                            <h3>Ваши записи на {formattedDate}</h3>
                            <List>
                                {filtredAppointments.map((item) => (
                                    <AppointmentListItem key={item.id}>
                                        {getFormateDateWithTime(item.date)}
                                        <div>{item.hospital}</div>
                                        <div>{item.address}</div>
                                        <div>Врач - {item.name}</div>
                                    </AppointmentListItem>
                                ))}
                            </List>
                        </ModalWrapper>
                    </Modal>
                )}
            </S.AppointmentsBody>
        </S.Appointments>
    );
};

const ModalWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 2rem;
    flex-direction: column;
    gap: 2rem;
    h3 {
        text-align: center;
        font-weight: 500;
    }
`;

const AppointmentListItem = styled.li`
    width: 300px;
    height: 120px;
    background-color: whitesmoke;
    border-radius: 10px;
    padding: 15px;
    flex: 0 0 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-track {
        background: #ebe7ff;
        border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background: #003b72;
        border-radius: 5px;
    }
`;

// Добавить надпись, если нет записей
