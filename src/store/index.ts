import { configureStore } from '@reduxjs/toolkit';
import dropdownReducer from 'store/reducers/dropdownSlice';
import authorizationSlice from 'store/reducers/authorizationSlice';
import successRegistrationSlice from 'store/reducers/successRegistrationSlice';
import userSlice from 'store/reducers/userSlice';


export const store = configureStore({
	reducer: {
		dropdown: dropdownReducer,
		authorization: authorizationSlice,
		successReg: successRegistrationSlice,
		user: userSlice,
	},
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
