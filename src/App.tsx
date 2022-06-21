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

import doctor1 from 'assets/img/doctor1.png';
import doctor2 from 'assets/img/doctor2.png';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useActions } from 'hooks/useActions';

const admissions = [
	{
		id: 1,
		date: 'Понедельник 15.06.20 | 15:30',
		hospital: 'СПБ ГБУЗ "Городская поликлиника №25"',
		address: 'пр. Солидарности, д. 1, к. 1, лит. А',
		photo: doctor1,
		name: 'Малушко Т. Н.',
		job: 'Хирургия',
	},
	{
		id: 2,
		date: 'Понедельник 15.06.20 | 18:30',
		hospital: 'СПБ ГБУЗ "Городская поликлиника №25"',
		address: 'пр. Солидарности, д. 1, к. 1, лит. А',
		photo: doctor2,
		name: 'Харьков В. С.',
		job: 'Терапевтическое отделение',
	},

	{
		id: 3,
		date: 'Понедельник 15.06.20 | 18:30',
		hospital: 'СПБ ГБУЗ "Городская поликлиника №25"',
		address: 'пр. Солидарности, д. 1, к. 1, лит. А',
		photo: doctor2,
		name: 'Харьков В. С.',
		job: 'Терапевтическое отделение',
	},
	{
		id: 4,
		date: 'Понедельник 15.06.20 | 18:30',
		hospital: 'СПБ ГБУЗ "Городская поликлиника №25"',
		address: 'пр. Солидарности, д. 1, к. 1, лит. А',
		photo: doctor2,
		name: 'Харьков В. С.',
		job: 'Терапевтическое отделение',
	},
	{
		id: 5,
		date: 'Понедельник 15.06.20 | 18:30',
		hospital: 'СПБ ГБУЗ "Городская поликлиника №25"',
		address: 'пр. Солидарности, д. 1, к. 1, лит. А',
		photo: doctor2,
		name: 'Харьков В. С.',
		job: 'Терапевтическое отделение',
	},
	{
		id: 7,
		date: 'Понедельник 15.06.20 | 18:30',
		hospital: 'СПБ ГБУЗ "Городская поликлиника №25"',
		address: 'пр. Солидарности, д. 1, к. 1, лит. А',
		photo: doctor2,
		name: 'Харьков В. С.',
		job: 'Терапевтическое отделение',
	},
	{
		id: 6,
		date: 'Понедельник 15.06.20 | 18:30',
		hospital: 'СПБ ГБУЗ "Городская поликлиника №25"',
		address: 'пр. Солидарности, д. 1, к. 1, лит. А',
		photo: doctor2,
		name: 'Харьков В. С.',
		job: 'Терапевтическое отделение',
	},
];

function App() {


	return (
		<ThemeProvider theme={myTheme}>
			<Routes>
				<Route element={<RequireAuth />}>
					<Route element={<Layout />}>
						<Route
							path="profile"
							element={<MakingAppointmentPage admissions={admissions} />}
						/>
						<Route
							path="profile/appointment"
							element={<AppointmentsPage admissions={admissions} />}
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
