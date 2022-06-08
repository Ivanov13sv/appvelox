import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from 'react';

interface IUser {
	loginDatas?: {
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
		dOb: string;
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
	loginDatas: {
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
			state.loginDatas = action.payload.loginDatas;			
		},
		setPersonalInfo: (state: IUser, action: PayloadAction<IUser>) => {
			state.personalInfo = action.payload.personalInfo;			
		},
		setRepresentativeInfo: (state: IUser, action: PayloadAction<IUser>) => {
			state.representativeInfo = action.payload.representativeInfo;			
		},
	},
});

export const userSliceActions = userSlice.actions;

export default userSlice.reducer;
