import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout';

import { MakingAppointmentPage } from 'pages/MakingAppointmentPage';
import { AppointmentsPage } from 'pages/AppointmentsPage';

import doctor1 from 'assets/img/doctor1.png';
import doctor2 from 'assets/img/doctor2.png';

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

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="profile" element={<MakingAppointmentPage admissions={admissions} />} />
				<Route path="appointment" element={<AppointmentsPage admissions={admissions} />} />
			</Route>
		</Routes>
	);
};
