import { successActions } from 'store/slices/successRegistrationSlice';
import { authorizaitonActions } from 'store/slices/userAuthSlice';
import { userSliceActions } from 'store/slices/registrationDataSlice';
import { noticeActions } from 'store/slices/noticeSlice';
import { spinerActions } from 'store/slices/spinerSlice';
import { appointmentsActions } from 'store/slices/appointmentsSlice';
import { currentUserActions } from 'store/slices/currentUserSlice';
import { dropdownActions } from 'store/slices/dropdownSlice';
import { modalActions } from 'store/slices/modalSlice';

export const allActions = {
	...successActions,
	...dropdownActions,
	...authorizaitonActions,
	...userSliceActions,
	...noticeActions,
	...spinerActions,
	...appointmentsActions,
	...currentUserActions,
	...modalActions
};
