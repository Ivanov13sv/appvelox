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
import { db, reAuth, setNewPassword, upload } from '../../firebase';
import { IIUser } from 'types/iuser';
import { authInfoActions } from 'store/slices/authInfoSlice';
import { updateEmail } from 'firebase/auth';

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
		const {
			authInfo: { authInfo },
			appointments,
		} = getState() as RootState;
		const appointment = appointments.appointments.find(item => item.id === id);

		if (appointment && authInfo.id) {
			try {
				const userRef = doc(db, 'user', authInfo.id);
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
		const {
			authInfo: { authInfo },
		} = getState() as RootState;
		try {
			if (authInfo.id) {
				const docRef = doc(db, 'user', authInfo.id);
				const docSnap = await getDoc(docRef);
				const result = {
					...docSnap.data(),
					id: docSnap.id,
					//@ts-ignore
					dOb: docSnap.data().dOb.toDate().getTime(),
				} as IIUser;
				//@ts-ignore
				// console.log(result.dOb.toDate())
				return result;
				// return docSnap.data();
			}
		} catch (error) {
			return rejectWithValue('Произошла ошибка при загрузке даннх');
		}
	}
);

const updateUserData = createAsyncThunk(
	'user/updateUserData',
	async (data: IIUser, { getState, dispatch }) => {
		const {
			authInfo: { authInfo },
		} = getState() as RootState;
		if (authInfo.id) {
			try {
				const docRef = doc(db, 'user', authInfo.id);
				await updateDoc(docRef, { ...data, dOb: new Date(data.dOb as number) }).then(() => {
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

interface IUpdateUserAvatar {
	currentUser: any;
	loadingPhoto: any;
	statePhoto: any;
}

const updateUserAvatar = createAsyncThunk(
	'authInfo/updateUserAvatar',
	async (data: IUpdateUserAvatar, { getState, dispatch }) => {
		const { currentUser, loadingPhoto, statePhoto } = data;
		if (data) {
			try {
				await upload(loadingPhoto, currentUser).then(() => {
					dispatch(
						notificationActions.addNotification({
							id: Date.now(),
							message: 'Фото успешно обновлены',
							type: INotificationType.success,
						})
					);
					dispatch(authInfoActions.updateAvatar(statePhoto));
				});
			} catch (e) {
				dispatch(
					notificationActions.addNotification({
						id: Date.now(),
						message: 'Произошла ошибка при обновлении фото',
						type: INotificationType.warning,
					})
				);
			}
		}
	}
);

interface UpdatePassword {
	newPass: string;
	currentPass: string;
	currentUser: any;
}
const updatePassword = createAsyncThunk(
	'authInfo/updatePassword',
	async (data: UpdatePassword, { getState, dispatch }) => {
		if (data) {
			const { newPass, currentPass, currentUser } = data;
			setNewPassword(newPass, currentPass, currentUser)
				.then(() => {
					dispatch(
						notificationActions.addNotification({
							id: Date.now(),
							message: 'Пароль успешно изменен!',
							type: INotificationType.success,
						})
					);
				})
				.catch(() => {
					dispatch(
						notificationActions.addNotification({
							id: Date.now(),
							message: 'Что-то пошло не так',
							type: INotificationType.warning,
						})
					);
				});
		}
	}
);

interface IUpdateEmail {
	currentUser: any;
	passwordlLogin: string;
	emailLogin: string;
	newEmail: string;
}

const updateUserEmail = createAsyncThunk(
	'authInfo/updateEmail',
	async (data: IUpdateEmail, { getState, dispatch }) => {
		const { currentUser, emailLogin, passwordlLogin, newEmail } = data;

		if (currentUser && passwordlLogin && emailLogin) {
			 reAuth(passwordlLogin, currentUser, emailLogin)
				.then(() => {
					return updateEmail(currentUser, newEmail)
						.then(() => {
							dispatch(
								notificationActions.addNotification({
									id: Date.now(),
									message: 'Почта успешно измененна',
									type: INotificationType.success,
								})
							);
						})
						.catch(() => {
							dispatch(
								notificationActions.addNotification({
									id: Date.now(),
									message: 'Что-то пошло не так',
									type: INotificationType.warning,
								})
							);
						});
				})
				.catch(e => {
					dispatch(
						notificationActions.addNotification({
							id: Date.now(),
							message: 'Неверный логин или пароль',
							type: INotificationType.warning,
						})
					);
				});
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
	updateUserAvatar,
	updatePassword,
	updateUserEmail
};
