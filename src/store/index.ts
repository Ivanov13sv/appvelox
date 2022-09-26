import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authInfo from 'store/slices/authInfoSlice';
import successRegistrationSlice from 'store/slices/successRegistrationSlice';
import regFieldsSlice from 'store/slices/regFieldsSlice';
import spinerSlice from 'store/slices/spinerSlice';
import appointmentsSlice from './slices/appointmentsSlice';
import currentUserSlice from './slices/currentUserSlice';
import modalSlice from './slices/modalSlice';
import doctorsSlice from './slices/doctorsSlice';
import notificationSlice from './slices/notificationSlice';
import newEmailModalSlice from './slices/newEmailModalSlice';
import userActivity from './slices/userActivitySlice';
import themeSlice from './slices/themeSlice';

const persistConfig = {
    key: 'root',
	storage: storage,
	whitelist: ['theme']
};

const rootReducer = combineReducers({
    authInfo: authInfo,
    successReg: successRegistrationSlice,
    regFields: regFieldsSlice,
    spiner: spinerSlice,
    appointments: appointmentsSlice,
    currentUser: currentUserSlice,
    modal: modalSlice,
    doctors: doctorsSlice,
    notification: notificationSlice,
    newEmailModal: newEmailModalSlice,
    userActivity: userActivity,
    theme: themeSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
