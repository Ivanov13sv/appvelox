import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
	email: null | string;
	token: null | string;
	id: null | string;
}

//@ts-ignore
const data = localStorage.getItem('isAuth') ? JSON.parse(localStorage.getItem('isAuth')) : true;

const initialState: AuthState = {
	email: null,
	id: null,
	token: null,
};

const authUserSlice = createSlice({
	name: 'userAuth',
	initialState,
	reducers: {
		logIn: (state: AuthState, action: PayloadAction<AuthState>) => {
			state.email = action.payload.email;
			state.id = action.payload.id;
			state.token = action.payload.token;
			
		},
		logOut: (state: AuthState) => {
			state.email = null;
			state.id = null;
			state.token = null;
		},
	},
});


export const authorizaitonActions = authUserSlice.actions;

export default authUserSlice.reducer;
