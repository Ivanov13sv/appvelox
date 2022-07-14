import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isModalOpen: false,
};

const modalSlice = createSlice({
	initialState,
	name: 'modal',
	reducers: {
		toggleModal(state){
			state.isModalOpen = !state.isModalOpen;
		},
	},
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
