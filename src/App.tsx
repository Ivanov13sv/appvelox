import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Router } from 'components/Router';
import { myTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';

import doctor1 from 'assets/img/doctor1.png';
import doctor2 from 'assets/img/doctor2.png';
import { FullscreenSpiner } from 'components/UI/FullscreenSpiner';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useActions } from 'hooks/useActions';
import { collection, getDocs, setDoc } from 'firebase/firestore';
import { db } from './firebase';
const admissions = [
	{
		id: 1,
		date: 'Понедельник 15.06.20 | 15:30',
		hospital: 'СПБ ГБУЗ "Городская поликлиника №25',
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
	const [doctors, setDoctors] = useState([]);
	const doctorsCollectionRef = collection(db, 'doctors');
	const auth = getAuth();

	const { logIn, logOut } = useActions();

	onAuthStateChanged(auth, user => {
		if (user) {
			logIn({
				email: user.email,
				id: user.uid,
				//@ts-ignore
				token: user.accessToken,
			});
		} else {
			logOut();
		}
	});

	

	// useEffect(() => {
	// 	const getUsers = async () => {
	// 		const data = await getDocs(doctorsCollectionRef);
	// 		if (data) {
	// 			setDoctors(data.docs.map(item => ({ ...item.data(), id: item.id })));
	// 		}
	// 	};
	// 	getUsers();
	// }, []);

	return (
		<ThemeProvider theme={myTheme}>
			<Router />
			<GlobalStyles />
		</ThemeProvider>
	);
}

export default App;
