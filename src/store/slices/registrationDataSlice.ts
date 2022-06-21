import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IRegistrationData {
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

const initialState: IRegistrationData = {
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
		setLoginInfo: (state: IRegistrationData, action: PayloadAction<IRegistrationData>) => {
			state.loginData = action.payload.loginData;
		},
		setPersonalInfo: (state: IRegistrationData, action: PayloadAction<IRegistrationData>) => {
			state.personalInfo = action.payload.personalInfo;
		},
		setRepresentativeInfo: (state: IRegistrationData, action: PayloadAction<IRegistrationData>) => {
			state.representativeInfo = action.payload.representativeInfo;
		},
		resetRegForm: (state: IRegistrationData) => {
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
