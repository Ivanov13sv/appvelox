import { FC } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { setAuth } from 'store/authorizationSlice';

interface RequireAuthProps {
	children: JSX.Element;
}

export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
	const location = useLocation();
	const auth = useSelector((state: RootState) => state.authorization.isAuth);



	// const auth = false;

	if (!auth) {
		return <Navigate to="/auth" state={{ from: location }} replace/>;
	}

	return children;
};
