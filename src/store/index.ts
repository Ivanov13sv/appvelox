import { configureStore } from '@reduxjs/toolkit';
import dropdownReducer from 'store/dropdownSlice';
import authorizationSlice from './authorizationSlice';

export const store = configureStore({
	reducer: {
		dropdown: dropdownReducer,
		authorization: authorizationSlice,
	},
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch;