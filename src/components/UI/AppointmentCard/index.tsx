import { FC, useState } from 'react';
import { IAppointment } from 'types/appointment';
import { useClickOutside } from 'hooks/useClickOutside';
import { getFormateDateWithTime } from 'utils/formateDate';
import { ConfirmButtons } from 'components/UI/ConfirmButtons';
import { Button } from '../Button';
import { Avatar } from '../Avatar';

import * as S from './style';

interface AppointmentCardProps extends IAppointment {
    removeAppointment: (id: string) => void;
    loading?: boolean;
}

export const AppointmentCard: FC<AppointmentCardProps> = (props) => {
    const {
        date,
        address,
        hospital,
        speciality,
        name,
        removeAppointment,
        id,
        photo,
        loading,
    } = props;
    const [confirmRemoving, setConfirmRemoving] = useState(false);
    const ref = useClickOutside(() => {
        setConfirmRemoving(false);
    });

    const toggleConfirm = () => setConfirmRemoving(!confirmRemoving);
    const deleteAppointment = () => {
        removeAppointment(id);
    };

    const confirmRemove = !confirmRemoving ? (
        <Button onClick={toggleConfirm}>Отменить</Button>
    ) : (
        <ConfirmButtons
            callback={deleteAppointment}
            closeModal={() => setConfirmRemoving(false)}
            loading={loading ? true : false}
        />
    );

    const formattedDate = getFormateDateWithTime(date);

    return (
        <S.Card>
            <S.CardBody ref={ref}>
                <S.Date>{formattedDate}</S.Date>
                <S.Hospital>{hospital}</S.Hospital>
                <S.Address>{address}</S.Address>
                <S.DoctorInfo>
                    <div>
                        <Avatar
                            width="60px"
                            height="60px"
                            src={photo}
                            alt="Доктор"
                        />
                        <S.PersonalInfo>
                            <S.DoctorName>{name}</S.DoctorName>
                            <S.Speciality>{speciality}</S.Speciality>
                        </S.PersonalInfo>
                    </div>
                    {confirmRemove}
                </S.DoctorInfo>
            </S.CardBody>
        </S.Card>
    );
};
