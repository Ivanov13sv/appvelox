import { configureStore } from '@reduxjs/toolkit';
import dropdownReducer from 'store/slices/dropdownSlice';
import userAuth from 'store/slices/userAuthSlice';
import successRegistrationSlice from 'store/slices/successRegistrationSlice';
import registrationDataSlice from 'store/slices/registrationDataSlice';
import noticeSlice from 'store/slices/noticeSlice';
import spinerSlice from 'store/slices/spinerSlice'



export const store = configureStore({
	reducer: {
		dropdown: dropdownReducer,
		userAuth: userAuth,
		successReg: successRegistrationSlice,
		registrationData: registrationDataSlice,
		notice: noticeSlice,
		spiner: spinerSlice

	},
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
