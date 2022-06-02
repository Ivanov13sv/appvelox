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
		setAuth: (state, action: PayloadAction<string>): void => {
			if (action.payload.length > 0) {
				state.isAuth = !state.isAuth;
				// console.log(state);
			}

			// console.log(state.isAuth);
			// console.log(action);
		},
	},
});

export const { setAuth } = authorizationSlice.actions;

export default authorizationSlice.reducer;
