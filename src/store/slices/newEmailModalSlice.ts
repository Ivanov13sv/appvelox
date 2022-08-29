import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpenEmailModal: false,
};

const newEmailModalSlice = createSlice({
    initialState,
    name: 'newEmailModalSlice',
    reducers: {
        openNewEmailModal: (state) =>{
            state.isOpenEmailModal = true;
        },
        closeNewEmailModal: (state) =>{
            state.isOpenEmailModal = false;
        }

    },
});

export const newEmailModalActions = newEmailModalSlice.actions;
export default newEmailModalSlice.reducer;
