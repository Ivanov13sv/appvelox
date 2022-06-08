import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
	isAuth: boolean;
}

const initialState: AuthState = {
	isAuth: false,
};

const authorizationSlice = createSlice({
	name: 'authorizaiton',
	initialState,
	reducers: {
		logIn: (state: AuthState) => {
			state.isAuth = true;
		},
		logOut: (state: AuthState) => {
			state.isAuth = false;
		},
	},
});

export const authorizaitonActions = authorizationSlice.actions;

export default authorizationSlice.reducer;
