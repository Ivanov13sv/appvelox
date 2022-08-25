import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { asyncActions } from 'store/actions/asyncActionCreators';

// export interface AuthState {
// 	email: null | string;
// 	token: null | string;
// 	id: null | string;
// 	avatar: string;
// }

// const initialState: AuthState = {
// 	email: null,
// 	id: null,
// 	token: null,
// 	avatar: ''
// };

interface IAuthInfo {
    email: string | null;
    id: string | null;
    token: string | null;
    avatar: string;
}

export interface IAuthState {
    authInfo: IAuthInfo;
    loading: boolean;
    error: null | string;
}

const initialState: IAuthState = {
    authInfo: {
        email: null,
        id: null,
        token: null,
        avatar: '',
    },
    loading: false,
    error: null,
};

const authInfoSlice = createSlice({
    name: 'authInfo',
    initialState,
    reducers: {
        logIn: (state: IAuthState, action: PayloadAction<IAuthInfo>) => {
            state.authInfo.email = action.payload.email;
            state.authInfo.id = action.payload.id;
            state.authInfo.token = action.payload.token;
            state.authInfo.avatar = action.payload.avatar;
        },
        logOut: (state) => {
            state.authInfo.email = null;
            state.authInfo.id = null;
            state.authInfo.token = null;
            state.authInfo.avatar = '';
        },
        updateAvatar: (state, action) => {
            state.authInfo.avatar = action.payload;
        },
        toggleLoading: (state) => {
            state.loading = !state.loading;
        },
    },
});

export const authInfoActions = authInfoSlice.actions;

export default authInfoSlice.reducer;
