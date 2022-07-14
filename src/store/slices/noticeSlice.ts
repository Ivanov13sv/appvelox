import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum NoticeStatus {
	success = 'success',
	warning = 'warning',
	error = 'error',
}

interface INotice {
	isActive: boolean;
	status: NoticeStatus;
	text: string;
}

const initialState: INotice = {
	isActive: false,
	status: NoticeStatus.success,
	text: '',
};

const noticeSlice = createSlice({
	name: 'notice',
	initialState,
	reducers: {
		toggleNotice(state) {
			state.isActive = !state.isActive;
		},
		setNoticeText(state, action: PayloadAction<string>) {
			state.text = action.payload;
		},
		setNoticeStatus(state, action: PayloadAction<NoticeStatus>) {
			state.status = action.payload;
		},
	},
});

export const noticeActions = noticeSlice.actions;

export default noticeSlice.reducer;
