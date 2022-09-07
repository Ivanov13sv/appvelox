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
import { INotification, INotificationType } from 'types/notification';
import { appointmentsActions } from 'store/slices/appointmentsSlice';
import { notificationActions } from 'store/slices/notificationSlice';
import { currentUserActions } from 'store/slices/currentUserSlice';
import { modalActions } from 'store/slices/modalSlice';
import { IAppointment } from 'types/appointment';
import { IDoctor } from 'types/doctors';
import { IIUser } from 'types/iuser';
import {
    IUserActivity,
    userActivityActions,
} from 'store/slices/userActivitySlice';
import { db } from '../../firebase';

const fetchAppointments = createAsyncThunk(
    'appointments/fetchAppointments',
    async (_, { dispatch, getState }) => {
        const {
            authInfo: { authInfo },
        } = getState() as RootState;
        if (authInfo.id) {
            const docRef = doc(db, 'user', authInfo.id);
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
                        addNotificationWithStory({
                            id: Date.now(),
                            message: 'Вы отменили запись',
                            type: INotificationType.error,
                        })
                    );
                });
            } catch (error) {
                dispatch(
                    addNotificationWithStory({
                        id: Date.now(),
                        message: 'Произошла ошибка',
                        type: INotificationType.warning,
                    })
                );
            }
        }
    }
);

interface IAddAppointment {
    selectedDoctorId: string;
    doctorAppointment: {
        id: string;
        date: number;
    };
    userAppointment: IAppointment;
}

export const addAppointment = createAsyncThunk(
    'appointments/addAppointment',
    async (args: IAddAppointment, { dispatch, getState }) => {
        const {
            authInfo: { authInfo },
        } = getState() as RootState;
        const { selectedDoctorId, doctorAppointment, userAppointment } = args;
        if (authInfo.id) {
            const doctorRef = doc(db, 'doctors', selectedDoctorId);
            const userRef = doc(db, 'user', authInfo.id);

            try {
                await updateDoc(doctorRef, {
                    appointments: arrayUnion(doctorAppointment),
                });
                await updateDoc(userRef, {
                    appointments: arrayUnion(userAppointment),
                }).then(() => {
                    dispatch(modalActions.toggleModal());

                    dispatch(
                        addNotificationWithStory({
                            id: Date.now(),
                            message: 'Вы успешно записались!',
                            type: INotificationType.success,
                        })
                    );
                });
                return userAppointment;
            } catch (error) {
                dispatch(
                    addNotificationWithStory({
                        id: Date.now(),
                        message: 'Что-то пошло не так',
                        type: INotificationType.warning,
                    })
                );
            }
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
                addNotificationWithStory({
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
                        addNotificationWithStory({
                            id: Date.now(),
                            message: 'Персональные данные изменены!',
                            type: INotificationType.success,
                        })
                    );
                });
            } catch (e) {
                dispatch(
                    addNotificationWithStory({
                        id: Date.now(),
                        message: 'Произошла ошибка при обновлении данных',
                        type: INotificationType.warning,
                    })
                );
            }
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
            querySnapshot.forEach((doc) => {
                result.push({ ...doc.data(), id: doc.id } as IDoctor);
            });
            return result;
        } catch (e) {
            return rejectWithValue('Произошла ошибка при загрузке врачей');
        }
    }
);

const fetchUserActivity = createAsyncThunk(
    'userActivity/fetchUserActivity',
    async (_, { dispatch, getState }) => {
        const {
            authInfo: { authInfo },
        } = getState() as RootState;
        if (authInfo.id) {
            const docRef = doc(db, 'user', authInfo.id);
            const docSnap = await getDoc(docRef);
            try {
                const response = docSnap.data();
                const result = response?.activities.map(
                    (item: IUserActivity) => item
                );
                return result;
            } catch (error) {
                dispatch(
                    notificationActions.addNotification({
                        id: Date.now(),
                        message: 'Произошла ошибка при загрузке истории',
                        type: INotificationType.error,
                    })
                );
            }
        }
    }
);

const updateUserActivity = createAsyncThunk(
    'userActivity/updateUserActivity',
    async (_, { getState }) => {
        const {
            authInfo: { authInfo },
            userActivity: { activities },
        } = getState() as RootState;
        const userRef = doc(db, 'user', authInfo.id as string);

        try {
            await updateDoc(userRef, {
                activities: activities,
            });
        } catch (error) {}
    }
);

const addNotificationWithStory = createAsyncThunk(
    'userActivity/addNotificationWithStory',
    async (activity: INotification, { getState, dispatch }) => {
        const {
            authInfo: { authInfo },
        } = getState() as RootState;
        if (authInfo.id) {
            const newActivity = {
                ...activity,
                checked: false,
                date: Date.now(),
            };
            dispatch(userActivityActions.addNewActivity(newActivity));
            dispatch(notificationActions.addNotification(activity));
            const userRef = doc(db, 'user', authInfo.id);
            await updateDoc(userRef, {
                activities: arrayUnion(newActivity),
            });
        }
    }
);

const setActivityChecked = createAsyncThunk(
    'userActivity/setActivityChecked',
    async (id: number, { getState, dispatch }) => {
        const {
            authInfo: { authInfo },
            userActivity: { activities },
        } = getState() as RootState;
        if (authInfo.id) {
            const userRef = doc(db, 'user', authInfo.id);
            dispatch(userActivityActions.toggleActivityChecked(id));
            const updatedActivityArr = activities.map((item) => {
                if (item.id === id) {
                    return { ...item, checked: true };
                }
                return item;
            });
            await updateDoc(userRef, {
                activities: updatedActivityArr,
            });
            return updatedActivityArr;
        }
    }
);
const setActivityUnchecked = createAsyncThunk(
    'userActivity/setActivityUnchecked',
    async (id: number, { getState, dispatch }) => {
        const {
            authInfo: { authInfo },
            userActivity: { activities },
        } = getState() as RootState;
        if (authInfo.id) {
            const userRef = doc(db, 'user', authInfo.id);
            dispatch(userActivityActions.toggleActivityUnchecked(id));
            const updatedActivityArr = activities.map((item) => {
                if (item.id === id) {
                    return { ...item, checked: false };
                }
                return item;
            });
            await updateDoc(userRef, {
                activities: updatedActivityArr,
            });
            return updatedActivityArr;
        }
    }
);

const removeActivity = createAsyncThunk(
    'userActivity/removeActivity',
    async (id: number, { getState, dispatch }) => {
        const {
            userActivity: { activities },
            authInfo: { authInfo },
        } = getState() as RootState;
        if (authInfo.id) {
            const userRef = doc(db, 'user', authInfo.id);
            const filtredActivities = activities.filter(
                (item) => item.id !== id
            );
            await updateDoc(userRef, {
                activities: filtredActivities,
            });
            return filtredActivities;
        }
    }
);

const clearActivityStory = createAsyncThunk(
    'userActivity/clearActivityStory',
    async (_, { getState, dispatch }) => {
        const {
            authInfo: { authInfo },
        } = getState() as RootState;

        if (authInfo.id) {
            const userRef = doc(db, 'user', authInfo.id);
            dispatch(
                notificationActions.addNotification({
                    id: Date.now(),
                    message: 'История очищена!',
                    type: INotificationType.success,
                })
            );
            await updateDoc(userRef, {
                activities: [],
            });
        }
    }
);

const checkedAllActivities = createAsyncThunk(
    'userActivity/checkedAllActivities',
    async (_, { getState, rejectWithValue, dispatch }) => {
        const {
            authInfo: { authInfo },
            userActivity: { activities },
        } = getState() as RootState;

        if (authInfo.id) {
            try {
                const userRef = doc(db, 'user', authInfo.id);
                const checkedActivitiesArr = activities.map((item) => ({
                    ...item,
                    checked: true,
                }));
                dispatch(userActivityActions.toggleAllActivities());

                await updateDoc(userRef, {
                    activities: checkedActivitiesArr,
                });
            } catch (error) {
                dispatch(
                    notificationActions.addNotification({
                        id: Date.now(),
                        message: 'Не удалось отметить как прочитанное',
                        type: INotificationType.error,
                    })
                );
            }
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
    fetchUserActivity,
    updateUserActivity,
    addNotificationWithStory,
    setActivityChecked,
    setActivityUnchecked,
    removeActivity,
    clearActivityStory,
    checkedAllActivities,
};
