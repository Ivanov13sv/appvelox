import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INotification, INotificationType } from 'types/notification';
import { asyncActions } from 'store/actions/asyncActionCreators';

export interface IUserActivity {
    id: number;
    type: INotificationType;
    date: number;
    message: string;
    checked: boolean;
}

interface IUserActivityState {
    activities: IUserActivity[];
    loading: boolean;
}

const initialState: IUserActivityState = {
    activities: [],
    loading: false,
};

const userActivitySlice = createSlice({
    name: 'userActivity',
    initialState,
    reducers: {
        addNewActivity: (state, action: PayloadAction<IUserActivity>) => {
            state.activities = [...state.activities, action.payload];
        },
        toggleUserActivity: (state, action: PayloadAction<number>) => {
            const updatedActivityArr = state.activities.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, checked: true };
                }
                return item;
            });
            state.activities = updatedActivityArr;
        },
    },
    extraReducers: (builder) => {
        // builder.addCase(asyncActions.addActivity.pending, (state) => {
        //     state.loading = true;
        // });
        // builder.addCase(
        //     asyncActions.fetchUserActivity.fulfilled,
        //     (state, action: PayloadAction<IUserActivity>) => {
        //         state.loading = false;
        //         state.activities = [...state.activities, action.payload];
        //     }
        // );

        builder.addCase(asyncActions.fetchUserActivity.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            asyncActions.fetchUserActivity.fulfilled,
            (state, action: PayloadAction<IUserActivity[]>) => {
                state.loading = false;
                state.activities = action.payload;
            }
        );
    },
});

export const userActivityActions = userActivitySlice.actions;
export default userActivitySlice.reducer;
