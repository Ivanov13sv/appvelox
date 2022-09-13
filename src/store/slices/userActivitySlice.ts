import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INotification, INotificationType } from 'types/notification';
import { asyncActions } from 'store/actions/asyncActionCreators';
import { IActivity } from 'types/activity';

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
        toggleActivityChecked: (state, action: PayloadAction<number>) => {
            const updatedActivityArr = state.activities.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, checked: true };
                }
                return item;
            });
            state.activities = updatedActivityArr;
        },
        toggleActivityUnchecked: (state, action: PayloadAction<number>) => {
            const updatedActivityArr = state.activities.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, checked: false };
                }
                return item;
            });
            state.activities = updatedActivityArr;
        },
        toggleAllActivities: (state) => {
            const toggledActivityArr = state.activities.map((item) => ({
                ...item,
                checked: true,
            }));
            state.activities = toggledActivityArr;
        },
        deleteActivity: (state, action) =>{
            const filtredArray = state.activities.filter(item => item.id !== action.payload);
            state.activities = filtredArray;
        },
        clearStory: (state) =>{
            state.activities = []
        }
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

        builder.addCase(asyncActions.removeActivity.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(asyncActions.removeActivity.fulfilled, (state) => {
            state.loading = false;
        });
        // builder.addCase(asyncActions.removeActivity.pending, (state) => {
        //     state.loading = true;
        // });
        // builder.addCase(
        //     asyncActions.removeActivity.fulfilled,
        //     (state, action) => {
        //         state.loading = false;
        //         state.activities = action.payload as IUserActivity[];
        //     }
        // );
        builder.addCase(asyncActions.clearActivityStory.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(asyncActions.clearActivityStory.fulfilled, (state) => {
            state.loading = false;
            state.activities = [];
        });
        builder.addCase(asyncActions.checkedAllActivities.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(asyncActions.checkedAllActivities.fulfilled, (state) => {
            state.loading = false;
        });

        // builder.addCase(
        //     asyncActions.checkedAllActivities.fulfilled,
        //     (state: IUserActivityState) => {
        //         state.loading = false;
        //     }
        // );
    },
});

export const userActivityActions = userActivitySlice.actions;
export default userActivitySlice.reducer;
