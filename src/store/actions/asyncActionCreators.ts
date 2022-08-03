import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, doc, getDoc, getDocs, query, updateDoc } from 'firebase/firestore';
import { RootState } from 'store';
import { INotificationType } from 'types/notification';
import { FirebaseDataService } from 'API/FirebaseDataService';
import { appointmentsActions } from 'store/slices/appointmentsSlice';
import { notificationActions } from 'store/slices/notificationSlice';
import { currentUserActions } from 'store/slices/currentUserSlice';
import { IAppointment } from 'types/appointment';
import { IDoctor } from 'types/doctors';
import { db } from '../../firebase';
import { IIUser } from 'types/iuser';

const fetchAppointments = createAsyncThunk(
	'appointments/fetchAppointments',
	async (id: string, { rejectWithValue }) => {
		const docRef = doc(db, 'user', id);
		const docSnap = await getDoc(docRef);
		try {
			const response = docSnap.data();
			const result = response?.appointments.map((item: IAppointment) => item);
			return result;
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

		if (appointment && userAuth.id) {
			try {
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
			} catch (error) {
				return rejectWithValue('Не удалось отменить запись');
			}
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
				const result = {
					...docSnap.data(),
					id: docSnap.id,
				} as IIUser;
				console.log(result)
				return result;
				// return docSnap.data();
			}
		} catch (error) {
			return rejectWithValue('Произошла ошибка при загрузке даннх');
		}
	}
);

const updateUserData = createAsyncThunk(
	'user/UpdateData',
	async (data: IIUser, { getState, dispatch, rejectWithValue }) => {
		const {
			userAuth: { id },
		} = getState() as RootState;
		if (id) {
			try {
				const docRef = doc(db, 'user', id);
				await updateDoc(docRef, { ...data }).then(() => {
					dispatch(currentUserActions.updateData(data));
					dispatch(
						notificationActions.addNotification({
							id: Date.now(),
							message: 'Данные успешно обновлены',
							type: INotificationType.success,
						})
					);
				});
			} catch (e) {
				dispatch(
					notificationActions.addNotification({
						id: Date.now(),
						message: 'Произошла ошибка при обновлении данных',
						type: INotificationType.warning,
					})
				);
			}
		}
	}
);

const fetchDoctors = createAsyncThunk('doctors/fetchDoctors', async (_, { rejectWithValue }) => {
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
});

export const asyncActions = {
	fetchAppointments,
	removeAppointment,
	fetchCurrentUser,
	fetchDoctors,
	updateUserData,
};
