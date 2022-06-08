import { successActions } from 'store/reducers/successRegistrationSlice';
import { authorizaitonActions } from 'store/reducers/authorizationSlice';
import { userSliceActions } from 'store/reducers/userSlice';

export const allActions = {
	...successActions,
	...authorizaitonActions,
	...userSliceActions,
};
