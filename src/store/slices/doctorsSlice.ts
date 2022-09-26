import { createSlice } from '@reduxjs/toolkit';
import { IDoctor } from 'types/doctors';
import { asyncActions } from 'store/actions/asyncActionCreators';

interface IDoctorsState {
    doctors: IDoctor[];
    loading: boolean;
    error: string;
}

const initialState: IDoctorsState = {
    doctors: [],
    loading: false,
    error: '',
};

const doctorsSlice = createSlice({
    name: 'doctors',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(asyncActions.fetchDoctors.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            asyncActions.fetchDoctors.fulfilled,
            (state, action) => {
                state.doctors = action.payload;
                state.loading = false;
            }
        );
        builder.addCase(asyncActions.fetchDoctors.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    },
});

export const doctorsActions = doctorsSlice.actions;

export default doctorsSlice.reducer;
