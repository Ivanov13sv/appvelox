import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    arrayUnion,
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    updateDoc,
} from 'firebase/firestore';
import { RootState } from 'store';
import { INotificationType } from 'types/notification';
import { appointmentsActions } from 'store/slices/appointmentsSlice';
import { notificationActions } from 'store/slices/notificationSlice';
import { currentUserActions } from 'store/slices/currentUserSlice';
import { modalActions } from 'store/slices/modalSlice';
import { IAppointment } from 'types/appointment';
import { IDoctor } from 'types/doctors';
import { IIUser } from 'types/iuser';
import { newEmailModalActions } from 'store/slices/newEmailModalSlice';
import { authInfoActions } from 'store/slices/authInfoSlice';
import { updateEmail } from 'firebase/auth';
import { db, reAuth, setNewPassword, upload } from '../../firebase';

const fetchAppointments = createAsyncThunk(
    'appointments/fetchAppointments',
    async (id: string, { dispatch }) => {
        const docRef = doc(db, 'user', id);
        const docSnap = await getDoc(docRef);
        try {
            const response = docSnap.data();
            const result = response?.appointments.map(
                (item: IAppointment) => item
            );
            return result;
        } catch (error) {
            dispatch(
                notificationActions.addNotification({
                    id: Date.now(),
                    message: 'Произошла ошибка при загрузке записей',
                    type: INotificationType.error,
                })
            );
        }
    }
);

const removeAppointment = createAsyncThunk(
    'appointments/removeAppointment',
    async (id: string, { getState, dispatch }) => {
        const {
            authInfo: { authInfo },
            appointments,
        } = getState() as RootState;
        const appointment = appointments.appointments.find(
            (item) => item.id === id
        );

        if (appointment && authInfo.id) {
            try {
                const userRef = doc(db, 'user', authInfo.id);
                const doctorRef = doc(db, 'doctors', appointment?.doctorId);

                const filtredArray = appointments.appointments.filter(
                    (item) => item.id !== id
                );
                const formatedArr = filtredArray.map((item) => ({
                    id: item.id,
                    date: item.date,
                }));
                await updateDoc(userRef, {
                    appointments: filtredArray,
                });
                await updateDoc(doctorRef, {
                    appointments: formatedArr,
                }).then(() => {
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
                dispatch(
                    notificationActions.addNotification({
                        id: Date.now(),
                        message: 'Произошла ошибка',
                        type: INotificationType.error,
                    })
                );
            }
        }
    }
);

interface IAddAppointment {
    selectedDoctorId: string;
    currentUserId: string;
    doctorAppointment: {
        id: string;
        date: number;
    };
    userAppointment: IAppointment;
}

export const addAppointment = createAsyncThunk(
    'appointments/addAppointment',
    async (args: IAddAppointment, { dispatch }) => {
        const {
            selectedDoctorId,
            currentUserId,
            doctorAppointment,
            userAppointment,
        } = args;
        const doctorRef = doc(db, 'doctors', selectedDoctorId);
        const userRef = doc(db, 'user', currentUserId);

        try {
            await updateDoc(doctorRef, {
                appointments: arrayUnion(doctorAppointment),
            });
            await updateDoc(userRef, {
                appointments: arrayUnion(userAppointment),
            }).then(() => {
                dispatch(modalActions.toggleModal());
                dispatch(
                    notificationActions.addNotification({
                        id: Date.now(),
                        message: 'Вы успешно записались!',
                        type: INotificationType.success,
                    })
                );
            });
            return userAppointment
        } catch (error) {
            dispatch(
                notificationActions.addNotification({
                    id: Date.now(),
                    message: 'Что-то пошло не так',
                    type: INotificationType.error,
                })
            );
        }
    }
);

const fetchCurrentUser = createAsyncThunk(
    'user/fetchUser',
    async (_, { rejectWithValue, getState, dispatch }) => {
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
                return result;
            }
        } catch (error) {
            dispatch(
                notificationActions.addNotification({
                    id: Date.now(),
                    message:
                        'Произошла ошибка при загрузке данных пользователя',
                    type: INotificationType.error,
                })
            );
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
                await updateDoc(docRef, {
                    ...data,
                    dOb: new Date(data.dOb as number),
                }).then(() => {
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



const fetchDoctors = createAsyncThunk(
    'doctors/fetchDoctors',
    async (_, { rejectWithValue }) => {
        try {
            const q = query(collection(db, 'doctors'));
            const result: IDoctor[] = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                result.push({ ...doc.data(), id: doc.id } as IDoctor);
            });
            return result;
        } catch (e) {
            return rejectWithValue('Произошла ошибка при загрузке врачей');
        }
    }
);

export const asyncActions = {
    fetchAppointments,
    removeAppointment,
    fetchCurrentUser,
    fetchDoctors,
    updateUserData,
    addAppointment,
};
