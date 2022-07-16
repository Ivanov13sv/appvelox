import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { FormEvent, useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { IDoctor } from 'types/doctors';
import { Select } from 'components/UI/Select';
import { ISelectItem } from 'types/selectItem';
import { useFetching } from 'hooks/useFetching';
import { Button } from 'components/UI/Button';
import { useAppSelector } from 'hooks/useAppSelector';
import { useActions } from 'hooks/useActions';
import { removeDuplicateOptions, filterReservedDates, filterDoctorsBySpeciality } from 'utils';
import { IAppointment } from 'types/appointment';
import { Calendar } from 'components/UI/Calendar';
import { Loader } from 'components/UI/LocalLoader/style';
import { NoticeStatus } from 'store/slices/noticeSlice';
import { db } from '../../firebase';

import * as S from './style';

export const MakeAnAppointment = () => {
	const [date, setDate] = useState<any>(null);
	const { id: userId } = useAppSelector(state => state.userAuth);
	const { doctors } = useAppSelector(state => state.doctors);
	const { addNewAppointment, toggleModal, toggleNotice, setNoticeStatus, setNoticeText } =
		useActions();
	const [selectedSpeciality, setSelectedSpeciality] = useState<ISelectItem>({
		id: '',
		option: '',
	});
	const [selectedDoctor, setSelectedDoctor] = useState<ISelectItem>({
		id: '',
		option: '',
	});

	const [reservedDates, setReservedDates] = useState<any>();

	const [fetchReservedDates] = useFetching(async () => {
		const docRef = doc(db, 'doctors', selectedDoctor.id);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			const response = docSnap.data();
			const days = response.appointments.map((item: any) => new Date(item.date).getTime());
			setReservedDates(days);
		} else {
			console.log('No such document!');
		}
	});
	const [postNewAppointment, loadingNewAppointment] = useFetching(async () => {
		const doctor = doctors.find(item => item.id === selectedDoctor.id) as IDoctor;
		const id = Date.now();
		const userAppointment: IAppointment = {
			id: `${id}`,
			doctorId: selectedDoctor.id,
			name: doctor.name,
			speciality: doctor?.speciality,
			address: doctor?.address,
			date: new Date(date).getTime(),
			hospital: doctor?.hospital,
			photo: doctor.photo,
		};

		const doctorAppointment = {
			id: `${id}`,
			date: new Date(date).getTime(),
		};
		const doctorRef = doc(db, 'doctors', selectedDoctor.id);
		const userRef = doc(db, 'user', `${userId}`);
		try {
			await updateDoc(doctorRef, {
				appointments: arrayUnion(doctorAppointment),
			});
			await updateDoc(userRef, {
				appointments: arrayUnion(userAppointment),
			}).then(() => {
				addNewAppointment(userAppointment);
				toggleModal();
				setNoticeStatus(NoticeStatus.success);
				setNoticeText('Вы удачно записались на приём!');
				toggleNotice();
			});
		} catch (error) {
			setNoticeText('Что-то пошло не так');
		} finally {
		}
	});

	const setNewAppointment = async (e: FormEvent) => {
		e.preventDefault();
		await postNewAppointment();
	};

	useEffect(() => {
		setSelectedDoctor({ id: '', option: '' });
		setReservedDates([]);
	}, [selectedSpeciality.id]);

	useEffect(() => {
		fetchReservedDates();
	}, [selectedDoctor]);

	return (
		<S.Wrapper>
			<S.Title>Запись на приём</S.Title>
			<S.Form onSubmit={setNewAppointment}>
				<Select
					options={removeDuplicateOptions(doctors, 'speciality', 'speciality')}
					placeholder="Выберите направление"
					selected={selectedSpeciality}
					setSelected={setSelectedSpeciality}
				/>
				<Select
					isDisabled={!selectedSpeciality.id}
					options={filterDoctorsBySpeciality(
						doctors,
						'speciality',
						'name',
						selectedSpeciality.option
					)}
					placeholder="Выберите специалиста"
					selected={selectedDoctor}
					setSelected={setSelectedDoctor}
				/>
				<Calendar
					date={date}
					setDate={(date: Date) => setDate(date)}
					filterTime={date => filterReservedDates(reservedDates, date)}
					reservedDates={reservedDates}
					disabled={!selectedDoctor.option}
				/>

				<Button disabled={!date || loadingNewAppointment}>
					{loadingNewAppointment ? <Loader width="30px" height="30px" /> : 'Записаться'}
				</Button>
			</S.Form>
		</S.Wrapper>
	);
};
