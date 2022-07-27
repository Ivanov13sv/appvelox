import { configureStore } from '@reduxjs/toolkit';
import dropdownReducer from 'store/slices/dropdownSlice';
import userAuth from 'store/slices/userAuthSlice';
import successRegistrationSlice from 'store/slices/successRegistrationSlice';
import userSlice from 'store/slices/userSlice';
import spinerSlice from 'store/slices/spinerSlice';
import appointmentsSlice from './slices/appointmentsSlice';
import currentUserSlice from './slices/currentUserSlice';
import modalSlice from './slices/modalSlice';
import doctorsSlice from './slices/doctorsSlice';
import notificationSlice from './slices/notificationSlice';

export const store = configureStore({
	reducer: {
		dropdown: dropdownReducer,
		userAuth: userAuth,
		successReg: successRegistrationSlice,
		user: userSlice,
		spiner: spinerSlice,
		appointments: appointmentsSlice,
		currentUser: currentUserSlice,
		modal: modalSlice,
		doctors: doctorsSlice,
		notification: notificationSlice,
	},

	middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
