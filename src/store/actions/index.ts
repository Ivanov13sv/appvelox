import { successActions } from 'store/slices/successRegistrationSlice';
import { authorizaitonActions } from 'store/slices/userAuthSlice';
import { userSliceActions } from 'store/slices/registrationDataSlice';

export const allActions = {
	...successActions,
	...authorizaitonActions,
	...userSliceActions,
};
