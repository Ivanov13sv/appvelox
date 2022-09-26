import { createSlice } from '@reduxjs/toolkit';

interface SuccessRegProps {
    successReg: boolean;
}

const initialState: SuccessRegProps = {
    successReg: false,
};

const successReg = createSlice({
    name: 'successReg',
    initialState,
    reducers: {
        setSuccessReg(state) {
            state.successReg = true;
        },
        hideSuccessReg(state) {
            state.successReg = false;
        },
    },
});

export const successActions = successReg.actions;

export default successReg.reducer;
