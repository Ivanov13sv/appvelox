import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
	isAuth: boolean;
}
//@ts-ignore
const data = localStorage.getItem('isAuth') ? JSON.parse(localStorage.getItem('isAuth')) : false;

const initialState: AuthState = {
	isAuth: data || false,
};

const authorizationSlice = createSlice({
	name: 'authorizaiton',
	initialState,
	reducers: {
		logIn: (state: AuthState) => {
			state.isAuth = true;
			localStorage.setItem('isAuth', 'true');
		},
		logOut: (state: AuthState) => {
			state.isAuth = false;
			localStorage.setItem('isAuth', 'false');
		},
	},
});

export const authorizaitonActions = authorizationSlice.actions;

export default authorizationSlice.reducer;
