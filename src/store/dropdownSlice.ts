import { createSlice } from '@reduxjs/toolkit';

const dropdownSlice = createSlice({
	name: 'dropdown',
	initialState: {
		isOpen: false,
	},
	reducers: {
		closeDropdown(state, action) {
			console.log(state);
			console.log(action);
		},
	},
});

export const { closeDropdown } = dropdownSlice.actions;

export default dropdownSlice.reducer;
