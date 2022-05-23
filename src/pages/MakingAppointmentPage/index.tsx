import { DoctorCard } from 'components/UI/DoctorCard';
import { ECard } from 'components/ECard';

import { ReactComponent as Results } from 'assets/img/ECards-icons/results.svg';
import { ReactComponent as Info } from 'assets/img/ECards-icons/info.svg';
import { ReactComponent as AddInfo } from 'assets/img/ECards-icons/addInfo.svg';
import { ReactComponent as History } from 'assets/img/ECards-icons/history.svg';

import doctor1 from 'assets/img/doctor1.png';
import doctor2 from 'assets/img/doctor2.png';

import * as S from './style';

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

export const MakingAppointmentPage = () => {
	const admissionsArr =
		admissions.length > 2
			? admissions.slice(0, 2).map(item => <DoctorCard key={item.id} {...item} />)
			: admissions.map(item => <DoctorCard key={item.id} {...item} />);

	let restAdmissions = '';

	if (admissions.length - 2 < 5) {
		restAdmissions = admissions.length - 2 === 1 ? ' запись' : ' записи';
	} else {
		restAdmissions = ' записей';
	}

	return (
		<S.AppointemntPage>
			<S.CardsList>
				{admissionsArr}
				<S.ShowMoreBlock>
					<span>
						Еще {admissions.length - 2}
						{restAdmissions}
					</span>
					<a>Подборнее</a>
				</S.ShowMoreBlock>
			</S.CardsList>
			<S.PatientInfo>
				<h3>Электронная карта</h3>
				<S.ECards>
					<ECard icon={<Info />} title="Информация о пациенте">
						<ul>
							<li>Ваши личные данные</li>
							<li>Рекомендации врачей</li>
							<li>История болезней</li>
						</ul>
					</ECard>
					<ECard icon={<Results />} title="Результаты анализов">
						<p>Вы можете узнать здесь результаты своих анализов</p>
					</ECard>
					<ECard icon={<AddInfo />} title="Добавить  информацию">
						<p>Добавляйте в свою электронную медицинскую карту новые данные</p>
					</ECard>
					<ECard icon={<History />} title="История приемов">
						<p>Вся информация о полученных услугах за все время хранится здесь</p>
					</ECard>
				</S.ECards>
			</S.PatientInfo>
		</S.AppointemntPage>
	);
};
