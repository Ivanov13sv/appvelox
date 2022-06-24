import { successActions } from 'store/slices/successRegistrationSlice';
import { authorizaitonActions } from 'store/slices/userAuthSlice';
import { userSliceActions } from 'store/slices/registrationDataSlice';
import { noticeActions } from 'store/slices/noticeSlice';
import {spinerActions } from 'store/slices/spinerSlice'

export const allActions = {
	...successActions,
	...authorizaitonActions,
	...userSliceActions,
	...noticeActions,
	...spinerActions,
};
