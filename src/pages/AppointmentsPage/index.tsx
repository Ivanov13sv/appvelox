import React, { FC } from 'react';
import { AppointmentCard } from 'components/UI/AppointmentCard';
import { useAppSelector } from 'hooks/useAppSelector';
import { FirebaseDataService } from 'API/FirebaseDataService';
import { useFetching } from 'hooks/useFetching';
import { useActions } from 'hooks/useActions';
import { doc } from 'firebase/firestore';
import { INotificationType } from 'types/notification';
import { db } from '../../firebase';

import * as S from './style';

export const AppointmentsPage: FC = () => {
	const { appointments } = useAppSelector(state => state.appointments);
	const { id: userId } = useAppSelector(state => state.userAuth);
	// const { removeAppointment: deleteAppointmentFromState, addNotification } = useActions();
	// const [removeAppointment, loadingRemoving] = useFetching(async (id?: string) => {
	// 	const appointment = appointments.find(item => item.id === id);
	// 	if (appointment && id) {
	// 		const userRef = doc(db, 'user', `${userId}`);
	// 		const doctorRef = doc(db, 'doctors', appointment?.doctorId);
	// 		await FirebaseDataService.removeAppointment(appointments, id, userRef, doctorRef)
	// 			.then(() => deleteAppointmentFromState(id))
	// 			.then(() => {
	// 				addNotification({
	// 					id: Date.now(),
	// 					message: 'Вы отменили запись',
	// 					type: INotificationType.warning,
	// 				});
	// 			});
	// 	}
	// });
	return (
		<S.Appointments>
			<S.AppointmentsBody>
				<S.CardsList>
					{/* {appointments.map(item => (
						<AppointmentCard
							key={item.id}
							removeAppointment={removeAppointment}
							loading={loadingRemoving}
							{...item}
						/>
					))} */}
				</S.CardsList>

				<S.Calendary />
			</S.AppointmentsBody>
		</S.Appointments>
	);
};
