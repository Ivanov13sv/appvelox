import { createSlice } from '@reduxjs/toolkit';
import { asyncActions } from 'store/actions/asyncActionCreators';
import { IUser } from 'types/user';

interface IUserState {
	user: IUser;
	loading: boolean;
	error: null | string;
}

const initialState: IUserState = {
	user: {
		firstName: '',
		secondName: '',
		patronymic: '',
		dOb: '',
		gender: '',
		registrationAddress: '',
		residentialAddress: '',
	} as IUser,

	loading: false,
	error: null,
};

const currentUserSlice = createSlice({
	initialState,
	name: 'user',
	reducers: {
		cleanUser(state) {
			state.user.dOb = '';
			state.user.firstName = '';
			state.user.secondName = '';
			state.user.gender = '';
			state.user.patronymic = '';
			state.user.registrationAddress = '';
			state.user.residentialAddress = '';
		},
	},
	extraReducers(builder) {
		builder.addCase(asyncActions.fetchCurrentUser.pending, state => {
			state.loading = true;
		});
		builder.addCase(asyncActions.fetchCurrentUser.fulfilled, (state: IUserState, action) => {
			state.loading = false;
			state.user = { ...action.payload } as IUser;
			state.error = null;
		});
		builder.addCase(asyncActions.fetchCurrentUser.rejected, (state: IUserState, action) => {
			state.loading = false;
			state.error = action.payload as string;
		});
	},
});

export const currentUserActions = currentUserSlice.actions;

export default currentUserSlice.reducer;
