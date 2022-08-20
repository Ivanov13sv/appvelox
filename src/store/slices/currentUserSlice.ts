import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { asyncActions } from 'store/actions/asyncActionCreators';
import { IIUser, IUserState } from 'types/iuser';
import { IUser } from 'types/user';

const initialState: IUserState = {
	user: {
		firstName: '',
		lastName: '',
		patronymic: '',
		dOb: null,
		gender: '',
		registrationAddress: '',
		residentialAddress: '',
		phone: '',
		representativeInfo: {
			firstName: '',
			lastName: '',
			patronymic: '',
			phone: '',
		},
	},

	loading: false,
	error: null,
};

const currentUserSlice = createSlice({
	initialState,
	name: 'user',
	reducers: {
		cleanUser(state) {
			state.user.dOb = null;
			state.user.firstName = '';
			state.user.lastName = '';
			state.user.gender = '';
			state.user.patronymic = '';
			state.user.registrationAddress = '';
			state.user.residentialAddress = '';
		},
		updateData: (state, action: PayloadAction<IIUser>) => {
			state.user = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(asyncActions.fetchCurrentUser.pending, state => {
			state.loading = true;
		});
		builder.addCase(asyncActions.fetchCurrentUser.fulfilled, (state, action) => {
			state.loading = false;
			state.user = { ...action.payload };
			state.error = null;
		});
		builder.addCase(asyncActions.fetchCurrentUser.rejected, (state: IUserState, action) => {
			state.loading = false;
			state.error = action.payload as string;
		});

		// update user actions
		builder.addCase(asyncActions.updateUserData.pending, (state: IUserState) => {
			state.loading = true;
		});
		builder.addCase(asyncActions.updateUserData.fulfilled, (state: IUserState) => {
			state.loading = false;
		});
		builder.addCase(asyncActions.updateUserData.rejected, (state: IUserState) => {
			state.loading = false;
		});

	},
});

export const currentUserActions = currentUserSlice.actions;

export default currentUserSlice.reducer;
