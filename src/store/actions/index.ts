import { successActions } from 'store/slices/successRegistrationSlice';
import { authInfoActions } from 'store/slices/authInfoSlice';
import { regFieldsActions } from 'store/slices/regFieldsSlice';
import { spinerActions } from 'store/slices/spinerSlice';
import { appointmentsActions } from 'store/slices/appointmentsSlice';
import { currentUserActions } from 'store/slices/currentUserSlice';
import { modalActions } from 'store/slices/modalSlice';
import { notificationActions } from 'store/slices/notificationSlice';
import { asyncActions } from 'store/actions/asyncActionCreators';
import { newEmailModalActions } from 'store/slices/newEmailModalSlice';
import { userActivityActions } from 'store/slices/userActivitySlice';

export const allActions = {
	...successActions,
	...authInfoActions,
	...regFieldsActions,
	...spinerActions,
	...appointmentsActions,
	...currentUserActions,
	...modalActions,
	...notificationActions,
	...asyncActions,
	...newEmailModalActions,
	...userActivityActions
};
