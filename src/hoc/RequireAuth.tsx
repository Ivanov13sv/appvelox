import { FC } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from 'hooks/useAppSelector';

interface RequireAuthProps {
	children?: JSX.Element;
}

export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
	const location = useLocation();
	const { token } = useAppSelector(state => state.userAuth);

	if (!token) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return <Outlet />;
};
