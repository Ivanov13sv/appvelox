import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUserRepresentative } from 'types/iuser';

interface IRegistrationData {
    user: IUser;
    loading: boolean;
    error: null | string;
}

const initialState: IRegistrationData = {
    user: {
        firstName: '',
        lastName: '',
        patronymic: '',
        dOb: null,
        gender: '',
        registrationAddress: '',
        residentialAddress: '',
        email: '',
        password: '',
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

const regFieldsSlice = createSlice({
    name: 'regFields',
    initialState,
    reducers: {
        setLoginInfo: (
            state: IRegistrationData,
            action: PayloadAction<IUser>
        ) => {
            state.user.email = action.payload.email;
            state.user.phone = action.payload.phone;
            state.user.password = action.payload.password;
        },
        setPersonalInfo: (
            state: IRegistrationData,
            action: PayloadAction<IUser>
        ) => {
            state.user.firstName = action.payload.firstName;
            state.user.lastName = action.payload.lastName;
            state.user.patronymic = action.payload.patronymic;
            state.user.dOb = action.payload.dOb;
            state.user.gender = action.payload.gender;
            state.user.registrationAddress = action.payload.registrationAddress;
            state.user.residentialAddress = action.payload.residentialAddress;
        },
        setRepresentativeInfo: (
            state: IRegistrationData,
            action: PayloadAction<IUserRepresentative>
        ) => {
            state.user.representativeInfo = action.payload;
        },
        resetRegForm: (state: IRegistrationData) => {
            if (state.user) {
                let key: keyof typeof state.user;
                for (key in state.user) {
                    //@ts-ignore
                    state.user[key] = '';
                }
            }
        },
    },
});

export const regFieldsActions = regFieldsSlice.actions;

export default regFieldsSlice.reducer;
