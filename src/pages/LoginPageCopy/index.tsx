import { LoginLayout } from 'components/LoginLayout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from 'components/Login';
import { Ragistration } from 'components/Registration';
import { RegistrationLayout } from 'components/RegistrationLayout';

export const LoginPage = () => {
	return (
		<Routes>
			<Route element={<LoginLayout />}>
				<Route index element={<Login />} />
				<Route path="/registration" element={<Ragistration />} />
				{/* <Route path="*" element={<Navigate to="/login" />} /> */}
			</Route>
		</Routes>
	);
};