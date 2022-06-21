import { configureStore } from '@reduxjs/toolkit';
import dropdownReducer from 'store/slices/dropdownSlice';
import userAuth from 'store/slices/userAuthSlice';
import successRegistrationSlice from 'store/slices/successRegistrationSlice';
import registrationDataSlice from 'store/slices/registrationDataSlice';


export const store = configureStore({
	reducer: {
		dropdown: dropdownReducer,
		userAuth: userAuth,
		successReg: successRegistrationSlice,
		registrationData: registrationDataSlice,
	},
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
