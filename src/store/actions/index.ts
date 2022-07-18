import { successActions } from 'store/slices/successRegistrationSlice';
import { authorizaitonActions } from 'store/slices/userAuthSlice';
import { userSliceActions } from 'store/slices/registrationDataSlice';
import { spinerActions } from 'store/slices/spinerSlice';
import { appointmentsActions } from 'store/slices/appointmentsSlice';
import { currentUserActions } from 'store/slices/currentUserSlice';
import { dropdownActions } from 'store/slices/dropdownSlice';
import { modalActions } from 'store/slices/modalSlice';
import { notificationActions } from 'store/slices/notificationSlice';
import { asyncActions } from 'store/actions/asyncActionCreators';

export const allActions = {
	...successActions,
	...dropdownActions,
	...authorizaitonActions,
	...userSliceActions,
	...spinerActions,
	...appointmentsActions,
	...currentUserActions,
	...modalActions,
	...notificationActions,
	...asyncActions
};
