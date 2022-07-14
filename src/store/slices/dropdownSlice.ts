import { createSlice } from '@reduxjs/toolkit';

const dropdownSlice = createSlice({
	name: 'dropdown',
	initialState: {
		isOpen: false,
	},
	reducers: {
		closeDropdown(state) {
			state.isOpen = false;
		},
		openDropdown(state){
			state.isOpen = true;
		}
	},
});

export const dropdownActions = dropdownSlice.actions;

export default dropdownSlice.reducer;
