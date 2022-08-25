import { DoctorCard } from 'components/UI/DoctorCard';
import { SkeletonDoctorCard } from 'components/UI/Skeletons/SkeletonDoctorCard';
import { useAppSelector } from 'hooks/useAppSelector';
import { Section } from 'components/Section';

import * as S from './style';

export const DoctorsPage = () => {
    const { doctors, loading } = useAppSelector((state) => state.doctors);

    const doctorsArr = doctors.map((item) => (
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
        <Section>
            <S.Body>
                <S.Title>Наши специалисты</S.Title>
            </S.Body>
            <S.CardList>
                {loading
                    ? [0, 1, 2, 3, 4, 5].map((_, i) => (
                          <SkeletonDoctorCard key={i} />
                      ))
                    : doctorsArr}
            </S.CardList>
        </Section>
    );
};
