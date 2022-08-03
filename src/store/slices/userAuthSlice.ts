import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
	email: null | string;
	token: null | string;
	id: null | string;
	avatar: string;
}

const initialState: AuthState = {
	email: null,
	id: null,
	token: null,
	avatar: ''
};

const authUserSlice = createSlice({
	name: 'userAuth',
	initialState,
	reducers: {
		logIn: (state: AuthState, action: PayloadAction<AuthState>) => {
			state.email = action.payload.email;
			state.id = action.payload.id;
			state.token = action.payload.token;
			state.avatar = action.payload.avatar;
		},
		logOut: (state: AuthState) => {
			state.email = null;
			state.id = null;
			state.token = null;
		},
		updateAvatar: (state, action) => {
			state.avatar = action.payload;
		},
	},
});

export const authorizaitonActions = authUserSlice.actions;

export default authUserSlice.reducer;
