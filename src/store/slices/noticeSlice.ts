import { createSlice } from '@reduxjs/toolkit';

interface INotice {
	isActive: boolean;
}

const initialState: INotice = {
	isActive: false,
};

const noticeSlice = createSlice({
	name: 'notice',
	initialState,
	reducers: {
		showNotice(state: INotice) {
			state.isActive = true;
		},
		hideNotice(state: INotice) {
			state.isActive = false;
		},
	},
});

export const noticeActions = noticeSlice.actions;

export default noticeSlice.reducer;
