import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppointmentCard } from 'components/UI/AppointmentCard';
import { ECard } from 'components/ECard';

import { ReactComponent as Results } from 'assets/img/ECards-icons/results.svg';
import { ReactComponent as Info } from 'assets/img/ECards-icons/info.svg';
import { ReactComponent as AddInfo } from 'assets/img/ECards-icons/addInfo.svg';
import { ReactComponent as History } from 'assets/img/ECards-icons/history.svg';

import { useAppSelector } from 'hooks/useAppSelector';
import { FullscreenSpiner } from 'components/UI/FullscreenSpiner';
import { doc } from 'firebase/firestore';
import { useActions } from 'hooks/useActions';
import { FirebaseDataService } from 'API/FirebaseDataService';
import { useFetching } from 'hooks/useFetching';
import { Notice } from 'components/UI/Notice';
import { db } from '../../firebase';

import * as S from './style';

export const ProfilePage: FC = () => {
	const { appointments, loading } = useAppSelector(state => state.appointments);
	const { isActive } = useAppSelector(state => state.notice);
	const { loading: userLoading, user } = useAppSelector(state => state.currentUser);
	const { loading: representativeLoading } = useAppSelector(state => state.representative);
	const { removeAppointment: deleteAppointmentFromState, toggleNotice } = useActions();
	const { id: userId } = useAppSelector(state => state.userAuth);

	const [removeAppointment, loadingRemoving, error] = useFetching(async (id?: string) => {
		const appointment = appointments.find(item => item.id === id);
		if (appointment && id) {
			const userRef = doc(db, 'user', `${userId}`);
			const doctorRef = doc(db, 'doctors', appointment?.doctorId);
			await FirebaseDataService.removeAppointment(appointments, id, userRef, doctorRef).then(
				() => deleteAppointmentFromState(id)
			);
		}
	});

	const admissionsArr =
		appointments.length > 2
			? appointments
					.slice(0, 2)
					.map(item => (
						<AppointmentCard
							key={item.id}
							removeAppointment={removeAppointment}
							{...item}
							loading={loadingRemoving}
						/>
					))
			: appointments.map(item => (
					<AppointmentCard
						removeAppointment={removeAppointment}
						key={item.id}
						{...item}
						loading={loadingRemoving}
					/>
			  ));

	let restAdmissions = '';

	if (appointments.length - 2 < 5) {
		restAdmissions = appointments.length - 2 === 1 ? ' запись' : ' записи';
	} else {
		restAdmissions = ' записей';
	}

	// let restAppointments = '';

	const showMoreAppointments =
		appointments.length > 2 ? (
			<>
				<span>
					Еще {appointments.length - 2}
					{restAdmissions}
				</span>
				<Link to="/profile/appointment">Подборнее</Link>
			</>
		) : null;

	// useEffect(() => {
	// 	if (isActive) {
	// 		const timer = setTimeout(toggleNotice, 2000);
	// 		return () => {
	// 			clearInterval(timer);
	// 		};
	// 	}
	// }, [isActive]);

	if (userLoading || representativeLoading) return <FullscreenSpiner />;

	return (
		<S.AppointemntPage>
			<S.CardsList>
				{admissionsArr}
				{appointments.length - 2 ? (
					<S.ShowMoreBlock>{showMoreAppointments}</S.ShowMoreBlock>
				) : null}
				{!appointments.length && <S.ApplyBlock>У вас нет активных записей</S.ApplyBlock>}
			</S.CardsList>
			<S.PatientInfo>
				<h3>Электронная карта</h3>
				<S.ECards>
					<ECard icon={<Info />} title="Информация о пациенте">
						<ul>
							<li>Ваши личные данные</li>
							<li>Рекомендации врачей</li>
							<li>История болезней</li>
						</ul>
					</ECard>
					<ECard icon={<Results />} title="Результаты анализов">
						<p>Вы можете узнать здесь результаты своих анализов</p>
					</ECard>
					<ECard icon={<AddInfo />} title="Добавить  информацию">
						<p>Добавляйте в свою электронную медицинскую карту новые данные</p>
					</ECard>
					<ECard icon={<History />} title="История приемов">
						<p>Вся информация о полученных услугах за все время хранится здесь</p>
					</ECard>
				</S.ECards>
			</S.PatientInfo>
		</S.AppointemntPage>
	);
};
