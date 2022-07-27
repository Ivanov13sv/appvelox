import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore';
import { RootState } from 'store';
import { INotificationType } from 'types/notification';
import { FirebaseDataService } from 'API/FirebaseDataService';
import { appointmentsActions } from 'store/slices/appointmentsSlice';
import { notificationActions } from 'store/slices/notificationSlice';
import { IAppointment } from 'types/appointment';
import { IDoctor } from 'types/doctors';
import { db } from '../../firebase';

 const fetchAppointments = createAsyncThunk(
	'appointments/fetchAppointments',
	async (id: string, { rejectWithValue }) => {
		const docRef = doc(db, 'user', id);
		const docSnap = await getDoc(docRef);
		try {
			const response = docSnap.data();
			const days = response?.appointments.map((item: IAppointment) => item);
			return days;
		} catch (error) {
			return rejectWithValue('Что-то пошло не так');
		}
	}
);

 const removeAppointment = createAsyncThunk(
	'appointments/removeAppointment',
	async (id: string, { rejectWithValue, getState, dispatch }) => {
		const { userAuth, appointments } = getState() as RootState;
		const appointment = appointments.appointments.find(item => item.id === id);

		try {
			if (appointment && userAuth.id) {
				const userRef = doc(db, 'user', userAuth.id);
				const doctorRef = doc(db, 'doctors', appointment?.doctorId);

				const filtredArray = appointments.appointments.filter(item => item.id !== id);
				const formatedArr = filtredArray.map(item => ({ id: item.id, date: item.date }));
				await FirebaseDataService.deleteAppointment(
					filtredArray,
					formatedArr,
					userRef,
					doctorRef
				).then(() => {
					dispatch(appointmentsActions.deleteAppointment(id));
					dispatch(
						notificationActions.addNotification({
							id: Date.now(),
							message: 'Вы отменили запись',
							type: INotificationType.warning,
						})
					);
				});
			}
		} catch (error) {
			return rejectWithValue('Не удалось отменить запись');
		}
	}
);

 const fetchCurrentUser = createAsyncThunk(
	'user/fetchUser',
	async (_, { rejectWithValue, getState }) => {
		const { userAuth } = getState() as RootState;
		try {
			if (userAuth.id) {

				const docRef = doc(db, 'user', userAuth.id);
				const docSnap = await getDoc(docRef);
				return docSnap.data();
			}
		} catch (error) {
			return rejectWithValue('Произошла ошибка при загрузке даннх');
		}
	}
);

 const fetchDoctors = createAsyncThunk(
	'doctors/fetchDoctors',
	async (_, { rejectWithValue }) => {
		try {
			const q = query(collection(db, 'doctors'));
			const result: IDoctor[] = [];
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach(doc => {
				result.push({ ...doc.data(), id: doc.id } as IDoctor);
			});
			return result;
		} catch (e) {
			return rejectWithValue('Произошла ошибка при загрузке врачей');
		}
	}
);

export const asyncActions = {fetchAppointments, removeAppointment, fetchCurrentUser,fetchDoctors};