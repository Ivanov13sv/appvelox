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
		closeModal(state){
			state.isModalOpen = false;
		},
		openModal: (state) =>{
			state.isModalOpen = true;
		}
	},
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
