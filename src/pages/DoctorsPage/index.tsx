import { DoctorCard } from 'components/UI/DoctorCard';
import { useAppSelector } from 'hooks/useAppSelector';

import * as S from './style';

export const DoctorsPage = () => {
	const { doctors } = useAppSelector(state => state.doctors);


	const doctorsArr = doctors.map(item => (
		<DoctorCard
			key={item.id}
			photoSrc={item.photo}
			name={item.name}
			speciality={item.speciality}
			description={item.description}
			to={`/doctors/${item.id}`}
			
		/>
	));

	return (
		<S.Wrapper>
			<S.Body>
				<S.Title>Наши специалисты</S.Title>
			</S.Body>
			<S.CardList>{doctorsArr}</S.CardList>
		</S.Wrapper>
	);
};
