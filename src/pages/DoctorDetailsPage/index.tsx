import { Button } from 'components/UI/Button';
import { ProfilePhoto } from 'components/UI/ProfilePhoto';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { IDoctor } from 'types/doctors';
import { db } from '../../firebase';
import { LoadableImage } from 'components/LoadbleImage';
import * as S from './style';
import { useFetching } from 'hooks/useFetching';
import { FullscreenSpiner } from 'components/UI/FullscreenSpiner';

export const DoctorDetailsPage = () => {
	const [details, setDetails] = useState<IDoctor>();
	const params = useParams();
	const navigate = useNavigate();
	const [fetching, loading, error] = useFetching(async () => {
		if (params.doctorId) {
			const docRef = doc(db, 'doctors', params.doctorId);
			const docSnap = await getDoc(docRef);
			setDetails(docSnap.data() as IDoctor);
		}
	});

	useEffect(() => {
		fetching();
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
					{/* <LoadableImage src={details.photo} alt="doctorsPhoto" /> */}
					<img src={details?.photo} alt="doctorsPhoto"/>
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
