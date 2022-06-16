import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from 'react';

interface IUser {
	loginData?: {
		email: string;
		phone: string;
		password: string;
	};
	personalInfo?: {
		firstName: string;
		secondName: string;
		patronymic: string;
		registrationAddress: string;
		gender: string;
		dOb: string | null;
		residentialAddress: string;
	};
	representativeInfo?: {
		firstName: string;
		secondName: string;
		patronymic: string;
		phone: string;
	};
}

const initialState: IUser = {
	loginData: {
		email: '',
		password: '',
		phone: '',
	},
	personalInfo: {
		firstName: '',
		secondName: '',
		patronymic: '',
		dOb: '',
		gender: '',
		registrationAddress: '',
		residentialAddress: '',
	},
	representativeInfo: {
		firstName: '',
		secondName: '',
		patronymic: '',
		phone: '',
	},
};

const userSlice = createSlice({
	name: 'newUser',
	initialState,
	reducers: {
		setLoginInfo: (state: IUser, action: PayloadAction<IUser>) => {
			state.loginData = action.payload.loginData;
		},
		setPersonalInfo: (state: IUser, action: PayloadAction<IUser>) => {
			state.personalInfo = action.payload.personalInfo;
		},
		setRepresentativeInfo: (state: IUser, action: PayloadAction<IUser>) => {
			state.representativeInfo = action.payload.representativeInfo;
		},
		resetRegForm: (state: IUser) => {
			if (state.loginData) {
				let key: keyof typeof state.loginData;
				for (key in state.loginData) {
					state.loginData[key] = '';
				}
			}

			if (state.personalInfo) {
				let key: keyof typeof state.personalInfo;
				for (key in state.personalInfo) {
					state.personalInfo[key] = '';
				}
			}

			if (state.representativeInfo) {
				let key: keyof typeof state.representativeInfo;

				for (key in state.representativeInfo) {
					state.representativeInfo[key] = '';
				}
			}

		},
	},
});

export const userSliceActions = userSlice.actions;

export default userSlice.reducer;
