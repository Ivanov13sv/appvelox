import { configureStore } from '@reduxjs/toolkit';
import dropdownReducer from 'store/slices/dropdownSlice';
import authInfo from 'store/slices/authInfoSlice';
import successRegistrationSlice from 'store/slices/successRegistrationSlice';
import regFieldsSlice from 'store/slices/regFieldsSlice';
import spinerSlice from 'store/slices/spinerSlice';
import appointmentsSlice from './slices/appointmentsSlice';
import currentUserSlice from './slices/currentUserSlice';
import modalSlice from './slices/modalSlice';
import doctorsSlice from './slices/doctorsSlice';
import notificationSlice from './slices/notificationSlice';
import newEmailModalSlice from './slices/newEmailModalSlice';

export const store = configureStore({
	reducer: {
		dropdown: dropdownReducer,
		authInfo: authInfo,
		successReg: successRegistrationSlice,
		regFields: regFieldsSlice,
		spiner: spinerSlice,
		appointments: appointmentsSlice,
		currentUser: currentUserSlice,
		modal: modalSlice,
		doctors: doctorsSlice,
		notification: notificationSlice,
		newEmailModal: newEmailModalSlice,
	},

	middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
