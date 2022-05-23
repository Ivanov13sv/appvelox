import { FC } from 'react';
import doctorone from 'assets/img/doctor1.png';
import { Button } from '../Button';
import { ProfilePhoto } from '../ProfilePhoto';
import * as S from './style';

interface DoctorCardProps {
	date: string;
	hospital: string;
	address: string;
	photo: string;
    name: string;
	job: string;
    
}

export const DoctorCard: FC<DoctorCardProps> = ({ date, address, hospital, job, name, photo }) => {
	return (
		<S.Card>
			<S.CardBody>
				<S.Date>{date}</S.Date>
				<S.Hospital>{hospital}</S.Hospital>
				<S.Address>{address}</S.Address>
				<S.DoctorInfo>
					<ProfilePhoto width="60px" height="60px" photo={photo} />
					<S.PersonalInfo>
						<S.DoctorName>{name}</S.DoctorName>
						<S.DoctorsJob>{job}</S.DoctorsJob>
					</S.PersonalInfo>
					<Button>Отменить</Button>
				</S.DoctorInfo>
			</S.CardBody>
		</S.Card>
	);
};
