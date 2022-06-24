import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'components/Layout';

import { MakingAppointmentPage } from 'pages/MakingAppointmentPage';
import { AppointmentsPage } from 'pages/AppointmentsPage';

import doctor1 from 'assets/img/doctor1.png';
import doctor2 from 'assets/img/doctor2.png';

import { RequireAuth } from 'hoc/RequireAuth';

import { LoginLayout } from 'components/LoginLayout';
import { RegistrationLayout } from 'components/RegistrationLayout';
import { Login } from 'components/Login';
import { RegFirstStep } from 'components/RegistrationLayout/RegFirstStep';
import { RegSecondStep } from 'components/RegistrationLayout/RegSecondStep';
import { RegThirdStep } from 'components/RegistrationLayout/RegThirdStep';
import { RecoveryPage } from 'pages/RecoveryPage';

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

export const Router: FC = () => {
	return (
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
					<Route index element={<RegFirstStep />} />
					<Route path="step2" element={<RegSecondStep />} />
					<Route path="step3" element={<RegThirdStep />} />
				</Route>
				<Route path="/recovery" element={<RecoveryPage />} />
				<Route path="*" element={<Navigate to="/login" />} />
			</Route>
		</Routes>
	);
};
