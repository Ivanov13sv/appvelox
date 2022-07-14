import { FC, useState } from 'react';
import { IAppointment } from 'types/appointment';
import { ImCheckmark, ImCross } from 'react-icons/im';
import { useClickOutside } from 'hooks/useClickOutside';
import { format } from 'date-fns';
import { Button } from '../Button';
import { ProfilePhoto } from '../ProfilePhoto';
import { Loader } from '../LocalLoader/style';

import * as S from './style';

interface AppointmentCardProps extends IAppointment {
	removeAppointment: (id: string) => void;
	loading?: boolean;
}

export const AppointmentCard: FC<AppointmentCardProps> = props => {
	const { date, address, hospital, speciality, name, removeAppointment, id, photo, loading } =
		props;
	const [confirmRemoving, setConfirmRemoving] = useState(false);
	const ref = useClickOutside(() => {
		setConfirmRemoving(false);
	});

	const toggleConfirm = () => setConfirmRemoving(!confirmRemoving);
	const deleteAppointment = () => removeAppointment(id);

	const isRemoving = loading ? (
		<Loader width="30px" height="30px" />
	) : (
		<>
			<ImCheckmark onClick={deleteAppointment} size={30} color="green">
				Да
			</ImCheckmark>
			<ImCross size={25} color="red" onClick={toggleConfirm}>
				Нет
			</ImCross>
		</>
	);

	const confirmRemove = !confirmRemoving ? (
		<Button onClick={toggleConfirm}>Отменить</Button>
	) : (
		<S.ConfirmButtons>
			{loading ? (
				<Loader width="30px" height="30px" />
			) : (
				<>
					<ImCheckmark onClick={deleteAppointment} size={30} color="green" />
					<ImCross size={25} color="red" onClick={toggleConfirm} />
				</>
			)}
		</S.ConfirmButtons>
	);

	const formattedDate = format(date, 'MMMM d, yyyy H:mm');

	return (
		<S.Card >
			<S.CardBody ref={ref}>
				<S.Date>{formattedDate}</S.Date>
				<S.Hospital>{hospital}</S.Hospital>
				<S.Address>{address}</S.Address>
				<S.DoctorInfo>
					<div>
						<ProfilePhoto width="60px" height="60px" photo={photo} />
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
