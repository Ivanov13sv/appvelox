import { FC, useEffect, useState } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { useAppSelector } from 'hooks/useAppSelector';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useActions } from 'hooks/useActions';
import { useLocalStorage } from 'hooks/useLocalStorage';

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
