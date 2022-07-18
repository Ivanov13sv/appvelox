import { FC } from 'react';
import { AppointmentCard } from 'components/UI/AppointmentCard';
import { useAppSelector } from 'hooks/useAppSelector';
import { useActions } from 'hooks/useActions';

import * as S from './style';

export const AppointmentsPage: FC = () => {
	const { appointments, loading } = useAppSelector(state => state.appointments);
	const { removeAppointment } = useActions();

	return (
		<S.Appointments>
			<S.AppointmentsBody>
				<S.CardsList>
					{appointments.map(item => (
						<AppointmentCard
							key={item.id}
							removeAppointment={removeAppointment}
							loading={loading}
							{...item}
						/>
					))}
				</S.CardsList>

				<S.Calendary />
			</S.AppointmentsBody>
		</S.Appointments>
	);
};
