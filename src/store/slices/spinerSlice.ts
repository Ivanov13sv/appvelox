import { createSlice } from '@reduxjs/toolkit';

const spinerSlice = createSlice({
    name: 'spiner',
    initialState: {
        isLoading: false,
    },

    reducers: {
        spinerOn(state) {
            state.isLoading = true;
        },
        spinerOff(state) {
            state.isLoading = false;
        },
    },
});

export const spinerActions = spinerSlice.actions;
export default spinerSlice.reducer;
