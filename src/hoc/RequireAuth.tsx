import { FC } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { useAppSelector } from 'hooks/useAppSelector';

interface RequireAuthProps {
	children?: JSX.Element;
}

export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
	const location = useLocation();
	const { isAuth } = useAppSelector(state => state.authorization);

	if (!isAuth) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return <Outlet />;
};
