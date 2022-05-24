import React, { FC } from 'react';
import { DoctorCard } from 'components/UI/DoctorCard';
import * as S from './style';

interface AppointmentsPageProps {
	admissions: any[];
}

export const AppointmentsPage: FC<AppointmentsPageProps> = ({ admissions }) => {
	return (
		<S.Appointments>
			<S.AppointmentsBody>
				<S.CardsList>
					{admissions.map(item => (
						<DoctorCard key={item.id} {...item} />
					))}
				</S.CardsList>

				<S.Calendary />
			</S.AppointmentsBody>
		</S.Appointments>
	);
};
