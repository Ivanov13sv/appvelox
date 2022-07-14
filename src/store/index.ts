import { configureStore } from '@reduxjs/toolkit';
import dropdownReducer from 'store/slices/dropdownSlice';
import userAuth from 'store/slices/userAuthSlice';
import successRegistrationSlice from 'store/slices/successRegistrationSlice';
import registrationDataSlice from 'store/slices/registrationDataSlice';
import noticeSlice from 'store/slices/noticeSlice';
import spinerSlice from 'store/slices/spinerSlice';
import appointmentsSlice from './slices/appointmentsSlice';
import currentUserSlice from './slices/currentUserSlice';
import representativeSlice from './slices/representativeSlice';
import modalSlice from './slices/modalSlice';
import doctorsSlice from './slices/doctorsSlice';

export const store = configureStore({
	reducer: {
		dropdown: dropdownReducer,
		userAuth: userAuth,
		successReg: successRegistrationSlice,
		registrationData: registrationDataSlice,
		notice: noticeSlice,
		spiner: spinerSlice,
		appointments: appointmentsSlice,
		currentUser: currentUserSlice,
		representative: representativeSlice,
		modal: modalSlice,
		doctors: doctorsSlice
	},


	middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
