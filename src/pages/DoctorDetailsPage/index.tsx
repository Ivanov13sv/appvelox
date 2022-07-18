import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { IDoctor } from 'types/doctors';
import { useFetching } from 'hooks/useFetching';
import { FullscreenSpiner } from 'components/UI/FullscreenSpiner';
import { db } from '../../firebase';
import * as S from './style';

export const DoctorDetailsPage = () => {
	const [details, setDetails] = useState<IDoctor>();
	const params = useParams();
	const navigate = useNavigate();
	const [fetching, loading] = useFetching(async () => {
		if (params.doctorId) {
			const docRef = doc(db, 'doctors', params.doctorId);
			const docSnap = await getDoc(docRef);
			setDetails(docSnap.data() as IDoctor);
		}
	});

	useEffect(() => {
		fetching();
		//eslint-disable-next-line
	}, []);

	if (loading) {
		return <FullscreenSpiner />;
	}

	return (
		<S.Section>
			<S.BackButton onClick={() => navigate(-1)}>
				<BiArrowBack size={20} /> Назад
			</S.BackButton>

			<S.Body>
				<S.PersonalInfo>
					<img src={details?.photo} alt="doctorsPhoto" />
				</S.PersonalInfo>
				<S.Description>
					<h2>{details?.name}</h2>
					<h3>{details?.speciality}</h3>
					<p>{details?.description}</p>
					<S.Address>
						<div>
							Клиника : <span>{details?.hospital}</span>{' '}
						</div>
						<div>
							Адрес : <span>{details?.address}</span>{' '}
						</div>
					</S.Address>
				</S.Description>
			</S.Body>
		</S.Section>
	);
};
