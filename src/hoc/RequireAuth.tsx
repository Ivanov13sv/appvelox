import { FC } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from 'hooks/useAppSelector';

interface RequireAuthProps {
	children?: JSX.Element;
}

export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
	const location = useLocation();
	const {
		authInfo: { token },
	} = useAppSelector(state => state.authInfo);

	if (!token) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return <Outlet />;
};
