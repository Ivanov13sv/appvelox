import { ThemeProvider } from 'styled-components';
import { Router } from 'components/Router';
import { myTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import { LoginPage } from 'pages/LoginPageCopy';
import { TestLayout } from 'components/TestLayout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RegistrationLayout } from 'components/RegistrationLayout';
import { RegistrationStepTwo } from 'components/Registration/RegistrationStepTwo';
import { RegistrationStepOne } from 'components/Registration/RegistrationStepOne';
import { RegistrationStepThree } from 'components/Registration/RegistrationStepThree';
import { RequireAuth } from 'hoc/RequireAuth';
import { MakingAppointmentPage } from 'pages/MakingAppointmentPage';
import { AppointmentsPage } from 'pages/AppointmentsPage';
import { LoginLayout } from 'components/LoginLayout';
import { Login } from 'components/Login';
import { Ragistration } from 'components/Registration';
import { Layout } from 'components/Layout';
import { RecoveryPage } from 'pages/RecoveryPage';

function App() {
	return (
		<ThemeProvider theme={myTheme}>
			<Routes>
				<Route element={<RequireAuth />}>
					<Route element={<Layout />}>
						<Route path="profile" element={<MakingAppointmentPage admissions={[]} />} />
						<Route
							path="profile/appointment"
							element={<AppointmentsPage admissions={[]} />}
						/>
						<Route path="doctors" element={<></>} />
						<Route path="messages" element={<></>} />
						<Route path="test" element={<></>} />
						<Route path="goodtoknow" element={<></>} />
						<Route path="*" element={<Navigate to="profile" />} />
					</Route>
				</Route>
				<Route element={<LoginLayout />}>
					<Route path="/login" element={<Login />} />
					<Route path="/registration" element={<RegistrationLayout />}>
						<Route index element={<RegistrationStepOne />} />
						<Route path="step2" element={<RegistrationStepTwo />} />
						<Route path="step3" element={<RegistrationStepThree />} />
					</Route>
					<Route path="/recovery" element={<RecoveryPage />} />
					<Route path="*" element={<Navigate to="/login" />} />
				</Route>
			</Routes>
			<GlobalStyles />
		</ThemeProvider>
	);
}

export default App;

{
	/* <Route element={<Layout />}>
<Route path="profile" element={<RequireAuth />}>
	<Route element={<MakingAppointmentPage admissions={[]} />} />
</Route>
<Route path="doctors" element={<></>} />
<Route path="*" element={<Navigate to="profile" />} />
</Route> */
}
