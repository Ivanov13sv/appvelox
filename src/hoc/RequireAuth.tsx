import { FC, useEffect } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { useAppSelector } from 'hooks/useAppSelector';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useActions } from 'hooks/useActions';

interface RequireAuthProps {
	children?: JSX.Element;
}

export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
	const location = useLocation();
	const { id } = useAppSelector(state => state.userAuth);

	const {logIn,logOut} = useActions()
	const auth = getAuth()

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				logIn({
					email: user.email,
					id: user.uid,
					//@ts-ignore
					token: user.accessToken,
				
				});
				console.log('loged in ' + JSON.stringify(user))
			} else {
				logOut();
				console.log('loged out ' + JSON.stringify(user))
			}
		});
	}, []);


	if (!id) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return <Outlet />;
};
