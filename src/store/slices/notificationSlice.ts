import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INotification } from 'types/notification';

interface INotificationState {
    notifications: INotification[];
}

const initialState: INotificationState = {
    notifications: [],
};

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        addNotification(state, action: PayloadAction<INotification>) {
            state.notifications = [...state.notifications, action.payload];
        },
        removeNotification(state, action: PayloadAction<number>) {
            const filtredArr = state.notifications.filter(
                (item) => item.id !== action.payload
            );
            state.notifications = filtredArr;
        },
    },
});

export const notificationActions = notificationSlice.actions;

export default notificationSlice.reducer;
